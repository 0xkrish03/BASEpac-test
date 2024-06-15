const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-transparent border-spacing-0 ">
      <div className="absolute inset-0 bg-cover bg-center opacity-60  " style={{ backgroundImage: "url('/basepacc.jpg')" }}></div>
      <h1 className="text-4xl font-bold text-white mb-4 z-10">Welcome to BASEpac</h1>
      <p className="text-lg text-white mb-6 z-10">Tap to earn and have fun!</p>
      <img src="/BASEpaclogo__1_-removebg-preview.png" alt="BASEpac Logo" className="w-1/4 md:w-1/5 lg:w-1/6 z-10" />
    </div>
  );
};

export default HomePage;