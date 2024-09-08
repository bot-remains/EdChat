/* eslint-disable tailwindcss/classnames-order */
import { Button } from '@/Components/ui/button';
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
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Submit function for the form
  const onSubmit = (data) => {
    console.log('Profile Data:', data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex p-8 space-x-8 w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Left Side: Profile Image */}
        <div className="flex justify-center items-center w-1/3">
          <div className="relative">
            <img
              className="object-cover w-40 h-40 rounded-full"
              src="https://via.placeholder.com/150"
              alt="User Profile"
            />
            <Button
              variant="ghost"
              className="absolute right-0 bottom-0 p-1 text-white bg-blue-500 rounded-full"
            >
              <i className="fa-solid fa-camera"></i>
            </Button>
          </div>
        </div>

        {/* Right Side: Profile Form */}
        <div className="w-2/3">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Edit Profile
          </h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              <FormItem className="w-1/2">
                <Label>First Name</Label>
                <Input
                  {...register('firstName')}
                  className="p-3 w-full"
                  error={errors.firstName}
                />
                {errors.firstName && (
                  <FormMessage>{errors.firstName.message}</FormMessage>
                )}
              </FormItem>

              <FormItem className="w-1/2">
                <Label>Last Name</Label>
                <Input
                  {...register('lastName')}
                  className="p-3 w-full"
                  error={errors.lastName}
                />
                {errors.lastName && (
                  <FormMessage>{errors.lastName.message}</FormMessage>
                )}
              </FormItem>
            </div>

            {/* Date of Birth */}
            <FormItem>
              <Label>Date of Birth</Label>
              <Input
                type="date"
                {...register('dateOfBirth')}
                className="items-center p-3 w-full"
                error={errors.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <FormMessage>{errors.dateOfBirth.message}</FormMessage>
              )}
            </FormItem>

            {/* Gender */}
            {/* <FormItem>
              <Label>Gender</Label>
              <Select
                {...register('gender')}
                className="p-3 w-full"
                error={errors.gender}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
              {errors.gender && (
                <FormMessage>{errors.gender.message}</FormMessage>
              )}
            </FormItem> */}

            {/* Email */}
            <FormItem>
              <Label>Email</Label>
              <Input
                type="email"
                {...register('email')}
                className="p-3 w-full"
                error={errors.email}
              />
              {errors.email && (
                <FormMessage>{errors.email.message}</FormMessage>
              )}
            </FormItem>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="py-3 w-full text-white bg-blue-500 rounded-md transition-colors duration-300 hover:bg-blue-600"
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
