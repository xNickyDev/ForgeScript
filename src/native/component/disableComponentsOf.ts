import { ActionRowBuilder, MessageActionRowComponentBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$disableComponentsOf",
    version: "2.2.0",
    description: "Disables all components of a message, returns bool",
    aliases: ["$disableAllComponentsOf"],
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to disable buttons on",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
    ],
    brackets: true,
    output: ArgType.Boolean,
    async execute(ctx, [, msg]) {
        const components = msg.components.map(x => ActionRowBuilder.from<MessageActionRowComponentBuilder>(x))

        for (let i = 0, len = components.length; i < len; i++) {
            const actionRow = new ActionRowBuilder()
            components[i]?.components.forEach(comp => actionRow.addComponents(comp.setDisabled(true)))
        }

        return this.success(
            !!(await msg.edit({ components: components as ActionRowBuilder<MessageActionRowComponentBuilder>[] }).catch(ctx.noop))
        )
    },
})