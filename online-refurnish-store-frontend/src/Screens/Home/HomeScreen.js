import React from 'react'

import caro_front from '../../Images/caro_front.jpg'

import c2 from '../../Images/c2.jpg'
import c33 from '../../Images/c33.jpg'

import A1 from '../../Images/A1.jpg'
import A2 from '../../Images/A2.jpg'
import A3 from '../../Images/A3.jpg'
import abc1 from '../../Images/abc1.jpg'


const HomeScreen = (props) => {
  return (
//     <div className="Screen">
     
//       <div className="info">
        
//       <div className="container-fluid">
//       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src={one} className="d-block w-100" alt="..."/>
//   </div>
//   <div className="carousel-item">
//       <img src={two} className="d-block w-100" alt="..."/>
//   </div>
//     <div className="carousel-item">
//       <img src={three} className="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>

   
  
//  </div>
  
      

//       </div>
//     </div>

     
<div className="info">
  
<div className="container-fluid">
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval={1000}
       >
<div className="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
<div className="carousel-item active">
<img src={caro_front} className="w-100" height={600} width={1000} alt="..."/>
</div>
<div className="carousel-item">
<img src={c2} className="w-100" height={600} width={1000} alt="..."/>
</div>
<div className="carousel-item">
<img src={c33} className="w-100" height={600} width={1000} alt="..."/>
</div>
</div>
</div> 
</div>
<br></br>
<tr>
             <td><img src={A1} alt=""   height="400px" width="470px" /></td>
             <td colspan ="4" style={ { marginTop: "10%"},{ paddingLeft:"30px" } }  ><img src={A2} alt=""   height="400px" width="470px" /></td>
             <td colspan ="4" style={ { marginTop: "10%"},{ paddingLeft:"30px" } }  ><img src={A3} alt=""   height="400px" width="470px" /></td>
        </tr> 
<br></br>

<img src={abc1} className="w-100" height={800} width={600} alt="..."/>


</div>



  )
}

export default HomeScreen