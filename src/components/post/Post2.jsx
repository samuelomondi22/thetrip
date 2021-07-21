import { Link } from "react-router-dom";
import "./post.css";
import DateTime from '../date/DateTime.js';

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {/* <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle">
          <Link to="/post/abc/day1" className="link">
            The Journey Begins.....
          </Link>
        </span>
        <hr />
        <span className="postDate"><DateTime/></span>
      </div>
      <p className="postDesc">
        So we get to experience the first day of the trip with us...read more and experience it with us
      </p>
    </div>
  );
}
