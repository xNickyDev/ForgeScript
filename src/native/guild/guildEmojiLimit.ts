import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildEmojiLimit",
    version: "1.5.0",
    description: "Returns the emoji limit of a guild",
    brackets: false,
    aliases: [
        "$serverEmojiLimit"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    output: ArgType.Number,
    unwrap: true,
    execute(ctx, [guild]) {
        let tier = (guild ?? ctx.guild)?.premiumTier
        return this.success(
            tier === 0
                ? 50
                : tier === 1
                    ? 100
                    : tier === 2
                        ? 150
                        : tier === 3
                            ? 250
                            : undefined
        )
    },
})