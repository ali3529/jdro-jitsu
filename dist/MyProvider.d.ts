import React, { FC } from "react";
export interface IMyProvider {
    children: React.ReactNode;
    option?: {
        JITSU_URL: string;
        JITSU_KEY: string;
    };
}
export declare const MyProvider: FC<IMyProvider>;
