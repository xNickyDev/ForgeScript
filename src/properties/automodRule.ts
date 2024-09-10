import { AutoModerationRule } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum AutomodRuleProperty {
    id = "id",
    name = "name",
    actions = "actions",
    authorID = "authorID",
    enabled = "enabled",
    eventType = "eventType",
    exemptChannels = "exemptChannels",
    exemptRoles = "exemptRoles",
    triggerMetadata = "triggerMetadata",
    triggerType = "triggerType",
}

export const AutomodRuleProperties = defineProperties<typeof AutomodRuleProperty, AutoModerationRule>({
    id: (i) => i?.id,
    name: (i) => i?.name,
    actions: (i) => JSON.stringify(i?.actions, undefined, 4) || null,
    authorID: (i) => i?.creatorId,
    enabled: (i) => i?.enabled,
    eventType: (i) => i?.eventType,
    exemptChannels: (i, sep) => i?.exemptChannels?.map((x) => x.id).join(sep ?? ", "),
    exemptRoles: (i, sep) => i?.exemptRoles?.map((x) => x.id).join(sep ?? ", "),
    triggerMetadata: (i) => JSON.stringify(i?.triggerMetadata, undefined, 4) || null,
    triggerType: (i) => i?.triggerType,
})