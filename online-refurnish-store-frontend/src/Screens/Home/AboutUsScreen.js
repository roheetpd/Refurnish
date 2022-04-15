import React from 'react'
import Header from '../../Components/Header'
import Passion from '../../Images/Passion.JPG'
import Preserve from '../../Images/Preserve.JPG'
import Inspired from '../../Images/Inspired.JPG'

const AboutUsScreen = (props) => {
  return (
    <div className="Screen">
      <Header title="About Us"/>
      <div className="info">
        
      {/* <img src={Passion} alt=""   height="300px" width="450px" /><h1>hello</h1>
      <h1>hello</h1> */}
      
      
      <tr>
        <td><img src={Passion} alt=""   height="300px" width="450px" /></td>
        <td colspan ="8" style={ { marginTop: "10%" } } valign='top' align='center'> <br></br> <br></br><h1>  Our Passion</h1> <br></br> <p>Re-furnish is an upcycling furniture and reinvented objects studio. Our passion lies in reinventing vintage furniture, recycled wood and metal, natural dyed textile and discarded items into hand-made functional and artistic products. We believe that old furniture is an exceptional resource, both of inspiration and of high quality material.</p></td>
      </tr>
<br></br>
<br></br>
      <tr>
       
        <td colspan ="8" style={ { marginTop: "10%" } } valign='top' align='center'> <br></br> <br></br><h1>  We Love to Preserve</h1> <br></br> <p>
We set out to save old and unnecessary furniture in order to bring new life to it and to prove that reuse unites beauty and functionality.

We retain anything that may become of use – armrests, legs, frames, boards of old wardrobes, handles , carpets – and the transformation comes from combining different elements with our own inspiration.

We love to preserve the spirit and the sense of time when the original objects were created and bring them into the modern world.</p></td>
<td><img src={Preserve} alt=""   height="300px" width="450px" /></td>
      </tr>
      <br></br>
      <br></br>
     
      
      <tr>

        <td><img src={Inspired} alt=""   height="300px" width="450px" /></td>
        <td colspan ="8" style={ { marginTop: "10%" } } valign='top' align='center'>  <br></br><br></br><h1>Become Inspired</h1> <br></br> <p>
We are pleased to invite you into the world of upcycling – please take some minutes to view our workshop and become inspired by the objects, ideas and originality of our products and projects.

A big thank you, for your interest, from the Re-furnish team.</p></td>
      </tr>
      

      </div>
    </div>
   
  )
}

export default AboutUsScreen

