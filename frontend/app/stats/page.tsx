import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const StatsPage = () => {
  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: "url('/baseback.jpg')" }}></div>
      <div className="flex flex-col items-center justify-center flex-1 z-10 ml-16 md:ml-20 lg:ml-24 p-4">
        <h1 className="text-4xl font-bold text-white mb-4">Stats</h1>
        <div className="w-full max-w-5xl px-4 md:px-8 lg:px-16">
          <div className="overflow-x-auto">
            <table className="w-full rounded-lg ">
              <tbody className="bg-gradient-to-r from-sky-700 to-blue-950">
                <tr className="rounded-t-lg">
                  <td className="py-2 px-4 ">Number of taps so far</td>
                  <td className="py-2 px-4 ">123</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Worldwide Ranking</td>
                  <td className="py-2 px-4">456</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">League</td>
                  <td className="py-2 px-4">789</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;