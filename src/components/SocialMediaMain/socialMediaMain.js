import React from 'react';
import './socialMediaMain.scss';
import './css/bootstrap.css';
import './css/style.css';
import facebook_small from './img/FacebookSmall.svg';
import instagrem_small from './img/instagramsmall.svg';
import pintrest_small from './img/PinterestSmall.svg';
import houzz_small from './img/HouzzSmall.svg';
import youtube_small from './img/YoutubeSmall.svg';


function SocialMediaMain() {
    return (
          <ul className="list-unstyled social_media">
                      <li>Follow Us</li>
                      <li>
                          <a href="#"><img src={facebook_small} className="img-fluid d-block mx-auto" alt="Facebook" /></a>
                      </li>
                      <li>
                          <a href="#"><img src={instagrem_small} className="img-fluid d-block mx-auto" alt="Instagram" /></a>
                      </li>
                      <li>
                          <a href="#"><img src={pintrest_small} className="img-fluid d-block mx-auto" alt="Pinterest" /></a>
                      </li>
                      <li>
                          <a href="#"><img src={houzz_small} className="img-fluid d-block mx-auto" alt="Houzz" /></a>
                      </li>
                      <li>
                          <a href="#"><img src={youtube_small} className="img-fluid d-block mx-auto" alt="Youtube" /></a>
                      </li>
                  </ul>
            )
            };
export default SocialMediaMain;