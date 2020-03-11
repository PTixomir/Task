import React from "react";
import { Form, GridColumn, GridRow, Grid, Button } from 'semantic-ui-react'
import { CardContainer } from "./CardCotainer";
import { useTranslation } from "react-i18next";
import { Field } from "./FormComponents/Field";
import { useForm } from "react-hook-form";
import { isValidDate } from "../utils/DateUtils";

const PaymentForm = () => {
    const { t } = useTranslation('translations');
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (requestdata: any) => {
        console.log(requestdata);
        /*TODO: send request to back end*/
    }
    return (
        <CardContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Grid>
                    <GridRow>
                        <div>
                            <h3>{t('Account information')}</h3>
                        </div>
                    </GridRow>
                    <GridRow>
                        <GridColumn mobile={16} tablet={16} computer={8}>
                            <h3>{t('Remitter')}</h3>
                            <Field
                                name={'remiterFullTitle'}
                                register={register({ required: true, minLength: 2, maxLength: 255 })}
                                error={errors['remiterFullTitle']}
                                validation={{ required: true, minLength: 2, maxLength: 255 }}
                                type='text'
                                label='Name,surname / Company name'
                            />
                            <Field
                                name={'remiterRNo'}
                                register={register({ required: true, minLength: 11, maxLength: 15 })}
                                error={errors['remiterRNo']}
                                validation={{ required: true, minLength: 11, maxLength: 15 }}
                                type='text'
                                label='Personal ID number / Registration No'
                            />
                            <Field
                                name={'remiterANo'}
                                register={register({ required: true, minLength: 9, maxLength: 30 })}
                                error={errors['remiterANo']}
                                validation={{ required: true, minLength: 9, maxLength: 30 }}
                                type='text'
                                label='Account No'
                            />
                        </GridColumn>

                        <GridColumn mobile={16} tablet={16} computer={8}>
                            <h3>{t('Beneficiary')}</h3>
                            <Field
                                name={'beneficiaryFullname'}
                                register={register({ required: true, minLength: 2, maxLength: 255 })}
                                error={errors['beneficiaryFullname']}
                                validation={{ required: true, minLength: 2, maxLength: 255 }}
                                type='text'
                                label='Name,surname / Company name'
                            />
                            <Field
                                name={'beneficiaryRNo'}
                                register={register({ required: true, minLength: 11, maxLength: 15 })}
                                error={errors['beneficiaryRNo']}
                                validation={{ required: true, minLength: 11, maxLength: 15 }}
                                type='text'
                                label='Personal ID number / Registration No'
                            />
                            <Grid>
                                <GridRow>
                                    <GridColumn mobile={8} tablet={8} computer={8}>
                                        <Field
                                            name={'beneficiaryANo'}
                                            register={register({ required: true, minLength: 9, maxLength: 30 })}
                                            error={errors['beneficiaryANo']}
                                            validation={{ required: true, minLength: 9, maxLength: 30 }}
                                            type='text'
                                            label='Account No'
                                        />
                                        <Field
                                            name={'beneficiaryCountry'}
                                            register={register({ required: true, minLength: 4, maxLength: 100 })}
                                            error={errors['beneficiaryCountry']}
                                            validation={{ required: true, minLength: 4, maxLength: 100 }}
                                            type='text'
                                            label='Residence country'
                                        />
                                
                                    </GridColumn>
                                    <GridColumn mobile={8} tablet={8} computer={8}>
                                        <Field
                                            name={'beneficiaryBank'}
                                            error={errors['beneficiaryBank']}
                                            validation={{ required: true, minLength: 9, maxLength: 30 }}
                                            register={register({ required: true, minLength: 9, maxLength: 30 })}
                                            type='text'
                                            label='Beneficiary bank'
                                        />
                                        <Field
                                            name={'beneficiaryBankCode'}
                                            register={register({ required: true, minLength: 8, maxLength: 11 })}
                                            error={errors['beneficiaryBankCode']}
                                            validation={{ required: true, minLength: 8, maxLength: 11 }}
                                            type='text'
                                            label='Bank code'
                                        />
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <div>
                            <h3>{t('Payment information')}</h3>
                        </div>
                    </GridRow>
                    <GridRow>
                        <GridColumn computer={8} tablet={16} mobile={16}>
                            <Field
                                name={'Ammount'}
                                register={register({ required: true, minLength: 1, maxLength: 18, pattern: /(^\d*\.\d{2}[ ][A-Z]{2}$)/ })}
                                error={errors['Ammount']}
                                validation={{ required: true, minLength: 1, maxLength: 18, pattern: /(^\d*\.\d{2}[ ][A-Z]{2}$)/}}
                                validateText=", must be positive number with 2 decimals, space and Curency code 2 letters (uppercase only) for example 1000.00 LV"
                                type='text'
                                label='Amount in figures and currency'
                            />
                        </GridColumn>
                        <GridColumn computer={8} tablet={16} mobile={16}>
                            <Field
                                name={'fee'}
                                register={register({ required: true, minLength: 0, maxLength: 10, pattern: /(^(0|[1-9]\d?)\.\d{2}[ ][A-Z]{2}$)/})}
                                error={errors['fee']}
                                validation={{ required: true, minLength: 0, maxLength: 10, pattern: /(^(0|[1-9])\d?\.\d{2}[ ][A-Z]{2}$)/}}
                                validateText=", Value must be positive number with 2 decimals, space and Curency code 2 letters (uppercase only) for example 10.00 LV"
                                type='text'
                                label='Bank fee'
                            />
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn computer={8} tablet={16} mobile={16}>
                            <Field
                                name={'vDate'}
                                register={register({ required: true, pattern: /^\d{1,2}\/\d{1,2}\/\d{4}$/, validate: isValidDate })}
                                error={errors['vDate']}
                                validation={{ required: true, pattern: /^\d{1,2}\/\d{1,2}\/\d{4}$/, validate: isValidDate }}
                                validateText="dd/mm/yy"
                                type='text'
                                label='Value date'
                            />
                        </GridColumn>
                        <GridColumn computer={8} tablet={16} mobile={16}>
                            <Field
                                name={'exchangeRate'}
                                register={register({ required: true, minLength: 0, maxLength: 10, pattern: /(^\d*\.\d{2}$)/ })}
                                error={errors['exchangeRate']}
                                validation={{ required: true, minLength: 0, maxLength: 10,  pattern: /(^\d*\.\d{2}$)/ }}
                                validateText={', Value must be positive number with 2 decimals'}
                                type='text'
                                label='Exchange rate'
                            />
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn computer={8} tablet={16} mobile={16}>
                        <Field
                                name={'extPaymentNo'}
                                register={register({ required: true, minLength: 0, maxLength: 10 })}
                                error={errors['extPaymentNo']}
                                validation={{ required: true, minLength: 0, maxLength: 10 }}
                                type='text'
                                label='Code of external payment'
                            />
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn computer={16} tablet={16} mobile={16}>
                            <Field
                                name={'paymentDetails'}
                                register={register({ required: true, minLength: 0, maxLength: 4000 })}
                                error={errors['paymentDetails']}
                                validation={{ required: false, minLength: 0, maxLength: 4000 }}
                                type='textArea'
                                label='Payment details'
                            />
                        </GridColumn>
                    </GridRow>
                    <GridRow style={{display: 'flex', flexDiraction: 'row-reverse'}}>
                        <Button type="Submit
                        ">Submit</Button>
                    </GridRow>
                </Grid>
            </Form>
        </CardContainer>
    );
}

export default PaymentForm;