"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotTags",
    description: "Sets the bot tags",
    aliases: [
        "$setClientTags"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "tags",
            description: "The new tags",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [tags]) {
        return this.success(!!(await ctx.client.application.edit({ tags: tags }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setBotTags.js.map