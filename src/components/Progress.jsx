import { progressImgs } from "../assets/index";
import ProgressCard from "./ProgressCard"; // Adjust the import path as needed

const Progress = () => {
  // Example data with different descriptions for each image
  const progressData = [
    {
      image: progressImgs[0],
      altText: "Sustainable farming methods",
      description: "Our team implementing sustainable farming techniques that help reduce environmental impact while increasing crop yields."
    },
    {
      image: progressImgs[1],
      altText: "Community engagement",
      description: "Working closely with local communities to share knowledge and create opportunities for collaboration and growth."
    },
    {
      image: progressImgs[2],
      altText: "Training programs",
      description: "Providing comprehensive training programs to equip farmers with the skills needed for modern agricultural practices."
    },
    {
      image: progressImgs[3],
      altText: "Innovative technology",
      description: "Implementing innovative technology solutions to improve efficiency and sustainability in our farming operations."
    },
    {
      image: progressImgs[4],
      altText: "Quality produce",
      description: "Maintaining high standards for all our agricultural products to ensure quality and consistency for our customers."
    },
    {
      image: progressImgs[5],
      altText: "Research and development",
      description: "Continuous research and development to discover new methods and adapt to changing environmental conditions."
    }
  ];

  return (
    <div className="w-full md:gap-10 lg:gap-14 flex h-fit flex-col mx-auto container gap-10" id="progress">
      <h1 className="text-xl lg:text-3xl xl:text-5xl font-medium text-left lg:text-left">Where we are now.</h1>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:grid-row-3 lg:grid-rows-2 gap-10">
        {progressData.map((item, index) => (
          <ProgressCard
            key={index}
            image={item.image}
            altText={item.altText}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Progress;