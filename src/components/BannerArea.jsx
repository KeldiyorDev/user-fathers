import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { RxDashboard } from 'react-icons/rx'
import { Link } from 'react-router-dom'

function BannerArea() {
    return (
        <section className="home_banner_area">
            <div className="banner_inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner_content text-center">
                                <p className="text-uppercase">
                                    G'ijduvon tuman hokimiyati tashabbusi asosida
                                </p>
                                <h2 className="text-uppercase mt-4 mb-5">
                                    Ota-onalar reytingining onlayn tizimi
                                </h2>
                                <div>
                                    <Link to="/reyting" className="primary-btn2 mb-3 mb-sm-0">
                                        <BiLogIn fontSize={24} style={{marginRight: "4px"}}/>
                                        Ota-onalar reytingi</Link>
                                    <Link to="/maktab-reyting" className="primary-btn ml-sm-3 ml-0">
                                        <RxDashboard fontSize={24} style={{marginRight: "4px"}}/>
                                        Maktablar reytingi
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerArea