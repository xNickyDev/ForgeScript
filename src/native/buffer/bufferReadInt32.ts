import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$bufferReadInt32",
    version: "1.2.0",
    description: "Reads int from a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable the buffer is allocated on",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "index",
            description: "The index to start reading at",
            required: true,
            type: ArgType.Number,
            rest: false
        }
    ],
    output: ArgType.Number,
    execute(ctx, [ name, begin ]) {
        return this.success(ctx.getEnvironmentInstance(Buffer, name)?.readInt32LE(begin) ?? 0)
    },
})