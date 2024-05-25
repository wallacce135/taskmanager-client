// html типа head, мета-тегов и прочего для SEO
// page рендерится внутри layout как children

import React from 'react';

/** 
 * Корневая разметка для страницы авторизации
 * @param props
 * @param props.children 
 * @returns JSX.Element
 */

interface UIProps {
    children: React.ReactNode;
}

export default function UILayout({ children }: UIProps) {
    return children;
}