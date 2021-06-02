import i18next from 'i18next';
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const [t, i18n] = useTranslation("global")
    return (
        <div>
            <h1>{t("header.hello-world")}</h1>
            <br/>
            <button onClick = {() => i18n.changeLanguage("es")}>Españolo</button>
            <button onClick = {() => i18n.changeLanguage("en")}>Ingleso</button>
        </div>
    )
}
