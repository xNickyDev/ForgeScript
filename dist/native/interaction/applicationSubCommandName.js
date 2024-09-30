"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationSubCommandName",
    description: "Returns an application sub command name",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.interaction?.isChatInputCommand() ? ctx.interaction.options.getSubcommand(false) : undefined);
    },
});
//# sourceMappingURL=applicationSubCommandName.js.map