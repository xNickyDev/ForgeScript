"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseTargetUsers_1 = __importDefault(require("../../functions/parseTargetUsers"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getInviteTargetUsers",
    version: "2.9.0",
    description: "Gets the target users of an invite",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code of the invite",
            type: structures_1.ArgType.Invite,
            required: true,
            rest: false
        },
        {
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.User,
    async execute(ctx, [invite, sep]) {
        const buffer = await invite.fetchTargetUsers().catch(ctx.noop);
        if (!buffer)
            return this.success();
        return this.success((0, parseTargetUsers_1.default)(buffer).join(sep ?? ", "));
    },
});
//# sourceMappingURL=getInviteTargetUsers.js.map