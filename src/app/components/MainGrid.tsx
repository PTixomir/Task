import React, { ReactNode } from "react";
import { GridRow } from "semantic-ui-react";
import { createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    mainGrid: {
      maxWidth: '1320px',
      margin: 'auto',
      padding: '0 30px'
    }
  });

export const MainGrid: React.FC<{children: ReactNode}> = ({children = null}) => {
    const classes = useStyles();
    return (
        <GridRow className={classes.mainGrid}>
            {children}
        </GridRow>
    );
}