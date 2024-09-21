"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityProperties = exports.ActivityProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ActivityProperty;
(function (ActivityProperty) {
    ActivityProperty["name"] = "name";
    ActivityProperty["type"] = "type";
    ActivityProperty["details"] = "details";
    ActivityProperty["buttons"] = "buttons";
    ActivityProperty["flags"] = "flags";
    ActivityProperty["timestamp"] = "timestamp";
    ActivityProperty["endTimestamp"] = "endTimestamp";
    ActivityProperty["startTimestamp"] = "startTimestamp";
    ActivityProperty["partyId"] = "partyId";
    ActivityProperty["partySize"] = "partySize";
    ActivityProperty["syncId"] = "syncId";
    ActivityProperty["url"] = "url";
    ActivityProperty["largeText"] = "largeText";
    ActivityProperty["largeImage"] = "largeImage";
    ActivityProperty["smallText"] = "smallText";
    ActivityProperty["smallImage"] = "smallImage";
})(ActivityProperty || (exports.ActivityProperty = ActivityProperty = {}));
exports.ActivityProperties = (0, defineProperties_1.default)({
    name: (i) => i?.name,
    type: (i) => discord_js_1.ActivityType[i?.type],
    details: (i) => (i && "details" in i ? i.details : undefined),
    buttons: (i, sep) => (i && "buttons" in i ? i.buttons.join(sep ?? ", ") : undefined),
    flags: (i, sep) => (i && "flags" in i ? i.flags.toArray().join(sep ?? ", ") : undefined),
    timestamp: (i) => i?.createdTimestamp,
    endTimestamp: (i) => (i?.timestamps && "end" in i.timestamps ? i.timestamps.end?.getTime() : undefined),
    startTimestamp: (i) => (i?.timestamps && "start" in i.timestamps ? i.timestamps.start?.getTime() : undefined),
    partyId: (i) => (i?.party && "id" in i.party ? i.party.id : undefined),
    partySize: (i) => (i?.party && "size" in i.party ? i.party.size[0] : undefined),
    syncId: (i) => (i && "syncId" in i ? i.syncId : undefined),
    url: (i) => (i && "url" in i ? i.url : undefined),
    largeText: (i) => (i?.assets && "largeText" in i.assets ? i.assets.largeText : undefined),
    largeImage: (i) => (i?.assets && "largeImageURL" in i.assets ? i.assets.largeImageURL() : undefined),
    smallText: (i) => (i?.assets && "smallText" in i.assets ? i.assets.smallText : undefined),
    smallImage: (i) => (i?.assets && "smallImageURL" in i.assets ? i.assets.smallImageURL() : undefined),
});
//# sourceMappingURL=activity.js.map