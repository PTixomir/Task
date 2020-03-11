import React from "react";
import { FunctionComponent } from "react";
import { ValidationOptions } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useTheme } from "theming";
import { createUseStyles } from "react-jss";
import { IAppTheme } from "../../interfaces/IAppTheme";

export interface IErrorMessage {
    error?: Record<string, any>;
    validation: ValidationOptions;
    validateText?: string;
}
const useStyles = createUseStyles<IAppTheme>(theme => ({
    errorMessage: {
        color: theme.errorCodeColor
    }
}));

export const ErrorsMessage: FunctionComponent<IErrorMessage> = React.memo(({error = null, validation, validateText}) => {
    const theme = useTheme()
    const { t } = useTranslation();
    const classes = useStyles(theme);
    if (error == null) return null;
    return ( 
        <label className={classes.errorMessage}>{t(getErrorMessage(error, validation, validateText))}</label>
    );
});

const getErrorMessage = (error: Record<string, any>, validation: ValidationOptions, validateText?: string) => {
    
    switch (error.type) {
        case 'minLength':
            return 'Input text must be longer minimum ' + validation.minLength;
        case 'maxLength':
            return 'Input text too long max ' + validation.maxLength;
        case 'pattern':
            return 'Please follow the pattern '+ validateText;
        case 'required':
            return 'This field is required';
        case 'validate':
            return validateText || 'Something went wrong';

        default:
            return 'Something went wrong';
    }
}