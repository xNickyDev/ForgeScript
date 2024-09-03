import { ApplicationEmoji } from "discord.js"
import noop from "../../functions/noop"
import { Arg, ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addApplicationEmoji",
    version: "1.5.0",
    description: "Adds an application emoji",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name for the emoji",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "url",
            description: "The emoji icon to use",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "return emoji ID",
            description: "Whether to return the emoji id",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    output: ArgType.ApplicationEmoji,
    async execute(ctx, [name, url, returnEmojiID]) {
        const emoji = await ctx.client.application.emojis.create({
            name: name,
            attachment: url
        }).catch(ctx.noop)

        return this.success(returnEmojiID && emoji ? emoji.id : undefined)
    },
})