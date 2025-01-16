import { ButtonBuilder, ActionRowBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$disableButtons",
    version: "2.2.0",
    description: "Disables all buttons on the current message",
    aliases: ["$disableAllButtons"],
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    brackets: false,
    execute(ctx, [index]) {
        const data = ctx.container.components
        const components = isNaN(index) ? data : [data[index]]

        components.forEach(row => {
            const actionRow = new ActionRowBuilder()
            row?.components.forEach(component => {
                if (component instanceof ButtonBuilder) {
                    actionRow.addComponents(component.setDisabled(true))
                } else {
                    actionRow.addComponents(component)
                }
            })
        })

        return this.success()
    },
})