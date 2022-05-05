import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPass, setShowRepeatPass] = useState(false);

    const RegisterSchema = Yup.object().shape({
        firstName: Yup
            .string()
            .min(2, 'Nome muito pequeno')
            .max(50, 'Nome muito grande')
            .required('Informe o seu nome'),
        lastName: Yup
            .string()
            .min(2, 'Sobrenome muito pequeno')
            .max(50, 'Sobrenome muito grande')
            .required('Informe o seu sobrenome'),
        email: Yup
            .string()
            .email('Email incorreto')
            .required('Informe o seu e-mail'),
        password: Yup
            .string()
            .oneOf([Yup.ref('repeatPassword'), null], 'As senhas não coincidem')
            .required('Insira a sua senha'),
        repeatPassword: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
            .required('Repita a sua senha'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {}
    });

    const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            fullWidth
                            label="Nome"
                            {...getFieldProps('firstName')}
                            error={Boolean(touched.firstName && errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                        />

                        <TextField
                            fullWidth
                            label="Sobrenome"
                            {...getFieldProps('lastName')}
                            error={Boolean(touched.lastName && errors.lastName)}
                            helperText={touched.lastName && errors.lastName}
                        />
                    </Stack>

                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Email"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />

                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Senha"
                        {...getFieldProps('password')}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                </IconButton>
                            </InputAdornment>
                        )
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                    />

                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showRepeatPass ? 'text' : 'password'}
                        label="Repetir Senha"
                        {...getFieldProps('repeatPassword')}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={() => setShowRepeatPass((prev) => !prev)}>
                                    <Icon icon={showRepeatPass ? eyeFill : eyeOffFill} />
                                </IconButton>
                            </InputAdornment>
                        )
                        }}
                        error={Boolean(touched.repeatPassword && errors.repeatPassword)}
                        helperText={touched.repeatPassword && errors.repeatPassword}
                    />

                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                    >
                        Cadastrar
                    </LoadingButton>
                </Stack>
            </Form>
        </FormikProvider>
    );
}