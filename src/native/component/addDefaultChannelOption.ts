import { BaseSelectMenuBuilder, ChannelSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addDefaultChannelOption",
    version: "1.4.0",
    description: "Adds a default channel option to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ channels ]) {
        const menu = ctx.container.components.at(-1)
        if (menu && menu instanceof ChannelSelectMenuBuilder) {
            menu.addDefaultChannels(channels)
        }

        return this.success()
    },
})