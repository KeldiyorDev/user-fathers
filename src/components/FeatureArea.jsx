import React from 'react'

export default function FeatureArea() {
    return (
        <section className="feature_area section_gap_top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="main_title">
                            <h2 className="mb-3">Loyiha haqida</h2>
                            <p>
                            Loyihaning qisqacha mazmun maqsadi bilan tanishing
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single_feature">
                            <div className="icon"><span className="flaticon-student"></span></div>
                            <div className="desc">
                                <h4 className="mt-3 mb-2">Yagona malumotlar portali</h4>
                                <p>
                                    Ushbu platformada tumandagi barcha maktab o'quvchilarining faol ota-onalari avtomatik jamlanadi
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single_feature">
                            <div className="icon"><span className="flaticon-book"></span></div>
                            <div className="desc">
                                <h4 className="mt-3 mb-2">Dars sifati oshishi</h4>
                                <p>
                                    O'ylab ko'ring, darsda 1 nafar tarbiyachi borligi o'qituvchidan qay darajada tayyorgarlik talab qiladi
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single_feature">
                            <div className="icon"><span className="flaticon-earth"></span></div>
                            <div className="desc">
                                <h4 className="mt-3 mb-2">Raqobat rivojlanishi</h4>
                                <p>
                                    Endi, tumanimizda nafaqat o'quvchilar, tarbiyachilar o'rtasida ham raqobat shakllanadi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
