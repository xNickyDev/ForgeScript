"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$forumDefaultReactionEmoji",
    version: "1.5.0",
    description: "Returns the default recation emoji of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default recation emoji of",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
            required: true
        },
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [chan]) {
        const emoji = chan?.defaultReactionEmoji;
        const parsed = (0, discord_js_1.parseEmoji)(emoji?.id ?? emoji?.name);
        return this.success(parsed ? parsed.id ? `<${parsed.animated ? "a" : ""}:${parsed.name}:${parsed.id}>` : parsed.name : undefined);
    },
});
//# sourceMappingURL=forumDefaultReactionEmoji.js.map