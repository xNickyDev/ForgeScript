"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommands",
    version: "1.5.0",
    description: "Returns all application commands of your app",
    brackets: false,
    output: structures_1.ArgType.Json,
    unwrap: true,
    async execute(ctx) {
        const commands = await ctx.client.application.commands.fetch().catch(ctx.noop);
        return this.successJSON(commands);
    },
});
//# sourceMappingURL=applicationCommands.js.map