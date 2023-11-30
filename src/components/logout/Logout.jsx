import { useNavigate } from "react-router-dom";
import "./logout.scss"
import firebase from '../../configs/firebaseConfig';

export const Logout = () => {

    const navigate = useNavigate(); 


    const handleLogout = async () => {
        try {
          await firebase.auth().signOut();
          alert('Logout successful');
          navigate("/login");
        } catch (error) {
          console.error('Error during logout:', error);
        }
      };

  return (
    <div>
        <button className="logout"   onClick={handleLogout}>Logout</button>
    </div>
  )
}
