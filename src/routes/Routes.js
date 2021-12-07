import Home from '../pages/Home';
import AddEmployee from '../pages/AddEmployee';
import ShowInfo from '../pages/ShowInfo';

import { 
    Routes,
    Route,
  } from 'react-router-dom';



  function appRoutes(){

return(
    <Routes>
            
            <Route path="/" element={<Home/>} /> 
            <Route path="/show" element={<ShowInfo/>} />
            <Route path="/register" element={<AddEmployee/>} />
         

    </Routes>
    
    );





  }

  export default appRoutes;