import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
           <span className="sidebarTitle">About Me</span>
           <img src="https://media.istockphoto.com/photos/big-and-small-picture-id172759822?b=1&k=20&m=172759822&s=170667a&w=0&h=kkmaR2OYuS14rTiEotbzXoBecwnRePNC79Jsgl3M4dY=" alt="" />
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda non obcaecati quae autem, eius, cumque rem pariatur soluta vel quod.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
        </div>
    </div>
  )
}
export default Sidebar;
