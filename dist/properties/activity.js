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
    details: (i) => i?.details,
    buttons: (i, sep) => i?.buttons.join(sep ?? ", "),
    flags: (i, sep) => i?.flags.toArray().join(sep ?? ", "),
    timestamp: (i) => i?.createdTimestamp,
    endTimestamp: (i) => i?.timestamps?.end?.getTime(),
    startTimestamp: (i) => i?.timestamps?.start?.getTime(),
    partyId: (i) => i?.party?.id,
    partySize: (i) => i?.party?.size[0],
    syncId: (i) => i?.syncId,
    url: (i) => i?.url,
    largeText: (i) => i?.assets?.largeText || null,
    largeImage: (i) => i?.assets?.largeImageURL() || null,
    smallText: (i) => i?.assets?.smallText || null,
    smallImage: (i) => i?.assets?.smallImageURL() || null,
});
//# sourceMappingURL=activity.js.map