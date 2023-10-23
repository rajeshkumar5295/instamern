import React from 'react'

import "../css/homepage.css"
import {BsChatDots} from "react-icons/bs"
import {HiOutlineShare} from  "react-icons/hi"
import {AiOutlineHeart}from "react-icons/ai"
import {CiSaveDown1} from"react-icons/ci"
const HomePage = () => {
  return (
    < > 
                
                { /* card */}

                <div className="card">

                    <div className="card-header" >
                       {/* <div className="card-pic"> */}
                            <img src="  https://images.unsplash.com/photo-1695491333484-ecb0ce9e8d3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80 " alt="" className='header-img'  />
                            <h5> Bashdk  </h5>
                       {/* </div> */}
                       <span class="material-symbols-outlined">more_horiz</span>
                     
                    </div>


                    
                    {/* card image */}
                    <div className="card-image">
                       <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='card-img'/>
                    </div>  

                    {/* card content  */}
                <div className="card-content"> 
                    <div className="icons-part">
                          <div className="icons">
                             <span className='like'>
                              <AiOutlineHeart/>
                             </span>
                             <span class="chat">
                             <BsChatDots/>
                             </span>
                             <span class="share">
                                <HiOutlineShare/>
                               </span>
                          </div>

                       <div className="save-icon"> <CiSaveDown1/></div>

                    </div>

                      <p> 1 Like </p>
                      <p> This is amazing </p>
                    </div>  

                    {/* add comment */}
                    {/* <div className="add-comment">
                    <span class="material-symbols-outlined">
                         sentiment_satisfied
                     </span> 
                     <input type="text" name="" id="" placeholder='Add a comment'/>
                     <button className='comment' >Post</button> 


                    </div> */}

                </div>

    </>
  )
}

export default HomePage