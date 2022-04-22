import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDisc">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non placeat, consequatur alias dicta quasi ad voluptates laudantium, sunt molestias asperiores, sequi aut inventore reprehenderit nulla hic vitae debitis laborum quisquam.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non placeat, consequatur alias dicta quasi ad voluptates laudantium, sunt molestias asperiores, sequi aut inventore reprehenderit nulla hic vitae debitis laborum quisquam.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non placeat, consequatur alias dicta quasi ad voluptates laudantium, sunt molestias asperiores, sequi aut inventore reprehenderit nulla hic vitae debitis laborum quisquam.

          </p>
      </div>
    </div>
  );
}
export default Post;
