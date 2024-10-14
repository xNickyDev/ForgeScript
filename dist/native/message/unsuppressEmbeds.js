"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unsuppressEmbeds",
    description: "Unsuppresses embeds on a message, returns bool if fields specified",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to unsuppress embeds on",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, message]) {
        if (!this.hasFields) {
            ctx.container.suppressEmbeds = false;
            return this.success();
        }
        return this.success(!!(await message.suppressEmbeds(false).catch(ctx.noop)));
    },
});
//# sourceMappingURL=unsuppressEmbeds.js.map