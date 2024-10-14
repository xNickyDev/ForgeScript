"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const forumTag_1 = require("../../properties/forumTag");
exports.default = new structures_1.NativeFunction({
    name: "$forumTags",
    version: "1.5.0",
    description: "Returns all available tags of a forum",
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "channel ID",
            description: "The channel to get tags of",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
            required: true
        },
        {
            name: "property",
            description: "The property to return for every tag",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: forumTag_1.ForumTagProperty
        },
        {
            name: "separator",
            description: "The separator to use for every tag property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [ch, property, sep]) {
        const channel = ch;
        const tags = channel?.availableTags;
        if (!property) {
            return this.successJSON(tags);
        }
        return this.success(tags?.map(tag => forumTag_1.ForumTagProperties[property](tag)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=forumTags.js.map