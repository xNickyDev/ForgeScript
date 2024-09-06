import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createGuildTemplate",
    version: "1.5.0",
    description: "Creates template for a guild, returns template code",
    aliases: [
        "$createServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create template for",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the template",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The description of the template",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    async execute(ctx, [guild, name, desc]) {
        return this.successJSON((await guild.createTemplate(name, desc || undefined)).code)
    },
})