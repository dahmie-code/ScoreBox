import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';


function App() {


  return (
    <Router>

      <Sidebar className="w-full" />
 
    </Router>
  )
}

export default App;
