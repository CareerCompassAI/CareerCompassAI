function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen text-white p-10">
        {/* Start of your actual website layout */}
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4">Explore my work and projects below!</p>

        {/* Example: Add real components here */}
        {/* <Navbar /> */}
        {/* <Hero /> */}
        {/* <Projects /> */}
        {/* <Footer /> */}
        {/* End of your website layout */}
      </div>
    </div>
  );
}

export default App;
