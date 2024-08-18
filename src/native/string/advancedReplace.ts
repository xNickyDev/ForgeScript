import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$advancedReplace",
    version: "1.5.0",
    aliases: [
        "$advancedReplaceText"
    ],
    output: ArgType.String,
    description: "Replaces text in a string multiple times",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The base text",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "match;replacement",
            description: "The text to match and their replacement",
            required: true,
            rest: true,
            type: ArgType.String,
        }
    ],
    brackets: true,
    execute(ctx, args) {
        let text = args[0]
        console.log(text)

        for (let i = 1; i < args.length; i += 2) {
            console.log(i)
            const [ match, replacement ] = args.slice(i, i + 1)
            console.log(match, replacement)
            console.log(i)
            text = text.replaceAll(match as string, replacement as string)
        }

        return this.success(text)
    },
})
