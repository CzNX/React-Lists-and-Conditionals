// import React, {Component} from 'react'; 

const validation = (props) =>{
    let validationMessage =''
    if(props.inputLength>=5){                                                  //js
        validationMessage='Text too long'
    }
    else{
        validationMessage='Text too short'
    }

    return(
        // <div>{ props.inputLength >5 ?                            //jsx
        //     <p>Text too long</p>:
        //     <p>Text too short</p>
        // }
        // </div>
        <p>{validationMessage}</p>
    )
;}

export default validation;