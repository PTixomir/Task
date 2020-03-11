import React from 'react'
import { MainGrid } from './MainGrid';
import { createUseStyles, useTheme } from "react-jss";
import { IAppTheme } from '../interfaces/IAppTheme'
import { AppLogo } from './AppLogo';
import { Nav } from './Nav';

const useStyles = createUseStyles<IAppTheme>(theme => ({
    header: {
        height: theme.headHeight,
        color: theme.headColor,
        background: theme.headBg,
    },
    headerBody: {
        height: theme.headHeight,
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

const Header = () => {
    const theme = useTheme()
    const classes = useStyles(theme);
    return (
        <header className={classes.header}>
            <MainGrid >
                <div className={classes.headerBody}>
                    <AppLogo />
                    <Nav />
                </div>
            </MainGrid>
        </header>
    )
}

export default Header