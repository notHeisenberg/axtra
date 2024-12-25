import { Button } from "@/components/ui/button"
import Navbar from './components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome Home</h1>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default Home; 