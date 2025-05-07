import FounderSlider from './FounderSlider'
import FounderInfo from './FounderInfo'

const FounderSection = () => {
  return (
    <section className="w-full">
    <div className="">
        <div className="w-full bg-gradient-to-br from-lime-50 via-white to-emerald-50 
                    rounded-2xl shadow-sm overflow-hidden">
        <div className="flex  flex-col-reverse w-full gap-5 lg:gap-0 justify-between lg:p-24 p-10 lg:flex-row md:items-center">
            <div className="w-full">
            <FounderSlider />
            </div>
            <div className="w-full flex justify-end">
            <FounderInfo />
            </div>
        </div>
        </div>
    </div>
    </section>
  );
};

export default FounderSection
