import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
           <span className="sidebarTitle">About Me</span>
           {/* <img src="https://static.remove.bg/remove-bg-web/5cc729f2c60683544f035949b665ce17223fd2ec/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="" /> */}
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
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
    </div>
  )
}
export default Sidebar;
