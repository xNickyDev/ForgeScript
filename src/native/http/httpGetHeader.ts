import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$httpGetHeader",
    version: "1.5.0",
    description: "Gets an HTTP header",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The header name",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [name]) {
        const header = ctx.http.headers

        if (header) {
            return this.success(header[name])
        } else {
            return this.success()
        }
    },
})