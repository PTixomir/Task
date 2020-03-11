import React from 'react'
import { MainGrid } from './MainGrid';
import { createUseStyles, useTheme } from "react-jss";
import { IAppTheme } from '../interfaces/IAppTheme'

const useStyles = createUseStyles<IAppTheme>(theme => ({
    footer: {
        height: theme.footHeight,
        color: theme.footColor,
        background: theme.footBg,
        marginTop: 'auto'
    },
    footerBody: {
        height: theme.footHeight,
        display: 'flex',
        justifyContent: 'space-between',
    },
    centeredContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    },
}));

const Footer = () => {
    const theme = useTheme()
    const classes = useStyles(theme);
    return (
        <footer className={classes.footer}>
            <MainGrid>
                <div className={classes.footerBody}>
                    <div className={classes.centeredContent}>
                        2020 © AS „Bank”. Visas tiesības aizsargātas.
                    </div>
                </div>
            </MainGrid>
        </footer>
    );
}

export default Footer