import Navbar from '../Components/Navbar/Navbar';
import Hedonic from '../Components/Hedonic/Hedonic';

const RateBeer = () => {

  return (
    <div>
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <Hedonic />
      </main>
    </div>
  );
};

export default RateBeer;

