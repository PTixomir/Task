import React from 'react';
import Router from './Router';
import { MainGrid } from './MainGrid';
import { useTheme } from 'theming';
import { createUseStyles } from 'react-jss';
import { IAppTheme } from '../interfaces/IAppTheme';

const useStyles = createUseStyles<IAppTheme>(theme => ({
    content: {
        background: '#f8f8f8'
    }
}));

export const Content = () => {
    const theme = useTheme()
    const classes = useStyles(theme);
    return (
        <div className={classes.content}>
            <MainGrid>
                <Router />
            </MainGrid>
        </div>
    );
}