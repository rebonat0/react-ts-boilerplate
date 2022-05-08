import { Grid, Stack, TextField } from '@mui/material';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { InputForm } from '../../types';

interface Props {
    inputs: InputForm[],
    touched: FormikTouched<any>,
    errors: FormikErrors<any>,
    getFieldProps(n: string): FieldInputProps<any>, 
};

const FormBuilder: React.FC<Props> = ({
    inputs,
    touched,
    errors,
    getFieldProps,
}) => {

    return (
        <Stack direction={{ xs: 'row', sm: 'row', md: 'column' }} spacing={2}>
            {inputs?.map((input, i) => (
                <Grid item { ...input.grid } key={`${i}-${input.label}-${input.type}`}>
                    <TextField 
                        fullWidth
                        label={input.label}
                        placeholder={input.placeholder}
                        required={input.required}
                        error={Boolean(touched[input.id] && errors[input.id])}
                        helperText={touched[input.id] && errors[input.id]}
                        {...getFieldProps(input.id)}
                    />
                </Grid>
            ))}
        </Stack>
    )

}

export default FormBuilder;