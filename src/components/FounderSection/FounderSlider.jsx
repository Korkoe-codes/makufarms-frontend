
const FounderSlider = () => {
  return (
    <div className="flex flex-col w-full gap-3 lg:gap-6">
    <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-900">
      Meet Our Founder
    </h2>
    
    <div className="space-y-2 text-gray-700">
      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
      Driven by a passion for sustainable agriculture and community empowerment, Jane Doe founded MakuFarms to revolutionize farming practices. With a focus on implementing innovative technologies, providing hands-on training, and maintaining high standards of produce quality, she leads a team committed to environmental stewardship, research, and local collaboration. Under her leadership, MakuFarms continues to grow as a model for modern, sustainable farming.
      </p>
      
      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
        Starting from humble beginnings, they built this company on the principles of sustainable practices, customer-focused solutions, and forward-thinking strategies that have consistently kept us ahead of the curve.
      </p>
      
      <div className="pt-2">
        <p className="text-sm md:text-base font-medium text-emerald-700">
          Our mission is to create products that not only solve problems but inspire new possibilities.
        </p>
      </div>
    </div>
    
    <div className="pt-4">
      <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-sm md:text-base font-medium">
        Read Full Biography
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
  )
}

export default FounderSlider
