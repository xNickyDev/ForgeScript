"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteGuildTemplate",
    version: "1.5.0",
    description: "Deletes template from a guild, returns bool",
    aliases: [
        "$deleteServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "template code",
            description: "The code of the template",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [code]) {
        return this.success(!!((await ctx.client.fetchGuildTemplate(code)).delete()));
    },
});
//# sourceMappingURL=deleteGuildTemplate.js.map