import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className="row container-fluid px-5">
            <div className="col-md-5 d-flex justify-content-center flex-column gap-5 ps-5 hero-left">
                <div className='hero-left-1'>
                    <h1 className=''>Access Exclusive</h1>
                    <h1>PDF Translation</h1>
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
    )
}

export default Home