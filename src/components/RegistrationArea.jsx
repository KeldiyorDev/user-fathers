import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/config'

function RegistrationArea() {
    const [data, setData] = useState()

    useEffect(() => {
        axiosInstance.get(`/Posts/GetStats`)
        .then((res) => {
            setData(res?.data)
            console.log(res?.data)
        })
    }, [])
    return (
        <div className="section_gap registration_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="row clock_sec clockdiv" id="clockdiv">
                            <div className="col-lg-12">
                                <h1 className="mb-3">TIZIM HOZIRDA</h1>
                                <p>
                                    Tizim ishga tushganidan qisqa vaqt o'tishiga qaramasdan, butun tumanimiz bo'ylab faol foydalanilmoqda va foydalanuvchilar tomonidan qo'llab quvvatlanmoqda
                                </p>
                            </div>
                            <div className="col clockinner1 clockinner">
                                <h4 className="text-white">Maktablar</h4>
                                <h1 className="days">{data?.schools_count}</h1>
                            </div>
                            <div className="col clockinner clockinner1">
                                <h4 className="text-white">Sinflar</h4>
                                <h1 className="hours">{data?.classes_count}</h1>
                            </div>
                            <div className="col clockinner clockinner1">
                                <h4 className="text-white">Foydalanuvchilar</h4>
                                <h1 className="minutes">{data?.users_count}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 mt-4">
                        <img style={{width: "100%", height: "350px", objectFit: "cover"}} src="/img/2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationArea