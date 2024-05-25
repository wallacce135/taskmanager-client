import {getComponentDefaultProps} from "@/shared/lib/component";

export const defaultProps = getComponentDefaultProps({
    baseClass: "gridFlow",
    context: {},
    children: null,
    gap: null,
    columns: null,
    tabletColumns: null,
    mobileColumns: null,
    rows: null,
    tabletRows: null,
    mobileRows: null,
})