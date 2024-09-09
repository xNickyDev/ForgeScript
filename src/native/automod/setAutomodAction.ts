import { BaseChannel, AutoModerationActionType, GuildTextChannelResolvable, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodAction",
    version: "1.5.0",
    description: "Sets a new automod rule action",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "type",
            description: "The type of the automod rule action",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: AutoModerationActionType
        },
        {
            name: "channel ID",
            description: "The channel to which content will be logged",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "duration",
            description: "The timeout duration in seconds",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "message",
            description: "The custom message that is shown whenever a message is blocked",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [ type, channel, duration, message ]) {
        ctx.automodRule.actions?.push({
            type: type,
            metadata: {
                channel: channel as GuildTextChannelResolvable | ThreadChannel,
                customMessage: message,
                durationSeconds: duration
            }
        })

        return this.success()
    },
})