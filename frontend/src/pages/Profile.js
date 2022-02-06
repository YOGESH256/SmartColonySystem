import React from 'react'
import "../styles/Profile.css"

export default function profile() {
        return (
<>
<div class="prof-wrapper">
    <div class="left">
        <img src="https://i.imgur.com/cMy8V5j.png" 
        alt="user" width="100"/>
        <h4>Soham Das</h4>
         <p>UI Developer</p>
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
                    <p>2019soham.das@gmail.com</p>
                 </div>
                 <div class="data">
                   <h4>Phone</h4>
                    <p>0001-213-998761</p>
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Timeline</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Joining Date</h4>
                    <p>01/01/2021</p>
                 </div>
                 <div class="data">
                   <h4>Leaving Date</h4>
                    <p>01/11/2021.</p>
              </div>
            </div>
        </div>
        <div class="projects">
            <h3>Work Done</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>past Orders</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div class="data">
                   <h4>Room Staying</h4>
                    <p>dolor sit amet.</p>
              </div>
            </div>
        </div>
        <div class="social_media">
            <ul>
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
      </div>
<button type="button" class=" btn-danger" id="prof-action">Action</button>
    </div>
    
</div>
</>
    )
}
