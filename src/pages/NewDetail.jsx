import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/config';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function NewDetail() {
    const [data, setData] = useState({})
    const { id } = useParams()

    console.log(id);

    useEffect(() => {
        axiosInstance.get(`/Sender/GetNew?postid=${id}`)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
    }, [id])

    return (
        <section class="blog_area single-post-area section_gap">
            <div class="container">
                <div className="main_title row mb-3">
                    <div className='col-lg-12'>
                        <h1 className="mb-3" style={{ textAlign: "start" }}>{data?.title}</h1>
                        <div class="text-left ">
                            <h5><i class="ti-user"></i> {data?.pupilName} ● {data?.categoryName} </h5>
                            <h5><i class="ti-calendar"></i> {data?.dateTime?.substr(0, 10)} ● {data?.description} </h5>
                            {/* <li><h5>{data?.pupilName}</h5> <i class="ti-user"></i></li>
                            <li><h5>{data?.dateTime?.substr(0, 10)}</h5><i class="ti-calendar"></i></li> */}
                        </div>

                    </div>


                </div>
                <div class="row">
                    <div class="col-lg-12 posts-list">
                        <div class="single-post row">
                            <div class="col-lg-12">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    {
                                        data?.images?.map((item, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <img class="img-fluid" src={item} alt="" />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                            {/* <div class="col-lg-3  col-md-3">
                                
                            </div> */}
                            <div class="col-lg-12 col-md-12 blog_details">
                                <h3>{data?.message}</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NewDetail