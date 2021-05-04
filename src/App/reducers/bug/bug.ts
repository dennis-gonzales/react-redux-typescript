import IAction from "../../interfaces/common/IAction";

export default interface IBug {
    readonly id?: number;
    readonly issuerName?: string;
    readonly timestamp?: string;
    title?: string;
    description?: string;
    resolved?: boolean;
}

export interface IBugAction<T> extends IAction<T> { }