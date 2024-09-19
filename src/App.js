import React from 'react';
import './App.css';//main.css file which contains all the global css styles
import LeftFixedBar from './components/LeftFixedBar/LeftFixedBar';
import RightSectionsBar from './components/RightSectionsBar/RightSectionsBar';

function App(){
  return (
    <div className="container-fluid">
      <div>
          <LeftFixedBar></LeftFixedBar>
          <RightSectionsBar></RightSectionsBar>
      </div>
    </div>
  )
}

export default App;