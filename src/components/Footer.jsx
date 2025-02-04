import Logo from '../assets/logo.png';
const Footer = () => {
  return (
    <div className="w-full mb-0 p-10 flex justify-around items-center">
      <div className="w-1/3">
        <img src={Logo} className="w-full lg:w-1/4" />
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-green-800 text-lg font-bold">Quick Links</h1>
          <a href="#" className="font-normal text-slate-700 hover:text-yellow-500">Home</a>
          <a href="#about" className="font-normal text-slate-700 hover:text-yellow-500">About</a>
          <a href="#progress" className="font-normal text-slate-700 hover:text-yellow-500">Progress</a>
          <a href="#contact" className="font-normal text-slate-700 hover:text-yellow-500">Contact</a>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-green-800 text-lg font-bold">Contact</h1>
          <span className="lg:font-normal text-sm text-slate-700 hover:text-yellow-500">+233 123 456 789</span>
            </div>
      </div>
    </div>
  )
}

export default Footer
