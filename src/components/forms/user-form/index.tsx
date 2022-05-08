import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../../store';
import { UserService } from '../../../services/user.service';
import { UserTypes } from '../../../types';
import FormBuilder from '../../form-builder';
import { USER_FORM_INPUTS } from '../../../builders';

interface Props {
    isFromEdit?: boolean,
}

const UserForm: React.FC<Props> = ({ isFromEdit = false }) => {
    const navigate = useNavigate();

    const { user, loading } = useSelector((state: RootState) => state.user);

    const afterSubmit = (isValid?: boolean, msg?: string) => {
        if (!isValid) {
            toast(
                msg,
                {
                    autoClose: 1500,
                    type: 'error',
                }
            );
            return
        }

        toast(
            msg,
            {
                autoClose: 1500,
                type: 'success',
            },
        );

        navigate('/app/user');
    }

    const VALIDATION_SCHEMA = Yup.object().shape({
        firstName: Yup.string().required()
    });

    const formik = useFormik<UserTypes.Model>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        } as UserTypes.Model,
        validationSchema: VALIDATION_SCHEMA,
        onSubmit: async (values) => {
            if (!isFromEdit) {
                await UserService.create(values, (isValid, msg) => {
                    afterSubmit(isValid, msg);
                });
            } else {
                await UserService.update(values.id, values, (isValid, msg) => {
                    afterSubmit(isValid, msg);
                });
            }
        }
    });

    const { 
        errors,
        touched,
        handleSubmit,
        getFieldProps,
    } = formik;

    useEffect(() => {
        if (isFromEdit) {
            formik.setValues({
                ...user,
            });
        }
    }, [user]);

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <FormBuilder 
                        errors={errors}
                        touched={touched}
                        inputs={USER_FORM_INPUTS}
                        getFieldProps={getFieldProps}
                    />
                </Stack>
                <LoadingButton
                    fullWidth
                    type='submit'
                    variant='contained'
                    loading={loading?.create || loading?.update}
                    sx={{ mt: 2 }}
                >
                    {isFromEdit ? 'Alterar' : 'Criar'}
                </LoadingButton>
            </Form>
        </FormikProvider>
    )
}

export default UserForm;