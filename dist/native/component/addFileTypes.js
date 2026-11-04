"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.default = new structures_1.NativeFunction({
    name: "$addFileTypes",
    version: "2.9.0",
    description: "Adds allowed file types to the last file upload component",
    aliases: ["$addFileType"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The file types to add, e.g. audio, image, video, .png, etc",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [types]) {
        const comp = (0, components_1.getLastComponent)(ctx);
        if (comp instanceof discord_js_1.FileUploadBuilder)
            comp.addFileTypes(types);
        return this.success();
    },
});
//# sourceMappingURL=addFileTypes.js.map