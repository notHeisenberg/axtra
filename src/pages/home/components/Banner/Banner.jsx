import BannerImage from '@/assets/banner.webp';
import star from '@/assets/shape/6.png';
import eclipse from '@/assets/shape/5.png';
import { ArrowDown } from 'lucide-react';

const Banner = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('brands');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full mt-10">
      <img src={eclipse} alt="eclipse" className="absolute top-1/4 left-0 h-80 -z-1" />
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 relative">
          <div className="flex flex-col uppercase">
            <div className="flex items-center gap-6">
              <span className="text-xl font-bold">Digital</span>
              <span className="border-b border-black w-24"></span>
            </div>
            <div className="flex flex-col max-w-4xl font-extrabold">
              <h2 className="text-7xl md:text-[200px] px-2">Mark</h2>
              <h2 className="text-7xl md:text-[200px] font-bold bottom-0 left-0 z-20 text-right">eting</h2>
            </div>
            <div 
              onClick={scrollToNextSection}
              className="absolute bottom-[-100px] left-0 border border-black/25 rounded-3xl p-3 h-20 w-10 flex items-end justify-end animate-bounce-slow cursor-pointer"
            >
              <ArrowDown className="w-full h-auto" />
            </div>
          </div>


          <p className="max-w-xs text-xs text-gray-500 dark:text-gray-300 md:absolute lg:bottom-12 md:bottom-20 left-0 font-medium">
            Static and dynamic secure code review can prevent a day before your product is even released.
            We can integrate with your dev environment to provide a seamless experience.
          </p>
        </div>

        <div className=" z-10 md:absolute bottom-[-100px] right-0 max-h-[200px] max-w-[900px] p-8 lg:p-0">
          <img
            src={BannerImage}
            alt="Banner"
            className="w-full h-auto"
          />
        </div>
      </div>

      <img src={star} alt="star" className="absolute top-0 right-6 w-10 h-10" />
    </div>
  );
};

export default Banner; 