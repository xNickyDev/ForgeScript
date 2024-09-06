"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createGuildTemplate",
    version: "1.5.0",
    description: "Creates template for a guild, returns template code",
    aliases: [
        "$createServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create template on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the template",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The description of the template",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.String,
    async execute(ctx, [guild, name, desc]) {
        return this.successJSON((await guild.createTemplate(name, desc || undefined)).code);
    },
});
//# sourceMappingURL=createGuildTemplate.js.map