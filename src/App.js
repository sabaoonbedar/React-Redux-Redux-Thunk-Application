import logo from './logo.svg';
import Routes from './routes/Routes.js';
import './App.css';
import { 
  BrowserRouter,
  Link
} from 'react-router-dom';

function App() {
  return (

<>
 
    <BrowserRouter>
   
<Routes/>

    </BrowserRouter>

</>


  );
  
}

export default App;
