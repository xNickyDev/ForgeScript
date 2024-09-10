"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const automodRule_1 = require("../../properties/automodRule");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each automod rule to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: automodRule_1.AutomodRuleProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Unknown,
    async execute(ctx, [guild, prop, sep]) {
        const rules = await (guild ?? ctx.guild).autoModerationRules?.fetch().catch(ctx.noop);
        let filtered;
        if (prop) {
            filtered = rules?.map(rule => automodRule_1.AutomodRuleProperties[prop](rule, sep));
        }
        return this.successJSON(!prop ? rules : (sep && prop !== automodRule_1.AutomodRuleProperty.actions && prop !== automodRule_1.AutomodRuleProperty.triggerMetadata) ? filtered?.join(sep ?? ", ") : filtered);
    },
});
//# sourceMappingURL=getAutomodRules.js.map