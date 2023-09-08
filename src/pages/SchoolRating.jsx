import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/config'

function SchoolRating() {
  const [data, setData] = useState([])

  useEffect(() => {
    axiosInstance.get(`/Posts/GetSchoolRating`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
  }, [])

  return (
    <section className="feature_area section_gap_top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="main_title">
              <h2 className="mb-3">Maktablar reytinggi</h2>
              <p>
                Bu yerda siz tumandagi maktablar reytinggi <br /> bilan tanishishingiz mumkin.
              </p>
            </div>
          </div>
        </div>

        <div className='mb-3' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontWeight: "600" }}>Reyting</h2>
        </div>

        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr className='text-center'>
              <th>№</th>
              <th>Maktab raqami</th>
              <th>Reytingi</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.length > 0 && data?.map((item, index) => {
                return(
                  <tr className='text-center'>
                    <td>{index+1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.rating}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SchoolRating