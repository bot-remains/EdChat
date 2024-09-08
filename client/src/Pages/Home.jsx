/* eslint-disable tailwindcss/no-custom-classname */
import { Card, CardContent, CardHeader } from '@/Components/ui/card';

const Home = () => {
  return (
    <div className="bg-gray-100 text-text">
      <section
        className="flex relative justify-center items-center h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/src/assets/college2.jpg)` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 mx-auto max-w-4xl text-center text-extend-primary">
          <h1 className="text-5xl font-extrabold drop-shadow-md md:text-6xl">
            Welcome to the EduChat
          </h1>
          <p className="mt-4 text-lg font-light drop-shadow-md md:text-2xl">
            Your Gateway to Quality Education and Resources in Rajasthan
          </p>
          {/* <Button className="p-5 mt-8 text-lg font-semibold shadow-lg transition duration-300 bg-extend-grayscale-900 hover:bg-blue-700">
            Chat with Our Virtual Assistant
          </Button> */}
        </div>
      </section>

      <section className="py-16 bg-extend-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-4xl font-bold text-center">Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Interactive Chatbot',
                description:
                  'Ask our chatbot anything! From finding the best institute in your district to understanding state educational policies.',
              },
              {
                title: 'Explore Colleges',
                description:
                  'Discover the best colleges in Rajasthan, complete with details on courses, fees, and admissions.',
              },
              {
                title: 'Educational Resources',
                description:
                  'Access a wide range of support for your learning journey.',
              },
              {
                title: 'Updates & Notifications',
                description: 'Stay informed with the latest updates.',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="rounded-lg border shadow-lg transition-shadow duration-300 border-border hover:shadow-xl"
              >
                <CardHeader className="p-6 border-b border-border">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-extend-secondaryText">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-extend-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-bold text-center text-text">
            Education in Rajasthan
          </h2>
          <p className="text-lg leading-relaxed text-center text-extend-secondaryText">
            Rajasthan is known for its rich cultural heritage and is committed
            to providing quality education to its students. From primary to
            higher education, the state offers a variety of opportunities for
            learners of all ages. Our mission is to ensure that every student in
            Rajasthan has access to quality education and the tools they need to
            succeed.
          </p>
        </div>
      </section>

      <section className="py-16 bg-extend-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-4xl font-bold text-center">
            Student Testimonials
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                name: 'Aarti Sharma',
                testimonial:
                  'Thanks to the Rajasthan Education System, I was able to find the best school in my district and excel in my studies!',
              },
              {
                name: 'Rajesh Singh',
                testimonial:
                  'The resources provided by this platform have been invaluable in preparing for my exams and securing a scholarship.',
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="rounded-lg border border-gray-200 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <CardHeader className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-text">
                    {testimonial.name}
                  </h3>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-extend-secondaryText">
                    {testimonial.testimonial}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-800 text-extend-primary">
        <div className="flex justify-between items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>
            <h3 className="text-lg font-semibold">
              Rajasthan Education System
            </h3>
            <p className="text-sm">Ensuring Quality Education for All</p>
          </div>
          <div className="space-x-4">
            <a
              href="#"
              className="transition-colors duration-200 hover:text-gray-300 hover:underline"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-gray-300 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-gray-300 hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
