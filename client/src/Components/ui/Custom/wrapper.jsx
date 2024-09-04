function wrapper({ children }) {
  return (
    <section className="w-full">
      <div className="flex h-screen items-center justify-center">
        {children}
      </div>
    </section>
  );
}

export default wrapper;
