import React from'react';
import classes from './ProductPreview.module.css';

const ProductPreview= (props) => {
    console.log(props.currentPreviewImage);

    const hour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const minute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    
    return(
        <div  className={classes.productPreview}>
            <img src={props.currentPreviewImage}/>
            {
                props.showHeartBeatSection ?

         <div className={classes.heartIcon}>
          <i className="fas fa-heartbeat "></i>
          <p>72</p>
          </div>
          
          :

          <div className={classes.featureData}> 
           <p >{`${hour}:${minute}`}</p>
          </div>

                
            }

          
          
        </div>
        
    )
}
export default ProductPreview;