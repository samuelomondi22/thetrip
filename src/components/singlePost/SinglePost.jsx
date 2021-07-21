import "./singlePost.css";
import DateTime from '../date/DateTime.js';
import Idaho from '../../images/WelcomeToIdaho.jpeg';
import Oregon from '../../images/WelcomeToOregon (1).jpeg';
import GameNight from '../../images/GameNight.jpeg';
import BabaSteve from '../../images/BabaSteve.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={GameNight}
          alt=""
        />
        <h1 className="singlePostTitle">
         The Journey Begins.....
          {/* <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div> */}
        </h1>
        <div className="singlePostInfo">
          {/* <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span> */}
          <span><DateTime/></span>
        </div>
        <p className="singlePostDesc">
          This is the start of an amazing trip. Our first adventure is a 400mile drive to Idaho. On our journey within Washington State we were to pass some amazing places.
          <br/>
          One of the places was the Colombia and Snake rivers. We were able to see how this rivers has provided life to some of the driest places. What they've done is take water from the rivers and used it to irrigate the lands. Due to this most of the places appear green as ever in a hot area giving meaning to rose in the desert.
          <br/>
          The  next interesting place we passed by was the Hanford Site. Hanford Site was established in 1943 and the plutonium manufactured in this place was used for the building of the first nuclear bomb that was detonated at Nagasaki, Japan. 
        </p>
        {/* <img src={Idaho}/> */}
      </div>
    </div>
  );
}
