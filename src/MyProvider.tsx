import React, { FC } from "react";
import { JitsuProvider } from "@jitsu/jitsu-react";

export interface IMyProvider {
  children: React.ReactNode;
  option?: {
    JITSU_URL: string;
    JITSU_KEY: string;
  };
}
export const MyProvider: FC<IMyProvider> = ({ children, option }) => {
  console.log("dsfgsdgsags Jitsu JITSU_URL", option.JITSU_URL);
  console.log("dsfgsdgsags Jitsu JITSU_KEY", option.JITSU_KEY);

  return (
    <JitsuProvider
      options={{
        host: option.JITSU_URL,
        writeKey: option.JITSU_KEY,
      }}
    >
      {children}
    </JitsuProvider>
  );
};
