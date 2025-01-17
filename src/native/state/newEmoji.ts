import { EmojiProperties, EmojiProperty } from "../../properties/emoji"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$newEmoji",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was an emoji instance",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: EmojiProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(EmojiProperties[prop](ctx.states?.emoji?.new, sep))
    },
})
