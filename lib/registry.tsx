"use client";

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
                                                     children,
                                                 }: {
    children: React.ReactNode;
}) {
    // Only create stylesheet on server
    const [styledComponentsStyleSheet] = useState(() =>
        typeof window === 'undefined' ? new ServerStyleSheet() : null
    );

    useServerInsertedHTML(() => {
        if (!styledComponentsStyleSheet) return null;

        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') {
        // On client, just return children
        return <>{children}</>;
    }

    // On server, wrap with StyleSheetManager
    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet!.instance}>
            {children}
        </StyleSheetManager>
    );
}