/**
 * Хук для определения классов по БЭМ
 * @param baseClass - основной класс блока
 */
export const useCN = (baseClass?: string) => {
    return {
        /**
         * Конструктор класса для компонента по БЭМ
         * @param element - название дочернего элемента
         * @param mods - объект модификаторов
         * @param utils - утилитарные классы
         */
        getCN: (element: string, mods: object = {}, utils: string[] = []) => {
            const elementClass = element ? `${baseClass}__${element}` : baseClass;
            const modsClasses = Object.entries(mods).map(([key, value]) => value && `${baseClass}--${key}`).join(' ');
            const utilsClasses = utils.join(" ");

            return `${elementClass} ${modsClasses} ${utilsClasses}`.trim();
        }
    }
}
