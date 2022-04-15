import React from 'react'

import Header from '../../Components/Header'

const ContactUsScreen = (props) => {
    return (
        <div className="Screen">
            <Header title="Contact Us" />

            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 Block">
                    <h5 className="text-center">
                        Reach out to us here
                    </h5>
                    <hr/>
                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                        
                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Peter Johns</strong><br/>
                                <label className="fs-7">Store Manager</label><br/>
                                <label className="fs-7">peter.johns@gmail.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                            <strong className="fs-5">740 S, Orange street</strong><br/>
                                <label className="fs-7">South Hampshire</label><br/>
                                <label className="fs-7">North Carolina - 121277</label><br/>
                                <label className="fs-7">L.A. | U.S.A</label>
                                
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br/>
                                <label className="fs-7"> +1 985511471 </label><br/>
                                <label className="fs-7"> 1008520010 </label><br/>
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                        <hr/>

                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Jack Johns</strong><br/>
                                <label className="fs-7">Store Manager</label><br/>
                                <label className="fs-7">jack.johns@gmails.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                            <strong className="fs-5">741 S, Olive street</strong><br/>
                                <label className="fs-7">South Hampshire</label><br/>
                                <label className="fs-7">North Carolina - 121277</label><br/>
                                <label className="fs-7">L.A. | U.S.A</label>
                                
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br/>
                                <label className="fs-7"> +1 775511471 </label><br/>
                                <label className="fs-7"> 1008520010 </label><br/>
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                        <hr/>

                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Mike Ross</strong><br/>
                                <label className="fs-7">Store Manager</label><br/>
                                <label className="fs-7">mike.ross@grocers.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">742 S, FS street</strong><br/>
                                <label className="fs-7">South Hampshire</label><br/>
                                <label className="fs-7">North Carolina - 121277</label><br/>
                                <label className="fs-7">L.A. | U.S.A</label>
                                
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br/>
                                <label className="fs-7"> +1 885511471 </label><br/>
                                <label className="fs-7"> 1008520010 </label><br/>
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12">
                    <h5 className="text-center">
                        Let us get back to you
                    </h5>
                    <hr/>
                    <div>
                        <br/><br/>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Name</h6>
                            <input className="form-control" type="text" placeholder="Your name" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Email</h6>
                            <input className="form-control" type="email" placeholder="you@gmail.com" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Contact</h6>
                            <input className="form-control" type="number" placeholder="Your mobile" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>What would you like to know?</h6>
                            <textarea  rows="3" className="form-control" type="text" placeholder="" />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="button" className="btn btn-outline-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ContactUsScreen
