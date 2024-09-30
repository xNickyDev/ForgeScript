import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationSubCommandName",
    version: "1.5.0",
    description: "Returns an application sub command name",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.interaction?.isChatInputCommand() ? ctx.interaction.options.getSubcommand(false) : undefined)
    },
})