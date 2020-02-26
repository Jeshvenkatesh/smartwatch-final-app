import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './productdetails';
import ProductPreview from './productpreview';
import ProductDetails from './productdata';

class App extends Component {

  state = {
    proddata : ProductData,
    currentImageposition: 0,
    showHeartBeat : false
  }

  onColorOptionClick = (pos) =>{
    const updatedPreviewImage = this.state.proddata.colorOptions[pos].imageurl
    console.log(updatedPreviewImage)
    this.setState({currentImageposition :pos })

  }

  onFeatureItemClick = (pos) =>{
    let updatedState = false;
    if(pos===1){
      updatedState = true;
    }
    this.setState({showHeartBeat :updatedState })


  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
         <nav className={classes.topbar}>
           <img src="https://images-fe.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg" alt="logo"/>
  
         </nav>
        </header>
        <div className={classes.mainContainer}>
          <div className={classes.productPreview}>
            <ProductPreview currentPreviewImage={this.state.proddata.colorOptions[this.state.currentImageposition].imageurl} 
            showHeartBeatSection = {this.state.showHeartBeat} />
          </div>
          <div className={classes.productData}>
            <ProductDetails data= {this.state.proddata} onColorOptionClick={this.onColorOptionClick} 
            currentprevieImgpos={this.state.currentImageposition} onFeatureItemClick={this.onFeatureItemClick}/>
          </div>
        </div>
      </div>
    );

  }

}

export default App;
