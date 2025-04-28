import FounderSlider from './FounderSlider'
import FounderInfo from './FounderInfo'

const FounderSection = () => {
  return (
    <section className="w-full container py-16">
    <div className="">
        <div className="w-full bg-gradient-to-br from-lime-50 via-white to-emerald-50 
                    rounded-2xl shadow-sm overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row md:items-center">
            <div className="w-full md:w-1/2 lg:w-5/12">
            <FounderSlider />
            </div>
            <div className="w-full md:w-1/2 lg:w-7/12 p-6 md:p-10">
            <FounderInfo />
            </div>
        </div>
        </div>
    </div>
    </section>
  );
};

export default FounderSection
