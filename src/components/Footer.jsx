import logos from '../assets/logos/index';
const Footer = () => {
  return (
    <section className="w-full py-20 px-10 lg:py-48 md:py-32 md:px-16 lg:px-36 bg-[#0b132b]">
        <footer className="flex gap-5   w-full md:flex-row flex-col">

          <aside className="flex w-1/4 gap-5 justify-start items-start  xl:gap-10 flex-col">          
      <div className="w-full items-center  gap-4 flex">
        <img src={logos[2]} className="lg:w-16 xl:w-24 md:w-14 w-12" />
        <span className="text-white text-xl xl:text-2xl">MakuFarms Ghana</span>
      </div>
    
      <span className="md:flex gap-8 md:gap-5 items-center hidden  flex-row justify-center md:justify-start">
            <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  className='w-5 lg:w-fit' viewBox="0 0 24 24"><path fill="#F9A635" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
            </a>
            <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24"  className='w-5 lg:w-fit' height="20" viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#primeTwitter0)"><path fill="#F9A635" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
            </a>

            <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  className='w-5 lg:w-fit' viewBox="0 0 24 24"><path fill="#F9A635" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
            </a>

            <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 lg:w-fit' width="24" height="24" viewBox="0 0 24 24"><path fill="#F9A635" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
            </a>
          </span>
          </aside>

      <div className="flex gap-5 md:justify-evenly flex-col md:flex-row w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#797D8A] lg:text-lg text-base xl:text-2xl font-bold">Quick Links</h1>
          <a href="#" className="font-normal text-sm lg:text-base xl:text-2xl text-[#e6e6e9] hover:text-[#F9A635]">Home</a>
          <a href="#about" className="font-normal text-sm lg:text-base xl:text-2xl text-[#e6e6e9] hover:text-[#F9A635]">About</a>
          <a href="#progress" className="font-normal text-sm lg:text-base xl:text-2xl text-[#e6e6e9] hover:text-[#F9A635]">Progress</a>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#797D8A] text-sm lg:text-lg xl:text-2xl font-bold">Have a Question?</h1>
          <span className="lg:font-normal text-xs text-[#e6e6e9] gap-2 flex items-center lg:text-lg hover:text-[#F9A635]">
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-[#F9A635] rounded-full p-2" width="30" height="30" viewBox="0 0 24 24"><path fill="#08453b" fillRule="evenodd" d="M5.733 2.043c1.217-1.21 3.221-.995 4.24.367l1.262 1.684c.83 1.108.756 2.656-.229 3.635l-.238.238a.65.65 0 0 0-.008.306c.063.408.404 1.272 1.832 2.692s2.298 1.76 2.712 1.824a.7.7 0 0 0 .315-.009l.408-.406c.876-.87 2.22-1.033 3.304-.444l1.91 1.04c1.637.888 2.05 3.112.71 4.445l-1.421 1.412c-.448.445-1.05.816-1.784.885c-1.81.169-6.027-.047-10.46-4.454c-4.137-4.114-4.931-7.702-5.032-9.47l.749-.042l-.749.042c-.05-.894.372-1.65.91-2.184zm3.04 1.266c-.507-.677-1.451-.731-1.983-.202l-1.57 1.56c-.33.328-.488.69-.468 1.036c.08 1.405.72 4.642 4.592 8.492c4.062 4.038 7.813 4.159 9.263 4.023c.296-.027.59-.181.865-.454l1.42-1.413c.578-.574.451-1.62-.367-2.064l-1.91-1.039c-.528-.286-1.146-.192-1.53.19l-.455.453l-.53-.532c.53.532.529.533.528.533l-.001.002l-.003.003l-.007.006l-.015.014a1 1 0 0 1-.136.106c-.08.053-.186.112-.319.161c-.27.101-.628.155-1.07.087c-.867-.133-2.016-.724-3.543-2.242c-1.526-1.518-2.122-2.66-2.256-3.526c-.069-.442-.014-.8.088-1.07a1.5 1.5 0 0 1 .238-.42l.032-.035l.014-.015l.006-.006l.003-.003l.002-.002l.53.53l-.53-.531l.288-.285c.428-.427.488-1.134.085-1.673z" clipRule="evenodd"/></svg>
            +233 123 456 789</span>

          <span className="flex gap-2 text-white text-xs lg:text-xl items-center">
            
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-[#F9A635] rounded-full p-2" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#08453b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7m18 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m18 0l-7.72 6.433a2 2 0 0 1-2.56 0L3 7"/></svg>
          contactus@makufarmsgh.com
          </span>


          <span className="flex gap-2 text-white text-xs lg:text-xl items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-[#F9A635] rounded-full p-2" width="30" height="30" viewBox="0 0 24 24"><path fill="#08453b"  stroke="#08453b" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"/></svg>

          Maku Farms Ghana, Accra
          </span>

          <span className="flex gap-8 md:gap-5 items-center md:hidden  flex-row justify-start">
            <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  className='w-5 lg:w-fit' viewBox="0 0 24 24"><path fill="#F9A635" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
            </a>
            <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24"  className='w-5 lg:w-fit' height="20" viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#primeTwitter0)"><path fill="#F9A635" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
            </a>

            <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  className='w-5 lg:w-fit' viewBox="0 0 24 24"><path fill="#F9A635" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
            </a>

            <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 lg:w-fit' width="24" height="24" viewBox="0 0 24 24"><path fill="#F9A635" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
            </a>
          </span>

            </div>
          

      </div>
        </footer>
    </section>
  )
}

export default Footer
