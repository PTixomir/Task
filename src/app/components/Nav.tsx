import React from 'react';
import { useTheme } from 'theming';
import { createUseStyles } from 'react-jss';
import { IAppTheme } from '../interfaces/IAppTheme';
import { useTranslation } from 'react-i18next';
import { Button } from 'semantic-ui-react';

const useStyles = createUseStyles<IAppTheme>({
    navContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    },
});

export const Nav = () => {
    const theme = useTheme()
    const classes = useStyles(theme);
    const { i18n } = useTranslation();
    const lang = i18n.language;
    console.log(lang);
    return (
        <div className={classes.navContainer}>
            <div className={classes.navLang}>
                {lang !== 'lv' && <Button content={'LV'} onClick={() => { i18n.changeLanguage('lv'); }} />}
                {lang !== 'en' && <Button content={'EN'} onClick={() => { i18n.changeLanguage('en'); }} />}
                {lang !== 'ru' && <Button content={'RU'} onClick={() => { i18n.changeLanguage('ru'); }} />}
            </div>
        </div>
    );
}