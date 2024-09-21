import { Activity, ActivityType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ActivityProperty {
    name = "name",
    type = "type",
    details = "details",
    buttons = "buttons",
    flags = "flags",
    timestamp = "timestamp",
    endTimestamp = "endTimestamp",
    startTimestamp = "startTimestamp",
    partyId = "partyId",
    partySize = "partySize",
    syncId = "syncId",
    url = "url",
    largeText = "largeText",
    largeImage = "largeImage",
    smallText = "smallText",
    smallImage = "smallImage",
}

export const ActivityProperties = defineProperties<typeof ActivityProperty, Activity>({
    name: (i) => i?.name,
    type: (i) => ActivityType[i?.type!],
    details: (i) => (i && "details" in i ? i.details : null),
    buttons: (i, sep) => (i && "buttons" in i ? i.buttons.join(sep ?? ", ") : null),
    flags: (i, sep) => (i && "flags" in i ? i.flags.toArray().join(sep ?? ", ") : null),
    timestamp: (i) => i?.createdTimestamp,
    endTimestamp: (i) => (i?.timestamps && "end" in i.timestamps ? i.timestamps.end?.getTime() : null),
    startTimestamp: (i) => (i?.timestamps && "start" in i.timestamps ? i.timestamps.start?.getTime() : null),
    partyId: (i) => (i?.party && "id" in i.party ? i.party.id : null),
    partySize: (i) => (i?.party && "size" in i.party ? i.party.size[0] : null),
    syncId: (i) => (i && "syncId" in i ? i.syncId : null),
    url: (i) => (i && "url" in i ? i.url : null),
    largeText: (i) => (i?.assets && "largeText" in i.assets ? i.assets.largeText : null),
    largeImage: (i) => (i?.assets && "largeImageURL" in i.assets ? i.assets.largeImageURL() : null),
    smallText: (i) => (i?.assets && "smallText" in i.assets ? i.assets.smallText : null),
    smallImage: (i) => (i?.assets && "smallImageURL" in i.assets ? i.assets.smallImageURL() : null),
})