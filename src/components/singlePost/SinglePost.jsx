import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Jack</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlepostDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore possimus, et consequatur commodi autem ut exercitationem maiores, aliquid voluptate adipisci ea vitae minima saepe. Corrupti accusantium beatae assumenda nisi ex.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore possimus, et consequatur commodi autem ut exercitationem maiores, aliquid voluptate adipisci ea vitae minima saepe. Corrupti accusantium beatae assumenda nisi ex.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore possimus, et consequatur commodi autem ut exercitationem maiores, aliquid voluptate adipisci ea vitae minima saepe. Corrupti accusantium beatae assumenda nisi ex.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore possimus, et consequatur commodi autem ut exercitationem maiores, aliquid voluptate adipisci ea vitae minima saepe. Corrupti accusantium beatae assumenda nisi ex.
        </p>
      </div>
    </div>
  );
}
export default SinglePost;
