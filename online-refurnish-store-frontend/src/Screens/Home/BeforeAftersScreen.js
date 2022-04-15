// import React from 'react'
// // import ct1 from '..\Images\ct1.jpg,'
// // import ct2 from '../Images/ct2.jpg'
// import Header from '../../Components/Header'
//import axios from 'axios'
import React from 'react'
//import { toast } from 'react-toastify'
import Header from '../../Components/Header'
//import { URL_PATH } from '../../Constants/Url'
import f1a from '../../Images/f1a.JPG'
import f1b from '../../Images/f1b.JPG'
import f2a from '../../Images/f2a.JPG'
import f2b from '../../Images/f2b.JPG'
import f3a from '../../Images/f3a.JPG'
import f3b from '../../Images/f3b.JPG'
import f4a from '../../Images/f4a.JPG'
import f4b from '../../Images/f4b.JPG'
import f5a from '../../Images/f5a.JPG'
import f5b from '../../Images/f5b.JPG'
import f6a from '../../Images/f6a.JPG'
import f6b from '../../Images/f6b.JPG'
import arrow from '../../Images/arrow.jpg'




const BaScreen = (props) => {
    return (
        <div className="Screen" align='center' >
            <Header title="Before and Afters" />

        <tr>
             <td><img src={f5b} alt=""   height="400px" width="450px" /></td>
             <td><img src={arrow} alt=""   height="500px" width="100px" /></td>
             <td><img src={f5a} alt=""   height="400px" width="450px" /></td>

        </tr>   
        <br></br>
        <br></br>
        
        <tr>
             <td><img src={f6b} alt=""   height="400px" width="450px" /></td>
             <td><img src={arrow} alt=""   height="500px" width="100px" /></td>
             <td><img src={f6a} alt=""   height="400px" width="450px" /></td>

        </tr>   
        <br></br>
        <br></br>


        <tr>
             <td><img src={f1b} alt=""   height="400px" width="450px" /></td>
             <td><img src={arrow} alt=""   height="500px" width="100px" /></td>
             <td><img src={f1a} alt=""   height="400px" width="450px" /></td>

        </tr>    
        <br></br>
        <br></br>
        <tr>
             <td><img src={f2b} alt=""   height="400px" width="450px" /></td>
             <td><img src={arrow} alt=""   height="500px" width="100px" /></td>
             <td><img src={f2a} alt=""   height="400px" width="450px" /></td>

        </tr> 
        <br></br>
        <br></br>
        <tr>
             <td><img src={f3b} alt=""   height="400px" width="450px" /></td>
             <td><img src={arrow} alt=""   height="500px" width="100px" /></td>
             <td><img src={f3a} alt=""   height="400px" width="450px" /></td>

        </tr> 
        <br></br>
        <br></br>
        <tr>
             <td><img src={f4b} alt=""   height="400px" width="450px" /></td>
             <td><img src={arrow} alt=""   height="500px" width="100px" /></td>
             <td><img src={f4a} alt=""   height="400px" width="450px" /></td>

        </tr>        
        </div>
    )
}

export default BaScreen
