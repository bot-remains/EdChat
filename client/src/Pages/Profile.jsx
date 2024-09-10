/* eslint-disable tailwindcss/classnames-order */
import { Button } from '@/Components/ui/button';
import { DatePicker } from '@/Components/ui/datepicker'; // Assuming you have a DatePicker component
import { Form, FormItem, FormMessage } from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Zod validation schema
const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  email: z.string().email('Invalid email'),
});

function Profile() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Submit function for the form
  const onSubmit = (data) => {
    console.log('Profile Data:', data);
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-blue-100 via-gray-100 to-gray-200">
      <div className="flex overflow-hidden flex-col items-start w-full max-w-4xl bg-white rounded-xl shadow-lg md:flex-row md:items-center">
        {/* Profile Picture */}
        <div className="flex relative justify-center items-center p-6 w-full md:w-1/3">
          <img
            className="object-cover w-32 h-32 rounded-full shadow-lg md:w-40 md:h-40"
            src="https://via.placeholder.com/150"
            alt="User Profile"
          />
          {/* <Button
            variant="ghost"
            className="absolute right-0 bottom-0 p-2 text-white bg-blue-600 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700"
          >
            <i className="fa-solid fa-camera"></i>
          </Button> */}
        </div>

        {/* Form */}
        <div className="p-6 space-y-6 w-full md:w-2/3">
          <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">
            Edit Profile
          </h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormItem>
                <Label className="font-medium text-gray-700">First Name</Label>
                <Input
                  {...register('firstName')}
                  className={`p-3 w-full rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                  error={errors.firstName}
                />
                {errors.firstName && (
                  <FormMessage className="mt-1 text-sm text-red-500">
                    {errors.firstName.message}
                  </FormMessage>
                )}
              </FormItem>

              <FormItem>
                <Label className="font-medium text-gray-700">Last Name</Label>
                <Input
                  {...register('lastName')}
                  className={`p-3 w-full rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                  error={errors.lastName}
                />
                {errors.lastName && (
                  <FormMessage className="mt-1 text-sm text-red-500">
                    {errors.lastName.message}
                  </FormMessage>
                )}
              </FormItem>
            </div>

            <FormItem>
              <Label className="font-medium text-gray-700">Date of Birth</Label>
              <DatePicker
                {...register('dateOfBirth')}
                control={control}
                className={`p-3 w-full rounded-lg border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                error={errors.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <FormMessage className="mt-1 text-sm text-red-500">
                  {errors.dateOfBirth.message}
                </FormMessage>
              )}
            </FormItem>

            <FormItem>
              <Label className="font-medium text-gray-700">Email</Label>
              <Input
                type="email"
                {...register('email')}
                className={`p-3 w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                error={errors.email}
              />
              {errors.email && (
                <FormMessage className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </FormMessage>
              )}
            </FormItem>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="py-3 w-full text-white bg-blue-600 rounded-lg shadow-md transition-colors duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isSubmitting ? 'Submitting...' : 'Save Changes'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
