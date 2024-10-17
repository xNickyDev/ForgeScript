import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$nickname",
    version: "1.0.0",
    description: "Returns the member nickname",
    brackets: false,
    aliases: ["$memberNickname"],
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member id return its nick",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        return this.success((member ?? ctx.member ?? ctx.interaction?.member)?.displayName)
    },
})
