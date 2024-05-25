"use client"

import { useCN } from "@/shared/lib/component/hooks";
import { defaultProps, IGridProps, types, ctx as GridContext } from "../config";
import { GridItem } from "@/shared/ui/grid/ui/GridItem";
import { getGridContainerExtraClassNames } from "@/shared/ui/grid/lib/getGridContainerClassName";

/**
 * Контейнер для грид-разметки
 * @param props.baseClass{string} - основной класс
 * @param props.gap{number} - ширина и высота отступов в rem
 * @param props.children{JSX.Element} - дочерние элементы
 * @param props.columns{number} - кол-во колонок
 * @param props.tabletColumns{number} - кол-во колонок для планшетов
 * @param props.mobileColumns{number} - кол-во колонок для смартфонов
 * @param props.rows{number} - кол-во строк
 * @param props.tabletRows{number} - кол-во строк для планшетов
 * @param props.mobileRows{number} - кол-во строк для смартофонов
 * @constructor
 */
const _Grid = (props: IGridProps) => {
    const {getCN} = useCN(props.baseClass);

    const { gap, columns, tabletColumns, mobileColumns, rows, tabletRows, mobileRows } = props;
    const extraClasses = getGridContainerExtraClassNames({ gap, columns, tabletColumns, mobileColumns, rows, tabletRows, mobileRows });

    return (
        <GridContext.Provider value={{getCN}}>
            <div className={getCN("", extraClasses)}>
                { props.children }
            </div>
        </GridContext.Provider>
    )

}

export const Grid = (props: IGridProps) => _Grid(defaultProps.getDP<IGridProps>(props));
Grid.propTypes = types;
Grid.Item = GridItem;