import {Header, About, Hero, Footer, Progress, ContactUs} from './components';
function App() {

  return (
    <div className="w-full overflow-hidden flex flex-col">

      {/* <div className="w-full ">
            <Header />
      </div> */}

      <div className="h-full w-full">
  <Hero />
</div>

    <div className="lg:mx-auto lg:px-28 px-14 w-full">
      <About/>
    </div>

    

    <div className="lg:mx-auto w-full">
      <Progress/>
    </div>

    

    <div className="lg:mx-auto w-full">
      <ContactUs/>
    </div>



    <div className="lg:mx-auto w-full">
      <Footer/>
    </div>


    </div>
  )
}

export default App
