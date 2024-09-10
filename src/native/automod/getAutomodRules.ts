import { ArgType, NativeFunction, Return } from "../../structures"
import { AutomodRuleProperty, AutomodRuleProperties } from "../../properties/automodRule"
import { AutoModerationRule } from "discord.js"
import { filter } from "lodash"

export default new NativeFunction({
    name: "$getAutomodRules",
    version: "1.5.0",
    description: "Returns all automod rules of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get automod rules from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each automod rule to return",
            rest: false,
            type: ArgType.Enum,
            enum: AutomodRuleProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    async execute(ctx, [ guild, prop, sep ]) {
        const rules = await (guild ?? ctx.guild).autoModerationRules?.fetch().catch(ctx.noop)

        let filtered
        if (prop) {
            filtered = rules?.map(rule => AutomodRuleProperties[prop](rule, sep))
        }

        return this.successJSON(!prop ? rules : (sep && prop !== AutomodRuleProperty.actions && prop !== AutomodRuleProperty.triggerMetadata) ? filtered?.join(sep ?? ", ") : filtered)
    },
})