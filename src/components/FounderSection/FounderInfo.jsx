import {useState, useEffect, useCallback} from 'react'
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion"
import { founderImgs } from '../../assets';

const FounderInfo = () => {

    const [currentImg, setCurrentImg] = useState(0);
    const [direction, setDirection] = useState(0);

    const goToNext = useCallback(()=>{
        setDirection(1);
        setCurrentImg((prev)=>(prev + 1) % founderImgs.length);
    },[]);

    const goToPrev = useCallback(()=> {
        setDirection(-1);
        setCurrentImg((prev)=>(prev -1 + founderImgs.length)%founderImgs.length);
    },[]);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            goToNext();
        }, 5000);

        return () => clearInterval(timer);
    },[goToNext]);
  return (
    <div className='relative w-full lg:w-3/4 rounded-tl-2xl rounded-br-2xl overflow-hidden mx-auto lg:mx-0 lg:aspect-[3/4]'>
    <AnimatePresence mode='wait' initial={false}>
        <motion.img
        key={currentImg}
        src={founderImgs[currentImg]}
        alt='Founder Images'
        initial={{ opacity:0, x: direction * 70 }}
        className="w-full h-full object-cover"
        animate={{ opacity:1, x:0 }}
        exit={{ opacity: 0, x: -direction * 70 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        />
    </AnimatePresence>

    <div className="absolute inset-0 flex items-center justify-between z-10">
        <button 
        className="bg-white/30 backdrop-blur-md hover:bg-white/50 transition-colors rounded-full p-2 text-black"
        onClick={goToPrev}
        aria-label='Previous Image'
        >
            <FaChevronLeft size={20}/>
        </button>
        <button 
        className="bg-white/30 backdrop-blur-md hover:bg-white/50 transition-colors rounded-full p-2 text-black"
        onClick={goToNext}
        aria-label='Next Image'
        >
            <FaChevronRight size={20}/>
        </button>
    </div>
    <div 
    className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
    >
        {founderImgs.map((_, index)=>(
            <button
            key={index}
            onClick={()=>{
                setDirection(index > currentImg ? 1 : -1);
                setCurrentImg(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === currentImg
                ? 'bg-white w-6'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
            />
        ))}
    </div>



    </div>
  )
}

export default FounderInfo;
