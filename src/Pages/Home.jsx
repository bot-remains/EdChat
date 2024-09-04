/* eslint-disable tailwindcss/no-custom-classname */
function Home() {
  return (
    <div className="bg-grayscale-800 flex h-screen w-screen items-center justify-evenly p-4">
      <div className="text-grayscale-50 max-w-lg">
        <div>
          <h1 className="mb-4 text-5xl font-bold">Welcome to EduChat</h1>
          <p className="mb-6 text-lg">
            Your trusted partner in educational counseling. Get expert advice
            and personalized plans for your educational journey.
          </p>
          <button className="hover:bg-grayscale-100 rounded-lg bg-extend-grayscale-800 px-6 py-3 font-semibold text-extend-grayscale-50 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-grayscale-700 flex size-1/2 items-center justify-center">
        <img
          src="/src/assets/ChatBot.png"
          alt="Home Page Image"
          className="w-3/4"
        />
      </div>
    </div>
  );
}

export default Home;
