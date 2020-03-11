import React, { FunctionComponent } from "react";
import { Form } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { IErrorMessage, ErrorsMessage } from "./ErrorsMessage";

export interface IField extends IErrorMessage {
    name: string;
    type: string;
    label: string;
    placeholder?: string;
    register: any;
}

export const Field: FunctionComponent<IField> = React.memo(({name, label, type, placeholder, register, error, validation, validateText }) => {
    const [ t ] = useTranslation('translations');
    if (type === 'textArea') {
        return (
            <Form.Field>
                <ErrorsMessage error={error} validation={validation} validateText={validateText}/>
                <label>{label !== null && t(label)}
                    <textarea name={name} ref={register} maxLength={+(validation.maxLength || 255)}/>
                </label>
            </Form.Field>
        );
    }
    return (
        <Form.Field>
            <ErrorsMessage error={error} validation={validation} validateText={validateText}/>
            <label>{label !== null && t(label)}
                <input ref={register} name={name} placeholder={placeholder !== null && placeholder !== undefined ? t(placeholder) : ''} type={type}/>
            </label>
        </Form.Field>
    );
});
