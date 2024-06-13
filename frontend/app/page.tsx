const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent" style={{ backgroundImage: "url('/baseback.jpg')" }}>
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to BASEpac</h1>
      <p className="text-lg text-white mb-6">Tap to earn and have fun!</p>
      <img src="/BASEpaclogo__1_-removebg-preview.png" alt="BASEpac Logo" className="w-1/2 md:w-1/3 lg:w-1/4" />
    </div>
  );
};

export default HomePage;