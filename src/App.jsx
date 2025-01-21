import {Header, About, Hero, Footer} from './components';

function App() {

  return (
    <div className="w-full overflow-hidden flex flex-col sm:px-12 md:px-10 lg:px-6">

      <div className="xl:max-w-[1280px] w-full">
            <Header />
      </div>

    <div className="xl:max-w-[1280px] w-full">
      <Hero/>
    </div>


    </div>
  )
}

export default App
