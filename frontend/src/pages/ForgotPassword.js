import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const theme = createTheme();

export default function ForgotPassword() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const response = await Axios.post('http://localhost:8000/forgot-password', values);
      console.log(response.data);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Password reset link sent to your email',
      });
    } catch (err) {
      console.error('Error sending reset password link:', err);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send reset password link. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Forgot Password
          </Typography>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Box mb={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      name="email"
                      label="Email Address"
                      type="email"
                      id="email"
                      autoComplete="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ fontSize: '0.8rem' }}
                    />
                  </Grid>
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 2 }}
                  disabled={isSubmitting}
                  startIcon={isSubmitting && <CircularProgress size={20} />}
                >
                  {isSubmitting ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    'Reset Password'
                  )}
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link component={RouterLink} to="/login" variant="body2">
                      Back to Login
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
