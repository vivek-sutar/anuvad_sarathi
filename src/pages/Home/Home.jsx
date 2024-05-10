import React from 'react'
import './Home.css'
import { IoRocket } from "react-icons/io5";
const Home = () => {
    return (
        <>
            <div className="container-fluid px-5">
                <div className="row container-fluid px-5">
                    <div className="col-md-5 d-flex justify-content-center flex-column gap-5 ps-5 hero-left">
                        <div className='hero-left-1'>
                            <h1 className=''>Access Exclusive</h1>
                            <h1><span className='text-primary'>PDF</span> Translation</h1>
                        </div>
                        <div className="">
                            <p>Break language barriers with our complimentary text translation and subscribe for professional-grade PDF translations tailored to your needs.</p>
                        </div>
                        <div className='d-flex gap-4'>
                            <button className='btn btn-outline-primary px-5 py-3'>Our Services</button>
                            <button className='btn btn-primary px-5 py-3'>PDF Translation</button>
                        </div>
                    </div>
                    <div className="col-md-7 hero-right">
                        <img src="./images/hero-home.png" className='img-fluid w-100 h-100' alt="" />
                    </div>
                </div>
                <div className="offer-section">
                    <h1 className='text-center text-primary'>What We Offer</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="logo">
                                <IoRocket />
                                </div>
                                <p>To achieve excellence in product and service quality.</p>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home