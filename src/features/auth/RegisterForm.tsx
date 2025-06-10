import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Box,
  Alert,
  Link,
  InputAdornment,
  IconButton,
  MenuItem,
  Grid,
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock, Person } from '@mui/icons-material';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { RegisterRequest } from '../../types';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const registerSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  first_name: Yup.string()
    .required('First name is required'),
  last_name: Yup.string()
    .required('Last name is required'),
  gender: Yup.string()
    .oneOf(['M', 'F'], 'Select Male or Female')
    .required('Gender is required'),
  next_of_kin: Yup.string()
    .required('Next of kin is required'),
  matric_no: Yup.string()
    .required('Matriculation number is required'),
  phone_no: Yup.string(),
  country: Yup.string().default('Nigeria'),
});

interface RegisterFormProps {
  onSwitchToLogin?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, isLoading, error } = useAuth();

  const handleSubmit = (values: any) => {
    const { confirmPassword, ...registerData } = values;
    register({ ...registerData, role: 'patient' } as RegisterRequest);
  };

  if (isLoading) {
    return <LoadingSpinner message="Creating your account..." />;
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        first_name: '',
        last_name: '',
        gender: '',
        next_of_kin: '',
        matric_no: '',
        phone_no: '',
        country: 'Nigeria',
      }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="first_name"
                  label="First Name"
                  fullWidth
                  variant="outlined"
                  error={touched.first_name && !!errors.first_name}
                  helperText={touched.first_name && errors.first_name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="last_name"
                  label="Last Name"
                  fullWidth
                  variant="outlined"
                  error={touched.last_name && !!errors.last_name}
                  helperText={touched.last_name && errors.last_name}
                />
              </Grid>
            </Grid>

            <Field
              as={TextField}
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  variant="outlined"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  fullWidth
                  variant="outlined"
                  error={touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="gender"
                  label="Gender"
                  select
                  fullWidth
                  variant="outlined"
                  error={touched.gender && !!errors.gender}
                  helperText={touched.gender && errors.gender}
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="matric_no"
                  label="Matriculation Number"
                  fullWidth
                  variant="outlined"
                  error={touched.matric_no && !!errors.matric_no}
                  helperText={touched.matric_no && errors.matric_no}
                />
              </Grid>
            </Grid>

            <Field
              as={TextField}
              name="next_of_kin"
              label="Next of Kin"
              fullWidth
              variant="outlined"
              error={touched.next_of_kin && !!errors.next_of_kin}
              helperText={touched.next_of_kin && errors.next_of_kin}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="phone_no"
                  label="Phone Number (Optional)"
                  fullWidth
                  variant="outlined"
                  error={touched.phone_no && !!errors.phone_no}
                  helperText={touched.phone_no && errors.phone_no}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="country"
                  label="Country"
                  fullWidth
                  variant="outlined"
                  error={touched.country && !!errors.country}
                  helperText={touched.country && errors.country}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isSubmitting}
              sx={{ mt: 2, py: 1.5 }}
            >
              Create Account
            </Button>

            {onSwitchToLogin && (
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Link
                  component="button"
                  type="button"
                  variant="body2"
                  onClick={onSwitchToLogin}
                  sx={{ textDecoration: 'none' }}
                >
                  Already have an account? Sign in
                </Link>
              </Box>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;