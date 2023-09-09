import React, { useRef } from 'react'
import axiosInstance from '../utils/config';

function Contacts() {
    const userName = useRef()
    const messageName = useRef()

    const sendMessage = (e) => {
        e.preventDefault()

        console.log({
            title: messageName?.current?.value,
            userName: userName?.current?.value,
        });

        axiosInstance.post(`/Suggestions/Add`, {
            title: messageName?.current?.value,
            userName: userName?.current?.value,
        }).then((res) => {
            console.log(res?.data);
            e.target.reset();
        })
    }
    return (
        <section class="contact_area section_gap mt-0 pt-0">
            <div class="container">
                <div className='mb-5 row'>
                    <div className="col-lg-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331912.3345359072!2d64.20952316626978!3d39.96295909700326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5069b1a66c9d9d%3A0x4788459282709085!2z0KXQvtC60LjQvNC40Y_Rgg!5e0!3m2!1sru!2s!4v1693423050186!5m2!1sru!2s" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='hokimiyat'></iframe>
                    </div>

                    <div className="col-lg-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331912.3345359072!2d64.20952316626978!3d39.96295909700326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5069b1a66c9d9d%3A0x4788459282709085!2z0KXQvtC60LjQvNC40Y_Rgg!5e0!3m2!1sru!2s!4v1693423050186!5m2!1sru!2s" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='hokimiyat'></iframe>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <h4 className='mb-3' style={{ fontWeight: "500" }}>Tuman hokimiyatiga bog'lanish:</h4>
                        <div class="contact_info">
                            <div class="info_item">
                                <i class="ti-home"></i>
                                <h6>California, United States</h6>
                                <p>Santa monica bullevard</p>
                            </div>
                            <div class="info_item">
                                <i class="ti-headphone"></i>
                                <h6><a href="/">00 (440) 9865 562</a></h6>
                                <p>Mon to Fri 9am to 6 pm</p>
                            </div>
                            <div class="info_item">
                                <i class="ti-email"></i>
                                <h6><a href="https://mail.google.com/mail/u/galaktikasystem@gmail.com" target='_blank' rel="noreferrer">galaktikasystem@gmail.com</a></h6>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form
                            class="row contact_form"
                            id="contactForm"
                            novalidate="novalidate"
                            onSubmit={sendMessage}
                        >

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Emailingizni kiriting"
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Emailingizni kiriting'"
                                        required=""
                                        ref={userName}
                                    />
                                </div>
                                <div class="form-group">
                                    <textarea
                                        class="form-control"
                                        name="message"
                                        id="message"
                                        rows="1"
                                        ref={messageName}
                                        placeholder="Murojaatingizni kiriting"
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Murojaatingizni kiriting'"
                                        required=""
                                    ></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 text-right">
                                <button type="submit" value="submit"
                                    class="btn primary-btn w-100">
                                    Yuborish
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3">
                        <h4 className='mb-3' style={{ fontWeight: "500" }}>-maktabga bog'lanish:</h4>
                        <div class="contact_info">
                            <div class="info_item">
                                <i class="ti-home"></i>
                                <h6>California, United States</h6>
                                <p>Santa monica bullevard</p>
                            </div>
                            <div class="info_item">
                                <i class="ti-headphone"></i>
                                <h6><a href="/">00 (440) 9865 562</a></h6>
                                <p>Mon to Fri 9am to 6 pm</p>
                            </div>
                            <div class="info_item">
                                <i class="ti-email"></i>
                                <h6><a href="https://mail.google.com/mail/u/galaktikasystem@gmail.com" target='_blank' rel="noreferrer">galaktikasystem@gmail.com</a></h6>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts