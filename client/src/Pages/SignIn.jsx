import { TypographyH1 } from '@/Components/typography/H1';
import { TypographyMuted } from '@/Components/typography/muted';
import { Button } from '@/Components/ui/button';
import CustomCard from '@/Components/ui/Custom/CustomCard';
import CustomFormField from '@/Components/ui/Custom/CustomFormField';
import CustomFormWrapper from '@/Components/ui/Custom/CustomFormWrapper';
import Wrapper from '@/Components/ui/Custom/wrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: "That's not an email" }),
  password: z.string().min(8, { message: 'Too short' }),
});

function SignIn() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  }

  return (
    <Wrapper>
      <CustomCard
        title={<TypographyH1 text="Sign In" />}
        description="Login to your account"
        body={
          <CustomFormWrapper
            form={form}
            onSubmit={onSubmit}
            fields={
              <>
                <CustomFormField
                  control={form.control}
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Email address"
                />
                <CustomFormField
                  control={form.control}
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="********"
                  password
                />
              </>
            }
            button={
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Loading...' : 'Sign In'}
              </Button>
            }
          />
        }
        footer={
          <div className="flex justify-center">
            <TypographyMuted text="Don't have an account, yet?" />
            &nbsp;
            <Link
              to="/sign-up"
              className="underline"
            >
              <TypographyMuted text="Sign Up" />
            </Link>
          </div>
        }
      />
    </Wrapper>
  );
}

export default SignIn;
