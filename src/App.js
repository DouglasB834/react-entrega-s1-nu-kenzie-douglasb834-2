
import { useState } from 'react';
import HomePage from "./components/HomePage"
import './App.css';
import { DashBoard } from './components/Dashboard';


function App() {

  const [page, setPage] = useState(false)


  return (
    <div className="App">
      {
        page? (
          <DashBoard setPage={setPage}>

          </DashBoard>

        )
        :   
          (
            <HomePage setPage={setPage}/> 
          )

      }

    </div>
  );
}

export default App;
