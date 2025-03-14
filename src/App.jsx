import {About, Hero, Footer, Progress, Header} from "./components";
function App(){
    return (
        <div className="space-y-10">
           {/* <Hero/> */}
          <About />
          <Progress/>
           <Footer/>
           {/* <Header/> */}
        </div>
    )
}

export default App;