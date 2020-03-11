import React, { ReactNode } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    cardContainer: {
        position: 'relative',
        background: '#fff',
        boxShadow: '0 1px 2px #ccc',
        padding: '30px 40px',
        margin: '20px 0',
        '&:hover': {
            boxShadow: '0 2px 8px #bbb'
        }
    }
  });

export const CardContainer: React.FC<{children: ReactNode}> = ({children = null}) => {
    const classes = useStyles();
    return (
        <div className={classes.cardContainer}>
            {children}
        </div>
    );
}