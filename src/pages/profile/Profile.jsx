import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Posts } from "../../posts/Posts";


export const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="cover"/>
        <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profilePic"/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large"/>
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large"/>
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large"/>
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large"/>
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize="large"/>
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>New York</span>

              </div>
              <div className="item">
                <LanguageIcon />
                <span>lara.dev</span>

              </div>
             
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon fontSize="large"/>
            <MoreVertOutlinedIcon fontSize="large"/>
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  )
}
