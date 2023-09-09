import React from 'react'

function TestimonialArea() {
  return (
    <div className="testimonial_area section_gap">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="main_title">
            <h2 className="mb-3">Faollar biz haqimizda</h2>
            <p>
              Loyiha asoschilari va faol foydalanuvchilar <br /> tomonidan berilgan fikrlar
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        {/* <div className="testi_slider owl-carousel"> */}
          <div className="testi_item col-lg-6">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/img/testimonials/t1.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4 className='mb-0'>Diyorbek Tolibov</h4>
                  <p className='mb-2' style={{fontSize: "14px"}}>-maktab rahbari</p>
                  <p>
                  Platforma tumanimiz maktablarining ta`lim va jamoat ishlarida rivojlanishda katta yordam beradi deb hisoblaymiz. Bunday hamkorliklar uzoq davom etadi degan umiddamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testi_item col-lg-6">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/img/testimonials/t1.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4 className='mb-0'>Diyorbek Tolibov</h4>
                  <p className='mb-2' style={{fontSize: "14px"}}>Texno-maktab rahbari</p>
                  <p>
                  Platforma tumanimiz maktablarining ta`lim va jamoat ishlarida rivojlanishda katta yordam beradi deb hisoblaymiz. Bunday hamkorliklar uzoq davom etadi degan umiddamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testi_item col-lg-6">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/img/testimonials/t1.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4 className='mb-0'>Diyorbek Tolibov</h4>
                  <p className='mb-2' style={{fontSize: "14px"}}>Texno-maktab rahbari</p>
                  <p>
                  Platforma tumanimiz maktablarining ta`lim va jamoat ishlarida rivojlanishda katta yordam beradi deb hisoblaymiz. Bunday hamkorliklar uzoq davom etadi degan umiddamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testi_item col-lg-6">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/img/testimonials/t1.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4 className='mb-0'>Diyorbek Tolibov</h4>
                  <p className='mb-2' style={{fontSize: "14px"}}>Texno-maktab rahbari</p>
                  <p>
                  Platforma tumanimiz maktablarining ta`lim va jamoat ishlarida rivojlanishda katta yordam beradi deb hisoblaymiz. Bunday hamkorliklar uzoq davom etadi degan umiddamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        {/* </div> */}
      </div>
    </div>
  </div>
  )
}

export default TestimonialArea