import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Particles from 'react-particles-js';

import Navbar from "./components/navbar.component";
import FileList from "./components/filelist.component";
import Addfile from "./components/addfile.component";
import CreateCourse from "./components/create-course.component";
import LeaderBoard from "./components/leaderboard.component";


const particleOpt = {
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 800
              }
            }
          }
}




function App() {
  return (
    <div>
      
        <h4 className="display-4 text-center mb4">
          <i className='fas fa-book' />EndGem
        </h4>
      <Router>
        <Navbar />
        <br/>
        <Route path='/' exact component={FileList} />
        <Route path='/add' component={Addfile} />
        <Route path='/course' component={CreateCourse} />
        <Route path='/leaderboard' component={LeaderBoard} />
      
      </Router>
      

      <Particles 
        params={particleOpt}>
      </Particles>
    </div>
  );
}

export default App;
