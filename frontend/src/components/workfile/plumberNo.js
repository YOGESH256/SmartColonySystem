import React from 'react';
import '../../styles/Worker.css'
import { acptdPlumberDet } from './workerdet';

const plumberNo = () => {
  return (
    <div className='plum'>
        <h3 style={{display:'grid', justifyContent:'center', marginTop:'50px'}}>All plumbers are here!</h3>
        <div className='map-team-cards'>
        { acptdPlumberDet.map(info => {
            return (
              <div className="card-box">
                <div id="st-box">
                  <img
                    src={info.profImg}
                    alt="Person"
                    class="card__image"
                  />
                  <p class="card__name">{info.username}</p>
                  <div class="grid-container">
                    <div class="">{info.rating} stars</div>
                  </div>
                  <button class="btn draw-border">Services</button>
                  <button class="btn draw-border">Contact</button>
                  {/* <ul class="social-icons">
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-codepen"></i></a></li>
                  </ul> */}
                </div>
                
                <div id="nd-box" className='scroll'>
                  <h2>Services Desc.</h2>
                  {info.Services.map( s => (
                          <li>{s}<br /></li>
                  ))}
                  <p><br />
                    We can create as many div as many we want side by
                    side with the same height and also with the
                    different heights.
                    We can create as many div as many we want side by
                    side with the same height and also with the
                    different heights.
                    We can create as many div as many we want side by
                    side with the same height and also with the
                    different heights.
                    We can create as many div as many we want side by
                    side with the same height and also with the
                    different heights.
                  </p>
                </div>

              </div>
          )}
        )}
        </div>

    </div>
  )
}

export default plumberNo;
