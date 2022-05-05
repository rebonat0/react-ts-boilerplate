import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

interface Props {
    onFinish(emailSent: string): void;
}

const ForgotPasswordForm: React.FC<Props> = ({ onFinish }) => {

    const RESET_PASSWORD_FORM = Yup.object().shape({
        email: Yup
            .string()
            .email('E-mail incorreto')
            .required('Informe o seu e-mail'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: RESET_PASSWORD_FORM,
        onSubmit: ({ email }) => {
            setSubmitting(false);
            onFinish(email);
        }
    });

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps, setSubmitting } = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Seu email"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />
                    <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                        Resetar senha
                    </LoadingButton>
                </Stack>
            </Form>
        </FormikProvider>
    )
}

export default ForgotPasswordForm;