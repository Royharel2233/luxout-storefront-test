import React from 'react';
import './newsLetterSubscriptionMain.scss';
import './css/bootstrap.css';
import './css/style.css';



function NewsLetterSubscriptionMain() {
    return (
      <section id="newsletter">
           <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="main_title">
                    Sign Up for Our Newsletter<br />
                    Be the First to Receive Exclusive Offers
                  </h2>
                  <div className="email_subscription">
                    <input type="email" placeholder="Your Email Address" />
                    <button className="btn_subscription" type="submit">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
        </section>
        )
    };
export default NewsLetterSubscriptionMain;