import React from 'react'
import "../styles/Comment.css";
export default function Comment() {
    return (

        <div className="container mt-3 d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
                    <div className="button-add">
                    <a href = "/review"><button type="button"  class="btn btn-primary button-comment">+</button></a>
                    </div>
            <div className="col-md-8">
                <div className="text-left">
                    <h1>All comment(5)</h1>
                </div>
                <div className="card p-3 mb-2">
                    <div className="d-flex flex-row"> <img src="https://i.imgur.com/dwiGgJr.jpg" height="40" width="40" className="rounded-circle"/>
                        <div className="d-flex flex-column ms-2">
                            <h6 className="mb-1 text-primary">Emma</h6>
                            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus nibh, efficitur in bibendum id, pellentesque quis nibh. Ut dictum facilisis dui, non faucibus dolor sit amet lorem auctor vitae. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque risus mauris</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row gap-3 align-items-center">
                            <div className="d-flex align-items-center"> <i className="fa fa-heart-o"></i> <span className="ms-1 fs-10">Like</span> </div>
                            <div className="d-flex align-items-center"> <i className="fa fa-comment-o"></i> <span className="ms-1 fs-10">Comments</span> </div>
                        </div>
                        <div className="d-flex flex-row"> <span className="text-muted fw-normal fs-10">May 22,2020 12:10 PM</span> </div>
                    </div>
                </div>
                <div className="card p-3 mb-2">
                    <div className="d-flex flex-row"> <img src="https://i.imgur.com/hczKIze.jpg" height="40" width="40" className="rounded-circle"/>
                        <div className="d-flex flex-column ms-2">
                            <h6 className="mb-1 text-primary">Morne Micheal</h6>
                            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus nibh, efficitur in bibendum id, pellentesque quis nibh. Ut dictum facilisis dui, non faucibus dolor sit amet lorem auctor vitae. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque risus mauris</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row gap-3 align-items-center">
                            <div className="d-flex align-items-center"> <i className="fa fa-heart-o"></i> <span className="ms-1 fs-10">Like</span> </div>
                            <div className="d-flex align-items-center"> <i className="fa fa-comment-o"></i> <span className="ms-1 fs-10">Comments</span> </div>
                        </div>
                        <div className="d-flex flex-row"> <span className="text-muted fw-normal fs-10">May 21,2020 1:10 PM</span> </div>
                    </div>
                </div>
                <div className="card p-3 mb-2">
                    <div className="d-flex flex-row"> <img src="https://i.imgur.com/C4egmYM.jpg" height="40" width="40" className="rounded-circle"/>
                        <div className="d-flex flex-column ms-2">
                            <h6 className="mb-1 text-primary">Tommy Hifig</h6>
                            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus nibh, efficitur in bibendum id, pellentesque quis nibh. Ut dictum facilisis dui, non faucibus dolor sit amet lorem auctor vitae. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque risus mauris</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row gap-3 align-items-center">
                            <div className="d-flex align-items-center"> <i className="fa fa-heart-o"></i> <span className="ms-1 fs-10">Like</span> </div>
                            <div className="d-flex align-items-center"> <i className="fa fa-comment-o"></i> <span className="ms-1 fs-10">Comments</span> </div>
                        </div>
                        <div className="d-flex flex-row"> <span className="text-muted fw-normal fs-10">May 12,2020 12:10 PM</span> </div>
                    </div>
                </div>
                <div className="card p-3 mb-2">
                    <div className="d-flex flex-row"> <img src="https://i.imgur.com/dwiGgJr.jpg" height="40" width="40" className="rounded-circle"/>
                        <div className="d-flex flex-column ms-2">
                            <h6 className="mb-1 text-primary">Emma</h6>
                            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus nibh, efficitur in bibendum id, pellentesque quis nibh. Ut dictum facilisis dui, non faucibus dolor sit amet lorem auctor vitae. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque risus mauris</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row gap-3 align-items-center">
                            <div className="d-flex align-items-center"> <i className="fa fa-heart-o"></i> <span className="ms-1 fs-10">Like</span> </div>
                            <div className="d-flex align-items-center"> <i className="fa fa-comment-o"></i> <span className="ms-1 fs-10">Comments</span> </div>
                        </div>
                        <div className="d-flex flex-row"> <span className="text-muted fw-normal fs-10">May 22,2020 12:10 PM</span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    )
}
