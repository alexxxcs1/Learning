import React, { Component } from 'react';
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom';

import Home from 'routes/Home'
import CanvasBox from 'routes/CanvasBox'

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <HashRouter >
          <div style={{height: '100%'}}>
              <Switch>
                  
                  <Route path='/canvas' component={CanvasBox} />
                  {/* 首页 */}
                  <Redirect from='/' to='/canvas' />
                  <Route path='/' component={Home} />
                  
                    
              </Switch>
          </div>
        </HashRouter>
        {/* <AnimateBackground /> */}
      </div>
    );
  }
}

export default App;
