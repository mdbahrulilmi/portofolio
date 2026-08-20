"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "id" | "en";

type LanguageContextType = {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
    children
}:{
    children: React.ReactNode
}){
    const [lang, setLang] = useState<Lang>("id");

    useEffect(() => {
        const saved = localStorage.getItem("lang") as Lang | null;
        if (saved) {
            setLang(saved);
        }
    }, []);

    // SETIAP KALI `lang` BERUBAH, UPDATE ATRIBUT HTML SECARA OTOMATIS
    useEffect(() => {
        localStorage.setItem("lang", lang);
        // Ini kuncinya agar browser tahu bahasa apa yang sedang aktif!
        document.documentElement.lang = lang; 
    }, [lang]);

    return(
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage(){
    const context = useContext(LanguageContext);

    if(!context){
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}