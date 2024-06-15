import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const StatsPage = () => {
  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: "url('/baseback.jpg')" }}></div>
      <div className="flex flex-col items-center justify-center flex-1 z-10 ml-16 md:ml-20 lg:ml-24 p-4">
        <h1 className="text-4xl font-bold text-white mb-4">Leaderboard</h1>
        <div className="w-full max-w-5xl px-4 md:px-8 lg:px-16">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-800 text-white bg-gradient-to-r from-sky-500 to-blue-950">
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Value</th>
                  <th className="py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-500">
                  <td className="py-2 px-4 text-black">Category 1</td>
                  <td className="py-2 px-4 text-black">123</td>
                  <td className="py-2 px-4 text-black">Description for category 1</td>
                </tr>
                <tr className="bg-gray-500">
                  <td className="py-2 px-4 text-black">Category 2</td>
                  <td className="py-2 px-4 text-black">456</td>
                  <td className="py-2 px-4 text-black">Description for category 2</td>
                </tr>
                <tr className="bg-gray-500">
                  <td className="py-2 px-4 text-black">Category 3</td>
                  <td className="py-2 px-4 text-black">789</td>
                  <td className="py-2 px-4 text-black">Description for category 3</td>
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