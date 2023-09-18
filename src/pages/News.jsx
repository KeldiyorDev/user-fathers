import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/config';
import Pagination from '../utils/Pagination';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function News() {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [elements, setElements] = useState()
    const [rek, setRek] = useState(false)

    const [data, setData] = useState([])

    useEffect(() => {
        axiosInstance.get(`/Sender/GetAll?limit=${limit}&page=${page}`)
            .then((res) => {
                setData(res.data.elements);
                setElements(res.data.total)
                console.log(res.data);
            })
    }, [])

    const handlePageClick = (e) => {
        setPage(e?.selected + 1)
        console.log(e?.selected + 1)


        axiosInstance.get(`/Sender/GetAll?limit=${limit}&page=${e?.selected + 1}`)
            .then((res) => {
                setData(res.data.elements);
                setElements(res.data.total)
                console.log(res.data);
            })
    }

    return (
        <Wrapper className="news feature_area section_gap_top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="main_title">
                            <h2 className="mb-3" id='news'>So'ngi yangiliklar</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        data?.length > 0 && (data?.map((item, index) => {
                            return (
                                <Link to={`/yangiliklar/${item?.id}`} className="single_course col-lg-12 mb-3">
                                    <div className="course_head">
                                        <img className="img-fluid" src={item?.images?.[0] || "./img/post.png"} alt="" />
                                    </div>
                                    <div className="course_content mb-0" >
                                        {/* <span className="price">{item?.dateTime?.substr(5, 5)?.split("-")?.reverse()?.join(".")}</span> */}
                                        {/* <span className="tag mt-2 mb-4 d-inline-block">{item?.categoryName}</span> */}
                                        <h4 className="mb-3">
                                            <Link to={`/yangiliklar/${item?.id}`}>{item?.title}</Link>
                                        </h4>
                                        <p className='text-justify' style={{ color: "black" }}>
                                            {item?.message?.length > 200 ? item?.message?.substr(0, 200) + "..." : item?.message}
                                        </p>

                                        {/* <div className='mt-3' style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                            <Link className='tag'>Batafsil</Link>
                                        </div> */}

                                        <div className='date'>
                                            <p className="" style={{ fontSize: "14px", textAlign: "start", color: "black" }}>
                                                {item?.dateTime?.substr(0, 10)} ● {item?.description}
                                            </p>
                                        </div>

                                        {/* <div
                                            className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4"
                                        >
                                            <div className="authr_meta">
                                                <img src="img/courses/author1.png" alt="" />
                                                <span className="d-inline-block ml-2">Cameron</span>
                                            </div>
                                            <div className="mt-lg-0 mt-3">
                                                <span className="meta_info mr-4">
                                                    <a href="/"> <i className="ti-user mr-2"></i>25 </a>
                                                </span>
                                                <span className="meta_info"
                                                ><a href="/"> <i className="ti-heart mr-2"></i>35 </a></span
                                                >
                                            </div>
                                        </div> */}
                                    </div>
                                </Link>
                            )
                        }))
                    }
                </div>

                {
                    data?.length > 0 && <div className="col-lg-12 mt-2">
                        <Pagination
                            page={page}
                            limit={limit}
                            elements={elements}
                            handlePageClick={handlePageClick}
                        />
                    </div>
                }
            </div>

            {
                rek && (
                    <div className="reklama">
                        <div class="rek">
                            <div class="single_feature mb-0">
                                <div class="icon"><span class="flaticon-earth"></span></div>
                                <div class="desc">
                                    <h4 class="mt-3 mb-2">Global Certification</h4>
                                    <p>
                                        One make creepeth, man bearing theira firmament won't great
                                        heaven
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </Wrapper>
    )
}

export default News

const Wrapper = styled.section`
    .single_course{
        display: flex;
    }

    .course_content {
        width: 100%;
    }

    .course_head {
        width: 40%;
    }

    .img-fluid {
        width: 100%;
        object-fit: cover;
    }

    .date {
        position: absolute;
        bottom: 25px;
    }

    .reklama {
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 9999;
        
        .rek {
            overflow: hidden;
            border-radius: 16px;
            width: 30%;
            border: 1px solid black;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-name: example;
            animation-duration: 1s;
        }

        @keyframes example {
            from {
                top: 0;
            } 
            to {
                top: 50%;
            }
        }

    }
`