import { BaseChannel, AutoModerationActionType, TextChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof AutoModerationActionType;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is import("discord.js").DMChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | TextChannel | import("discord.js").PrivateThreadChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").VoiceChannel;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.Number;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=setAutomodRuleAction.d.ts.map