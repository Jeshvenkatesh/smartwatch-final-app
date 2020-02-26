import React from'react';
import classes from './productdata.module.css';
import ProductData from './productdetails';


const ProductDetails = (props) =>{
  console.log(props.data)

    const colorOptions = props.data.colorOptions.map((item, pos)=>{
      const classArr = [classes.productImage]
      if(pos===props.currentprevieImgpos){
        classArr.push(classes.selectedProductImage);
      }
        return(
            <img className={classArr.join(' ')} src={item.imageurl} key={pos} onClick={() => props.onColorOptionClick(pos)}/>
        );
    })

    const buttons = props.data.BtnList.map((item, pos)=>{
      const BtnArr = [classes.featureItem]
      if(pos===0){
        BtnArr.push(classes.selectedFeatureItem);
      }
      return(
      <button onClick={() => props.onFeatureItemClick(pos)} className={BtnArr.join(' ')} key={pos}>{item}</button>

      );
    })

return(
    <div  className={classes.productData}>
          <h1>{props.data.title}</h1>
           <p>{props.data.description}</p>

           <h3>Select Color</h3>
           <div>
             {/* <img className={[classes.productImage, classes.selectedProductImage].join(' ')} src="https://i.imgur.com/PTgQlim.png"/>
             <img className={classes.productImage} src="https://i.imgur.com/Mplj1YR.png"/>
             <img className={classes.productImage} src="https://i.imgur.com/Zygu7I3.png"/>
             <img className={classes.productImage} src="https://i.imgur.com/iOeUBV7.png"/> */}
             {colorOptions}
             <h3>Features</h3>
             <div>
               {/* <button className={[classes.featureItem, classes.selectedFeatureItem].join(' ')}>Time</button>
               <button className={classes.featureItem}>Heart Rate</button> */}
               {buttons}
             </div>
             <button className={classes.primaryButton}>Buy Now</button>
           </div>
    </div>
)
}

export default ProductDetails;