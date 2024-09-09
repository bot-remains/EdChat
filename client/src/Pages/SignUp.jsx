import { TypographyH1 } from '@/Components/typography/H1';
import { TypographyMuted } from '@/Components/typography/muted';
import { Button } from '@/Components/ui/button';
import CustomCard from '@/Components/ui/Custom/CustomCard';
import CustomFormField from '@/Components/ui/Custom/CustomFormField';
import CustomFormWrapper from '@/Components/ui/Custom/CustomFormWrapper';
import Wrapper from '@/Components/ui/Custom/wrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: "That's not an email" }),
  password: z.string().min(8, { message: 'Password too short' }),
  confirmPassword: z.string().min(8, { message: 'Password too short' }),
});

function SignUp() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const { isSubmitting, errors } = form.formState;

  const mutation = useMutation(
    (data) => axios.post('/api/v1/auth/sign-up', data),
    {
      onSuccess: (data) => {
        console.log('Sign up successful:', data);
        navigate('/sign-in');
      },
      onError: (error) => {
        console.error('Sign up error:', error.response?.data || error.message);
        if (error.response?.data?.errors) {
          error.response.data.errors.forEach((err) => {
            form.setError(err.field, { message: err.message });
          });
        }
      },
    },
  );

  async function onSubmit(data) {
    if (data.password !== data.confirmPassword) {
      form.setError('confirmPassword', { message: 'Passwords do not match' });
      return;
    }
    mutation.mutate(data);
  }

  return (
    <Wrapper>
      <CustomCard
        title={<TypographyH1 text="Sign Up" />}
        description="Create your account"
        body={
          <CustomFormWrapper
            form={form}
            onSubmit={form.handleSubmit(onSubmit)}
            fields={
              <>
                <CustomFormField
                  control={form.control}
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Email address"
                  error={errors.email?.message}
                />
                <CustomFormField
                  control={form.control}
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="********"
                  error={errors.password?.message}
                />
                <CustomFormField
                  control={form.control}
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="********"
                  error={errors.confirmPassword?.message}
                />
              </>
            }
            button={
              <Button
                type="submit"
                className="w-full bg-extend-secondary hover:bg-extend-hoverSecondary"
                size="lg"
                disabled={isSubmitting || mutation.isLoading}
              >
                {isSubmitting || mutation.isLoading ?
                  'Creating account...'
                : 'Sign Up'}
              </Button>
            }
          />
        }
        footer={
          <div className="flex justify-center">
            <TypographyMuted text="Already have an account?" />
            &nbsp;
            <Link
              to="/sign-in"
              className="underline"
            >
              <TypographyMuted text="Sign In" />
            </Link>
          </div>
        }
      />
    </Wrapper>
  );
}

export default SignUp;
