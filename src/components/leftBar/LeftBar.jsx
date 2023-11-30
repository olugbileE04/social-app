import "./leftBar.scss"
import Friends from "../../assets/5.png"
import Calendar from "../../assets/1.png"
import Clock from "../../assets/3.png"
import Donation from "../../assets/4.png"
import FoodStand from "../../assets/6.png"
import GameController from "../../assets/7.png"
import Meeting from "../../assets/8.png"
import Picture from "../../assets/9.png"
import Send from "../../assets/10.png"
import Chatting from "../../assets/11.png"

export const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
            " alt="" />
            <span>jane Doe</span>
          </div>
          <div className="item">
            <img style={{
              width:"20px",
              height:"20px"
            }} src={Friends} alt="" />
            <span>friends</span>
          </div>

          <div className="item">
            <img style={{
              width:"20px",
              height:"20px",
             
            }} src={Clock} alt="" />
            <span>Memories</span>
          </div>
          <div className="item">
            <img style={{
              width:"20px",
              height:"20px"
            }} src={Calendar} alt="" />
            <span>Events</span>
          </div>
          <hr />
          <span>shortcuts</span>
          <div className="item">
            <img style={{
              width:"20px",
              height:"20px"
            }} src={Donation} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img style={{
              width:"20px",
              height:"20px"
            }} src={FoodStand} alt="" />
            <span>Market Place</span>
          </div>
          <div className="item">
            <img style={{
              width:"20px",
              height:"20px"
            }} src={GameController} alt="" />
            <span>Gaming</span>
          </div>
          <hr />

          <span>Others</span>
          <div className="item">
            <img style={{
              width:"20px",
              height:"20px"

            }} src={Meeting} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img style={{
              width:"20px",
              height:"20px"
            }} src={Picture} alt="" />
            <span>Pictures</span>
          </div>
          <div className="item">
            <img style={{
              width:"20px",
              height:"20px"
            }} src={Send} alt="" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img style={{
              width:"20px",
              height:"20px"
            }} src={Chatting} alt="" />
            <span>Watch</span>
          </div>
        </div>
      </div>
    </div>
  )
}
