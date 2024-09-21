import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$threadIsArchived",
    version: "1.5.0",
    aliases: [
        "$isArchived",
        "$threadArchived"
    ],
    description: "Archives a thread, returns bool",
    brackets: false,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The thread to check if its archived",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        }
    ],
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel) as ThreadChannel
        if (!thread.isThread()) return this.success()
            
        return this.success(!!thread.archived)
    },
})
