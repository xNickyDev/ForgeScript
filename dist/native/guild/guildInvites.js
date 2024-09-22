"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const invite_1 = require("../../properties/invite");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildInvites",
    version: "1.5.0",
    description: "Returns all invites of a guild",
    aliases: [
        "$serverInvites"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
            description: "The guild to pull invites from"
        },
        {
            name: "property",
            rest: false,
            type: structures_1.ArgType.Enum,
            description: "The property of the invites to return",
            enum: invite_1.InviteProperty
        },
        {
            name: "separator",
            rest: false,
            type: structures_1.ArgType.String,
            description: "The separator to use for each property"
        }
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [guild, prop, sep]) {
        const invites = await (guild ?? ctx.guild).invites.fetch().catch(ctx.noop);
        return this.success(prop ? invites?.map(invite => invite_1.InviteProperties[prop](invite)) : invites);
    },
});
//# sourceMappingURL=guildInvites.js.map