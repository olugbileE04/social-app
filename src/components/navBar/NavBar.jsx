import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from "react-router-dom";
import { Logout } from "../logout/Logout";





export default function NavBar() {
  return (
    <>
    <div className="navBar">
        <div className="left">
          <Link to= "/" style={{textDecoration:"none"}}>
          <span>LaraSocial..</span>

          
          </Link>
          

          <HomeOutlinedIcon/>
          <DarkModeOutlinedIcon/>
          <GridViewOutlinedIcon/>
        </div>
        <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="search..."/>
        </div>
        <div className="right">
            <PersonOutlineOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
           <div className="user">
            <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <Link  to="/profile/:id"  style={{textDecoration:"none"}}>
            <span>jane Doe</span>
            </Link>
            </div>
            <Link to="/login">
            <Logout/>
            </Link>
           </div>

    
    </div>

    </>
  )
}
