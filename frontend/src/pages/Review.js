import React from 'react'
import "../styles/review.css"
export default function Review() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark"> <img src="https://i.imgur.com/CFpa3nK.jpg" width="20" height="20" class="d-inline-block align-top rounded-circle" alt=""/> <a class="navbar-brand ml-2" href="#" data-abc="true">Rib Simpson</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="end">
        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav">
                <li class="nav-item"> <a class="nav-link anchor" href="#" data-abc="true">Work</a> </li>
                <li class="nav-item"> <a class="nav-link anchor" href="#" data-abc="true">Capabilities</a> </li>
                <li class="nav-item "> <a class="nav-link anchor" href="#" data-abc="true">Articles</a> </li>
                <li class="nav-item active"> <a class="nav-link mt-2 anchor" href="#" data-abc="true" id="clicked">Contact<span class="sr-only">(current)</span></a> </li>
            </ul>
        </div>
    </div>
</nav>

<section>
    <div class="container">
        <div class="row">
            <div class="col-sm-5 col-md-6 col-12 pb-4">
                <h1>Comments</h1>
                <div class="comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40"/>
                    <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
                <div class="text-justify darker mt-4 float-right"> <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" class="rounded-circle" width="40" height="40"/>
                    <h4>Rob Simpson</h4> <span>- 20 October, 2018</span> <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
                <div class="comment mt-4 text-justify"> <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40"/>
                    <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
                <div class="darker mt-4 text-justify"> <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" class="rounded-circle" width="40" height="40"/>
                    <h4>Rob Simpson</h4> <span>- 20 October, 2018</span> <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form id="algin-form">
                    <div class="form-group">
                        <h4>Leave a comment</h4> <label for="message">Message</label> <textarea name="msg" id="" msg cols="30" rows="5" class="form-control form-bg" style={{}}></textarea>
                    </div>
                    <div>
                    <h4>Half Star Rating</h4>
<fieldset class="rate">
    <input type="radio" id="rating10" name="rating" value="10" /><label for="rating10" title="5 stars"></label>
    <input type="radio" id="rating9" name="rating" value="9" /><label class="half" for="rating9" title="4 1/2 stars"></label>
    <input type="radio" id="rating8" name="rating" value="8" /><label for="rating8" title="4 stars"></label>
    <input type="radio" id="rating7" name="rating" value="7" /><label class="half" for="rating7" title="3 1/2 stars"></label>
    <input type="radio" id="rating6" name="rating" value="6" /><label for="rating6" title="3 stars"></label>
    <input type="radio" id="rating5" name="rating" value="5" /><label class="half" for="rating5" title="2 1/2 stars"></label>
    <input type="radio" id="rating4" name="rating" value="4" /><label for="rating4" title="2 stars"></label>
    <input type="radio" id="rating3" name="rating" value="3" /><label class="half" for="rating3" title="1 1/2 stars"></label>
    <input type="radio" id="rating2" name="rating" value="2" /><label for="rating2" title="1 star"></label>
    <input type="radio" id="rating1" name="rating" value="1" /><label class="half" for="rating1" title="1/2 star"></label>
    <input type="radio" id="rating0" name="rating" value="0" /><label for="rating0" title="No star"></label>
</fieldset>
</div>


                    <div class="form-group">
                        <p class="text-secondary">If you have a <a href="#" class="alert-link">gravatar account</a> your address will be used to display your profile picture.</p>
                    </div>
                    <div class="form-inline"> <input type="checkbox" name="check" id="checkbx" class="mr-1"/> <label for="subscribe">Subscribe me to the newlettter</label> </div>
                    <div class="form-group"> <button type="button" id="post" class="btn">Post Comment</button> </div>
                </form>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}
