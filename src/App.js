import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Gallery from './Components/Gallery';
import SubGallery from './Components/SubGallery';
import Navigation from './Components/Navigation';
import Context from "./Context";

// export const CookieContext = createContext(null);

const App = () => {
    const [images, setImages] = useState(null);
    return (
      <div className='container mb-5'> 
          <Navigation />

          {/* <CookieContext.Provider value={[cookie, setCookie]}> */}
          <Context value={[images, setImages]}>
              <Routes>
                <Route path='/' element={<Gallery />} />
                <Route path='/gallery/:id' element={<SubGallery />} />
              </Routes>
          </Context>
        
      </div>
    ); 
 };
  
   export default App;