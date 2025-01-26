import {Header, About, Hero, Footer} from './components';

function App() {

  return (
    <div className="w-full overflow-hidden flex flex-col">

      <div className="w-full">
            <Header />
      </div>

    <div className="lg:mx-auto w-full">
      <Hero/>
    </div>


    </div>
  )
}

export default App
