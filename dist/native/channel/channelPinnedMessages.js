"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelPinnedMessages",
    description: "Returns the pinned messages of a channel",
    brackets: false,
    aliases: [
        "$pinnedMessages"
    ],
    unwrap: true,
    output: structures_1.ArgType.Message,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull pinned messages from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "messages" in i
        },
        {
            name: "separator",
            description: "The separator to use for each message id",
            rest: false,
            type: structures_1.ArgType.String
        },
    ],
    async execute(ctx, [channel, sep]) {
        channel ??= ctx.channel;
        const messages = await channel?.messages.fetchPinned().catch(ctx.noop);
        return this.success(messages ? messages.map(msg => msg.id).join(sep ?? ", ") : null);
    },
});
//# sourceMappingURL=channelPinnedMessages.js.map