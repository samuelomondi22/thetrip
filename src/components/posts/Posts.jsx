import Post from "../post/Post";
import Post2 from "../post/Post2";
import "./posts.css";
import BabaSteve from '../../images/BabaSteve.jpg';
import Oregon from '../../images/WelcomeToOregon (1).jpeg';

export default function Posts() {
  return (
    <div className="posts">
      <Post img src={Oregon} />
      {/* <Post2 img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
      {/* <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
      {/* <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
      {/* <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </div>
  );
}
