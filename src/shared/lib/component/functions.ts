import React, { createContext } from "react";

export const getComponentDefaultProps = (defaultProps: React.ComponentProps<any>) => {
    if (!defaultProps.baseClass || typeof defaultProps.baseClass !== "string") throw new Error("baseClass must be a not empty string");

    return {
        context: createContext<any>(defaultProps.context),
        getDP: <T>(props: any) => {
            const resultPropsArray = Object.entries(defaultProps).map(([key, value]) => {
                return [ key, props[key] ? props[key] : defaultProps[key] ]
            });

            return {
                ...Object.fromEntries(resultPropsArray),
            } as T;
        }
    }
}