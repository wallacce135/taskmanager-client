"use client"

import { useContext } from "react";
import { ctx as GridContext, GridItemPropTypes, IGridItemProps } from "../config";
import { IwithGetCN } from "@/shared/lib/component";

/**
 * Элемент грид-разметки
 * @param extraClasses{object} - классы-модификаторы
 * @param children{JSX.Element} - дочерние элементы
 * @constructor
 */
export const GridItem = ({
    extraClasses,
    children
}: IGridItemProps) => {
    const { getCN } = useContext<IwithGetCN>(GridContext)

    return (
        <div className={getCN("item", extraClasses)}>
            { children }
        </div>
    )
}

GridItem.propTypes = GridItemPropTypes;