import { ArgType, NativeFunction } from "../../structures";
export declare enum CustomStatusType {
    state = 0,
    emoji = 1
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.User;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof CustomStatusType;
}], true>;
export default _default;
//# sourceMappingURL=userCustomStatus.d.ts.map