"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setInviteTargetUsers",
    version: "2.9.0",
    description: "Sets target users for an existing invite, overwrites the previous list",
    aliases: ["$setInviteTargetUser"],
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
            description: "The users to set for the invite",
            rest: true,
            required: true,
            type: structures_1.ArgType.User
        }
    ],
    async execute(ctx, [invite, users]) {
        await invite.updateTargetUsers(users).catch(ctx.noop);
        return this.success();
    },
});
//# sourceMappingURL=setInviteTargetUsers.js.map