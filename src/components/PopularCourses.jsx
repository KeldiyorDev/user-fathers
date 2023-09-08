import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/config'
import styled from 'styled-components'

function PopularCourses() {
    const [school, setSchool] = useState([])
    const [student, setStudent] = useState([])

    useEffect(() => {
        axiosInstance.get(`/Posts/GetSchoolRating`)
            .then((res) => {
                console.log(res.data);
                setSchool(res?.data)
            })
    }, [])

    useEffect(() => {
        axiosInstance.get(`/Posts/GetTop?page=1&limit=3`)
            .then((res) => {
                console.log(res.data);
                setStudent(res?.data?.elements)
            })
    }, [])
    return (
        <Wrapper className="popular_courses">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="main_title">
                            <h2 className="mb-3">Top natijalar</h2>
                            <p>
                                Tumanimizdagi eng yaxshi maktablar va tarbiyachilar
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-lg-12"> */}
                    {/* <div className="owl-carousel active_course"> */}
                    <div className="col-lg-6" style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
                        <h2 className="">Top maktablar:</h2>

                        {
                            school?.map((item) => {
                                return (
                                    <div className="single_course col-lg-12 d-flex px-0" style={{ maxHeight: "100px" }}>
                                        <img className="img-fluid" style={{ height: "100px" }} src="./img/school.png" alt="" />
                                        <div className="course_content py-0" style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                            <h4>{item?.name}</h4>
                                            <h5>Bali: {item?.rating} </h5>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="col-lg-6 tarbiyachi" style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
                        <h2 className="">Top tarbiyachilar:</h2>

                        {
                            student?.map((item) => {
                                return (
                                    <div className="single_course col-lg-12 d-flex px-0" style={{ maxHeight: "100px" }}>
                                        <img className="img-fluid" style={{ height: "100px" }} src="./img/user.png" alt="" />
                                        <div className="course_content py-0" style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                            <h4>{item?.fathersName}</h4>
                                            <h5>Bali: {item?.rating} </h5>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default PopularCourses

const Wrapper = styled.div`
    @media(max-width: 768px) {
        .tarbiyachi{
            margin-top: 32px;
        }

        .img-fluid {
            height: 70px !important;
        }
    }
`