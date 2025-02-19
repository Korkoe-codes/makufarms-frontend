
const ContactUs = () => {
  return (
    <div className="flex lg:flex-row flex-col bg-gradient-to-bl from-[#01A85A] to-[#08453b] w-full items-center justify-center gap-10 p-10" id="contact">
        <aside className="flex flex-col w-full lg:items-start justify-start lg:w-1/2 gap-4">
            <h1 className="lg:text-4xl text-lg  font-extrabold">Get in Touch</h1>
            <p className="lg:text-lg text-xs font-normal capitalize">if you have a question about who we are and what we do, we are happy to answer any questions.</p>
            <div className="flex gap-4">
    
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
                <textarea name="" placeholder="Message" className="h-20 resize-none p-4 rounded-lg outline-none" id=""></textarea>
            </div>
            <label htmlFor="consent" className="flex items-center lg:text-base font-normal text-xs">

                <input type="checkbox" name="consent" id="consent" className="mr-2" />
                I agree to receive emails from MakuFarms, and also accept the Privacy / Cookie Policy
            </label>
            <div className="flex flex-col flex-grow w-full justify-center items-center">
                <button className="lg:w-1/4 w-1/2 p-2 rounded-xl bg-yellow-400 capitalize">submit enquiry</button>
            </div>
        </form>
      
    </div>
  )
}

export default ContactUs
