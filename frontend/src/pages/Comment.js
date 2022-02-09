import { Container, Row} from "react-bootstrap";

import "../styles/Comment.css";
import React , {useState , useEffect} from 'react'

import axios from 'axios';
export default function Comment() {
  const [reviews , setReviews] = useState([]);



  useEffect(async() => {


          let result = await axios.get('http://localhost:4000/allreviews?type=property').catch(e => console.log(e))


console.log(result.data);
  setReviews(result.data);



        // setFiles(files)

  } , [])


    return (

        <div className="container mt-3 d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
                    <div className="button-add">
                    <a href = "/review"><button type="button"  class="btn btn-primary button-comment">+</button></a>
                    </div>
            <div className="col-md-8">
                <div className="text-left">
                    <h1>All comment({reviews.length})</h1>
                </div>

                { reviews.map((review) => (
                  <div className="card p-3 mb-2">
                      <div className="d-flex flex-row"> <img src="https://i.imgur.com/dwiGgJr.jpg" height="40" width="40" className="rounded-circle"/>
                          <div className="d-flex flex-column ms-2">
                              <h6 className="mb-1 text-primary space-between ">{review.name} </h6>
                              <h6 style={{float:'right'}}> {review.rating}⭐</h6>
                              <p className="comment-text">{review.comments}</p>
                          </div>
                      </div>
                      <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row gap-3 align-items-center">
                              <div className="d-flex align-items-center"> <i className="fa fa-heart-o"></i> <span className="ms-1 fs-10">Like</span> </div>
                              <div className="d-flex align-items-center"> <i className="fa fa-comment-o"></i> <span className="ms-1 fs-10">Comments</span> </div>
                          </div>
                          <div className="d-flex flex-row"> <span className="text-muted fw-normal fs-10">{review.Date}</span> </div>
                      </div>
                  </div>

                ))

                }

















            </div>
          </div>
        </div>
  );
}
