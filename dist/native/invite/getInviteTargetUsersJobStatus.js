"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const invite_1 = require("../../properties/invite");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getInviteTargetUsersJobStatus",
    version: "2.9.0",
    description: "Gets the status of the job processing target users of an invite",
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
            name: "property",
            description: "The property to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: invite_1.InviteTargetUsersJobStatusProperty
        }
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    async execute(ctx, [invite, prop]) {
        const status = await invite.fetchTargetUsersJobStatus().catch(ctx.noop);
        if (status && prop)
            return this.success(invite_1.InviteTargetUsersJobStatusProperties[prop](status));
        return this.successJSON(status);
    },
});
//# sourceMappingURL=getInviteTargetUsersJobStatus.js.map