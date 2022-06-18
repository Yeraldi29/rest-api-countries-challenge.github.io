import React, { useEffect, useState } from "react";

const getInitialTheme = ()=>{
    if (typeof window !== 'undefined' && window.localStorage){
        
        const userMedia = window.matchMedia( '(prefers-color-scheme:dark)');
    
        if(userMedia.matches){
            return 'dark';
        }
    }
}

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState(getInitialTheme);
    const rawSetTheme = (rawTheme)=>{
        
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    useEffect(()=>{
        rawSetTheme(theme);
    },[theme])
    return (
        <ThemeContext.Provider value={{theme,setTheme}}  >
            {children}
        </ThemeContext.Provider >
    );
}