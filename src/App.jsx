import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
const App = () => {
  //StarsCanvas is removed coz its crashing the site<StarsCanvas />
  return (
   <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
      </div> 
   </BrowserRouter>
  )
}

export default App
