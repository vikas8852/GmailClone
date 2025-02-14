//import { useState } from 'react'
import { createBrowserRouter,  RouterProvider,  } from "react-router-dom";
import "./App.css";
import Inbox from "./component/Inbox";

//import Sidebar from "./component/Sidebar";
import Body from "./component/Body";
import Mail from "./component/Mail";
import SentEmail from "./component/SentEmail";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./component/ProtectedRoute";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:(
      <ProtectedRoute>
      <Body />
    </ProtectedRoute>
    ),
    children: [
      //constant component that will need to diplay all time  instead change occure
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>

  },
  {
    path:"/signup",
    element:<Signup/>

  },
]);

function App() {
  return (
    <div className="bg-[#edeff4] h-screen">
   
      <RouterProvider router={appRouter} />
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SentEmail />
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
