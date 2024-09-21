"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$threadIsArchived",
    version: "1.5.0",
    aliases: [
        "$isArchived",
        "$threadArchived"
    ],
    description: "Archives a thread, returns bool",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The thread to check if its archived",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        }
    ],
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel);
        if (!thread.isThread())
            return this.success();
        return this.success(!!thread.archived);
    },
});
//# sourceMappingURL=threadIsArchived.js.map