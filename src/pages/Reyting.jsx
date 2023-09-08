import React, { useEffect, useState } from 'react'
import Pagination from '../utils/Pagination'
import axiosInstance from '../utils/config'

function Reyting() {
  const [data, setData] = useState([])
  const [schools, setSchools] = useState([])

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(50)
  const [elements, setElements] = useState()

  const [schoolId, setSchoolId] = useState("0")

  const handlePageClick = (e) => {
    setPage(e?.selected + 1)
    console.log(e?.selected + 1)
    if (schoolId === "0") {
      axiosInstance.get(`/Posts/GetTop?limit=${limit}&page=${e?.selected + 1}`)
        .then((res) => {
          console.log(res.data?.elements);
          setData(res.data?.elements);
          setElements(res.data.total)
        })
    } else {
      axiosInstance.get(`/Posts/GetTopBySchool?limit=${limit}&page=${e?.selected + 1}&schoolid=${schoolId}`)
        .then((res) => {
          setData(res.data.elements);
          setElements(res.data.total)
          console.log(res.data);
        })
    }
  }

  const selected = (e) => {
    setLimit(50)
    setPage(1)
    setSchoolId(e?.target?.value)

    console.log(e?.target?.value);

    if (e?.target?.value === "0") {
      axiosInstance.get(`/Posts/GetTop?limit=${50}&page=${1}`)
        .then((res) => {
          console.log(res.data?.elements);
          setData(res.data?.elements);
          setElements(res.data.total)
        })
    } else {
      axiosInstance.get(`/Posts/GetTopBySchool?limit=${50}&page=${1}&schoolid=${e?.target?.value}`)
        .then((res) => {
          setData(res.data.elements);
          setElements(res.data.total)
          console.log(res.data);
        })
    }
  }

  useEffect(() => {
    axiosInstance.get(`Posts/GetTop?limit=${limit}&page=${page}`)
      .then((res) => {
        setData(res.data.elements);
        setElements(res.data.total)
        console.log(res.data);
      })
  }, [])

  useEffect(() => {
    axiosInstance.get(`/tumanxtb/Schools/GetAllForGhost`)
      .then((res) => {
        setSchools(res.data.elements);
        console.log(res.data);
      })
  }, [])

  return (
    <section className="feature_area section_gap_top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="main_title">
              <h2 className="mb-3">Ota-onalar reytinggi</h2>
              <p>
                Bu yerda siz tumandagi tarbiyachilar reytinggi <br /> bilan tanishishingiz mumkin.
              </p>
            </div>
          </div>
        </div>

        <div className='mb-3' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontWeight: "600" }}>Reyting</h2>

          <select class="custom-select custom-select-lg"
            style={{ width: "250px" }}
            onChange={(e) => selected(e)}>
            <option selected value="0">Barchasi</option>\

            {
              schools?.map((item, index) => {
                return (
                  <option value={item?.id} key={index}>{item?.name}</option>
                )
              })
            }
          </select>
        </div>

        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr className='text-center'>
              <th>№</th>
              <th>Ismi familiyasi</th>
              <th>Otasining ismi</th>
              <th>Maktabi</th>
              <th>Sinfi</th>
              <th>Reyting</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.length > 0 && data?.map((item, index) => {
                return(
                  <tr className='text-center'>
                    <td>{index+1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.fathersName}</td>
                    <td>{item?.role}</td>
                    <td>{item?.className}</td>
                    <td>{item?.rating}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

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
    </section>
  )
}

export default Reyting