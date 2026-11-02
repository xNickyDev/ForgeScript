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
    name: "$addInviteTargetUsers",
    version: "2.9.0",
    description: "Adds target users to an existing invite",
    aliases: ["$addInviteTargetUser"],
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
            name: "users",
            description: "The users to add to the invite",
            rest: true,
            required: true,
            type: structures_1.ArgType.User
        }
    ],
    async execute(ctx, [invite, users]) {
        const buffer = await invite.fetchTargetUsers().catch(ctx.noop);
        if (buffer) {
            await invite.updateTargetUsers([
                ...(0, parseTargetUsers_1.default)(buffer),
                ...users
            ]).catch(ctx.noop);
        }
        return this.success();
    },
});
//# sourceMappingURL=addInviteTargetUsers.js.map