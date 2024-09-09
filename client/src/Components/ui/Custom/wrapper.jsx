/* eslint-disable tailwindcss/classnames-order */
function wrapper({ children }) {
  return (
    <section className="w-full bg-extend-secondaryBase">
      <div className="flex justify-center items-center h-screen">
        {children}
      </div>
    </section>
  );
}

export default wrapper;
