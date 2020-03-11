import React from 'react';
import { useTheme } from 'theming';
import { createUseStyles } from 'react-jss';
import { IAppTheme } from '../interfaces/IAppTheme';

const useStyles = createUseStyles<IAppTheme>(theme => ({
    logoContainer: {
        height: theme.headHeight,
        position: 'relative'
    },
    logoImg: {
        height: `calc(${theme.headHeight} - 10px)`,
        margin: '0',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)'
    }
}));

export const AppLogo = () => {
    const theme = useTheme()
    const classes = useStyles(theme);
    return (
        <div className={classes.logoContainer}>
            <img className={classes.logoImg} src="/logo.svg" alt="AppLogo" />
        </div>
    );
}