import {About, Hero, Footer, Progress, Home} from "./components";
function App(){
    return (
        <div className="flex-col flex gap-10">
            <div className="hidden">
           <Hero/>
            </div>
            <div className="">
                <Home />
            </div>
          <About />
          <Progress/>
           <Footer/>
           {/* <Header/> */}
        </div>
    )
}

export default App;