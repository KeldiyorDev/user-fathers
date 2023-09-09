import React, { useRef } from 'react'
import axiosInstance from '../utils/config'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
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
        <Wrapper>
            <footer class="footer-area section_gap" style={{ color: "#fff !important" }}>
                <div class="container">

                    <div className='mb-5 row'>
                        <div className="col-lg-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.5055913220904!2d64.68073237570121!3d40.10349637464471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5069b1a66c9d9d%3A0x4788459282709085!2z0KXQvtC60LjQvNC40Y_Rgg!5e1!3m2!1sru!2s!4v1693752884354!5m2!1sru!2s" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='hokimiyat'></iframe>
                        </div>

                        <div className="col-lg-6 maps2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.7090077408698!2d64.67294562570098!3d40.09878342492986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5069f11f360cbb%3A0x4f8a2b4f7d8fb3b6!2z0KHQtdGA0LLQuNGBIDc3Nw!5e1!3m2!1sru!2s!4v1693752804444!5m2!1sru!2s" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='texno-maktab'></iframe>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <h4 className='mb-3' style={{ fontWeight: "500", color: "#fff" }}>Tuman hokimiyatiga bog'lanish:</h4>
                            <div class="contact_info">
                                <div class="info_item">
                                    <i style={{ color: "#fff" }} class="ti-home"></i>
                                    <h6 style={{ color: "#fff" }}>G‘ijduvon shahar hokimiyati</h6>
                                    <p>Buxoro viloyati, G‘ijduvon shahri</p>
                                </div>
                                <div class="info_item">
                                    <i style={{ color: "#fff" }} class="ti-headphone"></i>
                                    <h6 style={{ color: "#fff" }}><a href="tel:+998655721333" target='_blank' style={{ color: "#fff" }} rel="noreferrer">+998 65 572-13-33</a></h6>
                                    <p>Dushanbadan jumagacha, <br /> 08:00 - 16:00</p>
                                </div>
                                <div class="info_item">
                                    <i style={{ color: "#fff" }} class="ti-email"></i>
                                    <h6><a href="mailto:gijduvon_th@umail.uz" target='_blank' rel="noreferrer" style={{ color: "#fff" }}>gijduvon_th@umail.uz</a></h6>
                                    <p>So'rovingizni yuboring!</p>
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
                        <div class="col-lg-3 maps3">
                            <h4 className='mb-3' style={{ fontWeight: "500", color: "#fff" }}>Texno-maktabga bog'lanish:</h4>
                            <div class="contact_info">
                                <div class="info_item">
                                    <i style={{ color: "#fff" }} class="ti-home"></i>
                                    <h6 style={{ color: "#fff" }}>G‘ijduvon shahar, Texno maktab markaziy binosi</h6>
                                    <p>G‘ijduvon shahar Abduxoliq G‘ijduvoniy ko‘chasi, 36-uy</p>
                                </div>
                                <div class="info_item">
                                    <i style={{ color: "#fff" }} class="ti-headphone"></i>
                                    <h6 style={{ color: "#fff" }}><a href="/" style={{ color: "#fff" }}>+998 94 412-43-01</a></h6>
                                    <p>Dushanbadan jumagacha, <br /> 08:00 - 16:00</p>
                                </div>
                                <div class="info_item">
                                    <i style={{ color: "#fff" }} class="ti-email"></i>
                                    <h6><a href="mailto:texnomaktabbuxoro@gmail.com" target='_blank' rel="noreferrer" style={{ color: "#fff" }}>texnomaktabbuxoro@gmail.com</a></h6>
                                    <p>So'rovingizni yuboring!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row footer-bottom d-flex justify-content-between">
                        <p class="col-lg-8 col-sm-12 footer-text m-0 text-white">
                            ©️ "Texno maktab" MChJ. Barcha huquqlar himoyalangan.
                        </p>
                        <div class="col-lg-4 col-sm-12 footer-social">
                            <Link to="https://www.facebook.com/gijduvonuz"><i class="ti-facebook"></i></Link>
                            <Link to="https://twitter.com/gijduvon"><i class="ti-twitter"></i></Link>
                            <Link to="https://www.instagram.com/gijduvontumanhokimlik/?utm_medium=copy_link"><i class="ti-instagram"></i></Link>
                            <Link to="https://www.youtube.com/channel/UCgteO4fszYdszvfOVmabFOQ"><i class="ti-youtube"></i></Link>
                        </div>
                    </div>

                </div>
            </footer>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    @media(max-width: 992px) {
        .maps2{
            margin-top: 16px;
        }

        .maps3 {
            padding-top: 48px;
        }
    }
`