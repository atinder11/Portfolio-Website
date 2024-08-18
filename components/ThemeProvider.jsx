'use client';

import {ThemeProvider as NextThememsProvider} from 'next-themes';
export function ThemeProvider({children,...props}){
    return <NextThememsProvider {...props}>
        {children}
    </NextThememsProvider>
}