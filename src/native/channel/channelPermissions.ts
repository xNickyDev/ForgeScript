import { BaseChannel, GuildChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$channelPermissions",
    version: "1.5.0",
    description: "Returns all permission overwrites of a channel",
    aliases: [
        "$channelPerms",
        "$channelOverwrites"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get perms from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "permissionOverwrites" in i
        },
        {
            name: "property",
            description: "The property of the overwrites to return",
            rest: false,
            required: false,
            type: ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use for every overwrite",
            rest: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Unknown,
    execute(ctx, [ ch, prop, sep ]) {
        const chan = (ch ?? ctx.channel) as GuildChannel
        const perms = chan.permissionOverwrites.cache
        return this.successJSON(prop ? perms.map(perm => perm.id).join(sep ?? ", ") : perms)
    },
})