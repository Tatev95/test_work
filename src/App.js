import './assets/styles/styles.scss';
import React, {Component} from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';




class App extends Component{
  render(){
    return(
      <>
<Header />
        <Page />
<Footer />
    

</>
    )
  }
}


export default App;
