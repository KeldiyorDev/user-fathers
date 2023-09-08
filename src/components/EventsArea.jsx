import React from 'react'

function EventsArea() {
    return (
        <div className="events_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="main_title">
                            <h2 className="mb-3 text-white">Upcoming Events</h2>
                            <p>
                                Replenish man have thing gathering lights yielding shall you
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single_event position-relative">
                            <div className="event_thumb">
                                <img src="img/event/e1.jpg" alt="" />
                            </div>
                            <div className="event_details">
                                <div className="d-flex mb-4">
                                    <div className="date"><span>15</span> Jun</div>

                                    <div className="time-location">
                                        <p>
                                            <span className="ti-time mr-2"></span> 12:00 AM - 12:30 AM
                                        </p>
                                        <p>
                                            <span className="ti-location-pin mr-2"></span> Hilton Quebec
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    One make creepeth man for so bearing their firmament won't
                                    fowl meat over seas great
                                </p>
                                <a href="/" className="primary-btn rounded-0 mt-3">View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single_event position-relative">
                            <div className="event_thumb">
                                <img src="img/event/e2.jpg" alt="" />
                            </div>
                            <div className="event_details">
                                <div className="d-flex mb-4">
                                    <div className="date"><span>15</span> Jun</div>

                                    <div className="time-location">
                                        <p>
                                            <span className="ti-time mr-2"></span> 12:00 AM - 12:30 AM
                                        </p>
                                        <p>
                                            <span className="ti-location-pin mr-2"></span> Hilton Quebec
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    One make creepeth man for so bearing their firmament won't
                                    fowl meat over seas great
                                </p>
                                <a href="/" className="primary-btn rounded-0 mt-3">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="text-center pt-lg-5 pt-3">
                            <a href="/" className="event-link">
                                View All Event <img src="img/next.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsArea