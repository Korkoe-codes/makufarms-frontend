
const ContactUs = () => {
  return (
    <div className="flex lg:flex-row flex-col rounded-lg w-full items-center bg-gradient-to-bl from-[#01A85A] to-[#08453b] text-white justify-center gap-10 lg:px-20 p-10" id="contact">
        <aside className="flex flex-col w-full lg:items-start justify-start lg:w-1/2 gap-4">
            <h1 className="lg:text-8xl text-xl text-[#F9A635] font-extrabold">Get in Touch</h1>
            <p className="lg:text-2xl text-xs font-normal capitalize">if you have a question about Maku Farms and what we do, we are happy to answer any questions.</p>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-yellow-400 rounded-full p-2 m-4" width="30" height="30" viewBox="0 0 24 24"><path fill="#08453b" fillRule="evenodd" d="M5.733 2.043c1.217-1.21 3.221-.995 4.24.367l1.262 1.684c.83 1.108.756 2.656-.229 3.635l-.238.238a.65.65 0 0 0-.008.306c.063.408.404 1.272 1.832 2.692s2.298 1.76 2.712 1.824a.7.7 0 0 0 .315-.009l.408-.406c.876-.87 2.22-1.033 3.304-.444l1.91 1.04c1.637.888 2.05 3.112.71 4.445l-1.421 1.412c-.448.445-1.05.816-1.784.885c-1.81.169-6.027-.047-10.46-4.454c-4.137-4.114-4.931-7.702-5.032-9.47l.749-.042l-.749.042c-.05-.894.372-1.65.91-2.184zm3.04 1.266c-.507-.677-1.451-.731-1.983-.202l-1.57 1.56c-.33.328-.488.69-.468 1.036c.08 1.405.72 4.642 4.592 8.492c4.062 4.038 7.813 4.159 9.263 4.023c.296-.027.59-.181.865-.454l1.42-1.413c.578-.574.451-1.62-.367-2.064l-1.91-1.039c-.528-.286-1.146-.192-1.53.19l-.455.453l-.53-.532c.53.532.529.533.528.533l-.001.002l-.003.003l-.007.006l-.015.014a1 1 0 0 1-.136.106c-.08.053-.186.112-.319.161c-.27.101-.628.155-1.07.087c-.867-.133-2.016-.724-3.543-2.242c-1.526-1.518-2.122-2.66-2.256-3.526c-.069-.442-.014-.8.088-1.07a1.5 1.5 0 0 1 .238-.42l.032-.035l.014-.015l.006-.006l.003-.003l.002-.002l.53.53l-.53-.531l.288-.285c.428-.427.488-1.134.085-1.673z" clipRule="evenodd"/></svg>

                <div className="flex flex-col">
                    <h4 className="lg:text-xl">Call Us on</h4>
                    <h3 className="lg:text-2xl">+233 123 4567</h3>
                </div>
                </div>
            {/* <div className="flex flex-col gap-4"> */}
                <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-yellow-400 rounded-full p-2 m-4" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#08453b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7m18 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m18 0l-7.72 6.433a2 2 0 0 1-2.56 0L3 7"/></svg>

                <div className="flex flex-col">
                    <h4 className="lg:text-xl">Mail us at</h4>
                    <h3 className="lg:text-2xl">contactus@makufarmsgh.com</h3>
                </div>
                </div>
            {/* </div> */}
            </div>
        </aside>
        <form action="" className="flex lg:w-1/2 w-full items-end flex-wrap gap-4">
            <div className="flex flex-col flex-grow w-full lg:basis-1/3 gap-2">
                <label htmlFor="name" className="font-normal">Your Name *</label>
                <input type="text" placeholder="John Doe" className="py-4 px-10 w-full rounded-lg outline-none" />
            </div>
            <div className="flex flex-col gap-2 flex-grow w-full lg:basis-1/3   ">
                <label htmlFor="phone" className="font-normal">Phone Number*</label>
                <input type="x" placeholder="+233 24 293 1234" className="py-4 px-10 rounded-lg outline-none" />
            </div>
            <div className="flex flex-col gap-2 flex-grow w-full lg:basis-1/3">
                <label htmlFor="email" className="font-normal">Email</label>
                <input type="text" placeholder="johndoe@mail.com" className="py-4 px-10 rounded-lg outline-none" />
            </div>
            <div className="flex flex-col gap-2 flex-grow w-full lg:basis-full">
                <label htmlFor="name" className="font-normal">Message</label>
                <textarea name="" placeholder="Message" className="h-20 lg:h-32 resize-none p-4 rounded-lg outline-none" id=""></textarea>
            </div>
            <label htmlFor="consent" className="flex items-center xl:text-xl lg:text-lg font-normal text-xs">

                <input type="checkbox" name="consent" id="consent" className="mr-2" />
                I agree to receive emails from MakuFarms, and also accept the Privacy / Cookie Policy
            </label>
            <div className="flex flex-col flex-grow w-full justify-center items-center">
                <button className="lg:w-1/4 w-1/2 p-2 lg:text-lg xl:text-xl xl:px-4 xl:w-1/3 rounded-xl bg-yellow-400 text-[#08453b] capitalize">submit enquiry</button>
            </div>
        </form>
      
    </div>
  )
}

export default ContactUs


// bg-gradient-to-bl from-[#01A85A] to-[#08453b]