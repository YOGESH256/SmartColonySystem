import React , {useState , useEffect} from 'react'
import "../styles/review.css"
import axios from 'axios';
export default function Review() {


  const [message , setMessage] = useState("")
  const [rating , setRating] = useState(0);
  const [nature , setNature] = useState("");
  const [reviews , setReviews] = useState([]);



  useEffect(async() => {
        let result = await axios.get('http://localhost:4000/allreviews?type=amenities').catch(e => console.log(e))
        console.log(result.data);
        setReviews(result.data);
        // setFiles(files)
  } , [])



  const submitHandler = async(e) => {

    e.preventDefault();
    const ol =  JSON.parse(localStorage.getItem('User'))
    console.log(ol);
    console.log(rating);
    console.log(message);
    console.log(nature);

    const lo = {
      rating ,
      message,
      nature,
      name: ol.username,
      userId: ol._id

    }

    try {
        const {data} = await axios.post('http://localhost:4000/addreview' ,  lo);
    } catch (e) {
        console.log(e);
    }
  }


    return (
        <div>
            {/* <nav class="navbar navbar-expand-sm navbar-dark"> 
            <img src="https://i.imgur.com/CFpa3nK.jpg" width="20" height="20" class="d-inline-block align-top rounded-circle" alt=""/> 
            <a class="navbar-brand ml-2" href="#" data-abc="true">Rib Simpson</a> 
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> 
                <span class="navbar-toggler-icon"></span>   
            </button>
                <div class="review-end">
                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul id="navbar-nav">
                            <li class="nav-item"> <a class="nav-link revw_anchor" href="#" data-abc="true">Work</a> </li>
                            <li class="nav-item"> <a class="nav-link revw_anchor" href="#" data-abc="true">Capabilities</a> </li>
                            <li class="nav-item "> <a class="nav-link revw_anchor" href="#" data-abc="true">Articles</a> </li>
                            <li class="nav-item active"> <a class="nav-link mt-2 revw_anchor" href="#" data-abc="true" id="clicked">Contact<span class="sr-only">(current)</span></a> </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a to="#" className="logo-container">
                Smart<font>Colony</font>
              </a>
            </div>
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item home">
                    <a className="nav-link active"
                    aria-current="page" to="#"> Work</a>
                  </li>
                  <li className="nav-item home">
                    <a className="nav-link active"
                    aria-current="page" to="#"> Capabilities</a>
                  </li>
                  <li className="nav-item home">
                    <a className="nav-link active"
                    aria-current="page" to="#"> Articles</a>
                  </li>
                </ul>
               
                  <button className="btn btn-outline-success" type="button">
                    Search
                  </button>
                
              </div>
            </div>
          </nav>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 col-md-6 col-12 pb-4">

                            <h1 class="revw-h1">Comments</h1>
                            { reviews.map((review) => (
                            <div class="revw-comment comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40"/>
                                <h4 class="revw-h4">{review.name}</h4> <span>- 20 October, 2018</span> <br/>
                                <p>{review.comments}</p>
                            </div>
                            ))

                            }
                            
                        </div>
                        <div class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                            <form id="algin-form" onSubmit={submitHandler}>
                                <div class="revw-form-group">
                                    <h4 class="revw-h4">Leave a comment</h4> 
                                    <label class="revw-label" for="message">Message</label> <textarea name="msg" onChange={(e) => setMessage(e.target.value)} id="" msg cols="30" rows="5" class="form-control review-form-bg" style={{}}></textarea>
                                </div>
                                <div>
                                <h4 class="revw-h4">Half Star Rating</h4>
                                <fieldset class="rate">
                                    <input type="radio" id="rating10" name="rating" value="10" /><label class="revw-label" for="rating10" title="5 stars"></label>
                                    <input type="radio" id="rating9" name="rating" value="9" /><label class="revw-label" class="half" for="rating9" title="4 1/2 stars"></label>
                                    <input type="radio" id="rating8" name="rating" value="8" /><label class="revw-label" for="rating8" title="4 stars"></label>
                                    <input type="radio" id="rating7" name="rating" value="7" /><label class="revw-label" class="half" for="rating7" title="3 1/2 stars"></label>
                                    <input type="radio" id="rating6" name="rating" value="6" /><label class="revw-label" for="rating6" title="3 stars"></label>
                                    <input type="radio" id="rating5" name="rating" value="5" /><label class="revw-label" class="half" for="rating5" title="2 1/2 stars"></label>
                                    <input type="radio" id="rating4" name="rating" value="4" /><label class="revw-label" for="rating4" title="2 stars"></label>
                                    <input type="radio" id="rating3" name="rating" value="3" /><label class="revw-label" class="half" for="rating3" title="1 1/2 stars"></label>
                                    <input type="radio" id="rating2" name="rating" value="2" /><label class="revw-label" for="rating2" title="1 star"></label>
                                    <input type="radio" id="rating1" name="rating" value="1" /><label class="revw-label" class="half" for="rating1" title="1/2 star"></label>
                                    <input type="radio" id="rating0" name="rating" value="0" /><label class="revw-label" for="rating0" title="No star"></label>
                                </fieldset>
                                </div>


                                <br/>
                                <label for="cars">Nature:</label>
                                <select onChange = {e => setNature(e.target.value)}>
                                    <option  value="property">Apartment</option>
                                    <option value="amenities">Amenities</option>
                                </select>

                                <br/>
                                <div class="form-inline"> <input type="checkbox" name="check" id="checkbx" class="mr-1"/> <label class="revw-label" for="subscribe">Subscribe me to the newlettter</label> </div>
                                <div class="revw-form-group"> <button type="button" id="post" class="btn">Post Comment</button> </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
