import React from "react";
import './Mail.css'

export default function Mail() {
  return (

    <>
      <div className="mail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mail-content overflow-hidden">
                <div className="mail_main d-flex align-items-center justify-content-between">
                  <div className="content">
                    <h2 className=" text-white mb-10 mb-xs-5 color-white">
                      Get Free Quote
                    </h2>
                    <div className="disk text-white">
                      Perfect solution for your Company
                    </div>
                  </div>
                  <div className="form">
                    <form className="d-flex flex-column flex-lg-row">
                      <div className="personal-info">
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div className="personal-info">
                        <input type="email" placeholder="Your e-mail" />
                      </div>
                      <button type="submit" className="butn btn-sm" style={{
                        border:"3px solid white"
                      }}>
                        Get Quote
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
