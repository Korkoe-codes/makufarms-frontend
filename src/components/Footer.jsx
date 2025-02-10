import logos from '../assets/logos/index';
const Footer = () => {
  return (
    <section className="w-full bg-[#0b132b]">
        <footer className="container mb-0 p-10 flex mx-auto items-center w-full justify-between">
          
      <div className="w-1/3">
        <img src={logos[2]} className="w-1/2  lg:w-1/6" />
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#797D8A] text-lg font-bold">Quick Links</h1>
          <a href="#" className="font-normal text-[#e6e6e9] hover:text-[#F9A635]">Home</a>
          <a href="#about" className="font-normal text-[#e6e6e9] hover:text-[#F9A635]">About</a>
          <a href="#progress" className="font-normal text-[#e6e6e9] hover:text-[#F9A635]">Progress</a>
          <a href="#contact" className="font-normal text-[#e6e6e9] hover:text-[#F9A635]">Contact</a>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#797D8A] text-lg font-bold">Contact</h1>
          <span className="lg:font-normal text-sm text-[#e6e6e9] hover:text-[#F9A635]">+233 123 456 789</span>
            </div>
      </div>
        </footer>
    </section>
  )
}

export default Footer
