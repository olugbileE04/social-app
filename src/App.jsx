import { Login } from "./pages/login/Login";


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register/Register";
import NavBar from "./components/navBar/NavBar";
import { LeftBar } from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import { Profile } from "./pages/profile/Profile";
import { Home } from "./pages/home/Home";
import "./style.scss"

function App() {
  const currentUser =false;
  const Layout =()=>{
    return(
      <div className="theme-light">
        <NavBar/>
        <div style={{display:"flex"}}>
<LeftBar/>
<div style={{flex:"6"}}>
<Outlet/>
</div>

<RightBar/>

        </div>
      </div>
    )
  };
  const ProtectedRoute =({children})=>{
    if(!currentUser){
      return children
    }
  }

  const router = createBrowserRouter([
 
    {
      path: "/",
      element: <ProtectedRoute><Layout/> </ProtectedRoute>,
      children:[{
        path: "/",
        element: <Home/>
      },
      {
        path: "/profile/:id",
        element: <Profile/>
      }
    ]
    },

    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);


  return <div>
   
   <RouterProvider router={router} />
  </div>;
}

export default App;
