import React from "react";
import "./Home.css";
import { IoRocket } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
const Home = () => {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="row container-fluid px-5">
          <div className="col-md-5 d-flex justify-content-center flex-column gap-5 ps-5 hero-left">
            <div className="hero-left-1">
              <h1 className="">Access Exclusive</h1>
              <h1>
                <span className="text-primary">PDF</span> Translation
              </h1>
            </div>
            <div className="">
              <p>
                Break language barriers with our complimentary text translation
                and subscribe for professional-grade PDF translations tailored
                to your needs.
              </p>
            </div>
            <div className="d-flex gap-4">
              <button className="btn btn-outline-primary px-5 py-3">
                Our Services
              </button>
              <button className="btn btn-primary px-5 py-3">
                PDF Translation
              </button>
            </div>
          </div>
          <div className="col-md-7 hero-right">
            <img
              src="./images/hero-home.png"
              className="img-fluid w-100 h-100"
              alt=""
            />
          </div>
        </div>
        {/* <div className="row offer-section">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="row mt-5 d-flex flex-column align-items-center">
              <div className="card mission-card mt-4 d-flex justify-content-center align-items-center flex-row ps-2">
                <div className="mission-logo-div d-flex align-items-center justify-content-center ms-4">
                  <IoRocket className="mission-logo" />
                </div>
                <div className="flex-wrap">
                  <h5 className="mission-content ms-2 mt-2 text-wrap text-center flex-grow">
                    To achieve excellence in product and service quality.
                  </h5>
                </div>
              </div>
              <div className="card mission-card mt-4 d-flex justify-content-start">
                <div className="mission-logo d-flex justify-content-center">
                  <IoRocket />
                </div>
                <p className="mission-content text-wrap">
                  To achieve excellence in product and service quality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <h1 className="text-start text-primary">What We Offer</h1>
          </div>
        </div> */}
        <div className="row">
          <div className="col-12 col-md-12 col-lg-5 col-sm-12 d-flex flex-column gap-5 jsutify-content-center align-items-center text-center pt-5">
            <div className="card mt-4 px-5 py-5 mission-card border border-0 d-flex flex-row jsutify-content-center align-items-center">
              <div className="col-md-3 d-flex jsutify-content-center align-items-center">
                <div className="mission-logo-div d-flex jsutify-content-center align-items-center">
                  <IoRocket className="mission-logo text-center ms-4" />
                </div>
              </div>
              <div className="col-md-9 d-flex jsutify-content-start align-items-start">
                <h5 className="d-flexc jsutify-content-start align-items-start">
                  To achieve excellence in product and service quality.
                </h5>
              </div>
            </div>
            <div className="card px-5 py-5 goal-card border border-0 d-flex flex-row jsutify-content-center align-items-center">
              <div className="col-md-3 d-flex jsutify-content-center align-items-center">
                <div className="goal-logo-div d-flex jsutify-content-center align-items-center">
                  <GoGoal className="goal-logo text-center ms-4" />
                </div>
              </div>
              <div className="col-md-9 d-flex jsutify-content-center align-items-start">
                <h5 className="d-flexc jsutify-content-center align-items-start">
                  To transform Indian Law with the power of digital revolution
                  and Provide the highest quality of Legal products and services
                  at most affordable price.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-7 col-sm-12">
            <h1 className="text-primary">What We Offer</h1>
            <div class="offer-content pt-1 ">
              <p>
                Welcome to our platform! We provide seamless dictation services
                with versatile language translation options, eliminating
                language barriers in communication and document creation.
              </p>
              <p>
                With our text editor, you can effortlessly transcribe your
                thoughts and ideas into written form, with the added convenience
                of switching between languages to suit your preferences or
                target audience. Whether you're drafting emails, reports, or any
                other document, our intuitive interface makes it easy to compose
                and edit text in multiple languages.
              </p>
              <p>
                Unlock our free text translation service, breaking language
                barriers with accuracy and reliability for any text length. Say
                goodbye to language limitations with just a few clicks!
              </p>
              <p>
                Subscribe to our PDF translation service for seamless document
                translation. Upload your created PDF or scanned PDF, specify
                languages, and receive accurately translated documents with
                preserved formatting. Download in your preferred language for
                distribution or presentation.
              </p>
              <p>
                At our core, we prioritize offering reliable and efficient
                translation services to facilitate seamless communication and
                document creation across languages. Whether you're a business
                professional, student, or anyone in need of translation
                solutions, we're here to ensure that language is never a barrier
                to your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
