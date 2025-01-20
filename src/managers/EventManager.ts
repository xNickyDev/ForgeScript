import { ClientEvents, Collection } from "discord.js"
import { type ForgeClient } from "../core/ForgeClient"
import { CommandType } from "../structures/base/BaseCommand"
import { readdirSync } from "fs"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { BaseEventHandler, CustomEvents } from "../structures"

export const NativeEventName = "native"

export class EventManager {
    public static readonly Loaded: Partial<Record<string, Record<string, BaseEventHandler>>> = {}

    private events = new Collection<string, Collection<string, BaseEventHandler>>()

    public constructor(private readonly client: ForgeClient) {}

    public static loadNative() {
        // eslint-disable-next-line no-undef
        EventManager.load(NativeEventName, __dirname + "/../handlers/events")
    }
    
    load(name: string, ...events: (string | string[])[]): void {
        for (const eventType of events.flat()) {
            EventManager.Loaded[name] ??= {}
            const event = EventManager.Loaded[name]![eventType]
            if (!event) {
                if (!(eventType in ({} as CustomEvents))) {
                    throw new Error(`Event ${name} => ${eventType} is not supported.`)
                }
            }
            if (this.events.get(name)?.has(eventType)) continue
            EventManager.Loaded[name]![eventType] = event
            this.events.ensure(name, () => new Collection()).set(eventType, event)
            event.register(this.client)
        }
    }

    public static load(name: string, path: string) {
        this.Loaded[name] = {}
        for (const file of recursiveReaddirSync(path).filter((x) => x.endsWith(".js"))) {
            const req = require(file).default as BaseEventHandler
            this.Loaded[name]![req.name] = req
        }
    }

    public static toJSON(name: string) {
        return Object.values(this.Loaded[name]!).map((x) => ({ ...x!.data }))
    }

    public has(handler: string, type: any) {
        return this.events.get(handler)?.has(type) ?? false
    }
}
