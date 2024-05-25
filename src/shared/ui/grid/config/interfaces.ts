import {ReactNode} from "react";

export interface IGridProps {
    baseClass?: string,
    children?: ReactNode,
    gap?: number,
    columns?: number,
    tabletColumns?: number,
    mobileColumns?: number,
    rows?: number,
    tabletRows?: number,
    mobileRows?: number,
}

export interface IGridItemProps {
    extraClasses?: object,
    children?: ReactNode,
    columnSpan?: number,
    columnStart?: number,
    columnEnd?: number
}