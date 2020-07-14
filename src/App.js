import React from 'react';
import './App.css';
 import myImage from  "./img.png"



function App() {
  return (
    <div style={{
    borderSolid:'1px',
    blackMaxWidth:'100vw'
    }}
    >  

    <h1 className='title-red' >Your name here</h1>  
 
<div className='more'>
        
           <img src={myImage} alt="img" />


             <img src="pic.png" alt="img" />  

             <iframe className="vid" width="320" height="240" controls src="https://www.youtube.com/embed/EJjn03K0JsQ" frameborder="0" allow=" autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
  

</div>
      </div>  
  );
}
export default App ;
