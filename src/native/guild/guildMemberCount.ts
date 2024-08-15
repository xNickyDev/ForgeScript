import { PresenceStatusData } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildMemberCount",
    version: "1.0.0",
    description: "Returns the user count of a guild",
    brackets: false,
    aliases: [
        "$serverMemberCount",
        "$serverMembersCount"
    ],
    output: ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve member count from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "presence",
            description: "The presence of the users to count",
            rest: false,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    async execute(ctx, [guild, presence]) {
        guild ??= ctx.guild!

        if (!presence) {
            return this.success(guild?.memberCount)
        } else {
            const status = presence as PresenceStatusData || undefined
            return this.success(status)
        }
        
    },
})
