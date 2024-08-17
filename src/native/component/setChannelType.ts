import { ChannelSelectMenuBuilder, ChannelType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$setChannelType",
    version: "1.5.0",
    aliases: ["$setChannelTypes"],
    description: "Adds channel types to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The channel types to set",
            rest: true,
            enum: ChannelType,
            required: true,
            type: ArgType.Enum
        }
    ],
    execute(ctx, [ types ]) {
        const menu = ctx.container.components.at(-1)
        
        if (menu && menu instanceof ChannelSelectMenuBuilder) {
            menu.setChannelTypes(types)
        }

        return this.success()
    },
})