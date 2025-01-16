"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableComponentsOf",
    description: "Disables all components of a message, returns bool",
    aliases: ["$disableAllComponentsOf"],
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to disable buttons on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
    ],
    brackets: true,
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, msg]) {
        const components = msg.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        for (let i = 0, len = components.length; i < len; i++) {
            const actionRow = new discord_js_1.ActionRowBuilder();
            components[i]?.components.forEach(comp => actionRow.addComponents(comp.setDisabled(true)));
        }
        return this.success(!!(await msg.edit({ components: components }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=disableComponentsOf.js.map