import React from "react";
import { JitsuProvider } from "@jitsu/jitsu-react";
export var MyProvider = function (_a) {
    var children = _a.children, option = _a.option;
    console.log("dsfgsdgsags Jitsu JITSU_URL", option.JITSU_URL);
    console.log("dsfgsdgsags Jitsu JITSU_KEY", option.JITSU_KEY);
    return (React.createElement(JitsuProvider, { options: {
            host: option.JITSU_URL,
            writeKey: option.JITSU_KEY,
        } }, children));
};
