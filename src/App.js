import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import './App.css';

class App extends Component {
  state = {
    isSideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        isSideDrawerOpen: !prevState.isSideDrawerOpen,
      }
    } );
  }

  backdropClickHandler = () => {
    this.setState((prevState) => {
      return {
        isSideDrawerOpen: false,
      }
    } );
  }

  render() {
    let sideDrawer;
    let backdrop
  
    if(this.state.isSideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
      sideDrawer = <SideDrawer/>
    }

    return (
      <div className="App" style={{ height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {backdrop}
        {sideDrawer}
        <main style={{marginTop: '64px'}}>
          <p>
            this is the page content
          </p>
        </main>
      </div>
    );
  }
}

export default App;
