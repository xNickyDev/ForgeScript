import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$month",
    version: "1.2.0",
    description: "Returns current month",
    unwrap: true,
    output: ArgType.Number,
    execute: function() {
        return this.success(new Date().getMonth() + 1)
    }
})