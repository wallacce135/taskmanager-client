interface IGetGridContainerPossibleArgs {
    gap?: number,
    columns?: number,
    tabletColumns?: number,
    mobileColumns?: number,
    rows?: number,
    tabletRows?: number,
    mobileRows?: number,
}

const possibleClassNames = {
    gap: "isGap",
    columns: "isColumns",
    tabletColumns: "tabletColumns",
    mobileColumns: "isMColumns",
    rows: "isRows",
    tabletRows: "isTRows",
    mobileRows: "isMRows",
}

export const getGridContainerExtraClassNames = (args: IGetGridContainerPossibleArgs) => {
    const classNames: any = {};

    Object.entries(args).forEach(([key, value]) => {
        if (value) classNames[`${possibleClassNames[key as keyof typeof possibleClassNames]}-${value}`] = true
    })

    return classNames;
}