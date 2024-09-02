import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboardLayout";
import AddDriver from "../components/AddDriver";
import AddMachine from "../components/AddMachine";
import ViewallMachine from "../components/ViewallMachine";
import ViewDriver from "../components/ViewDriver";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children:[
        {
            path:"add-machine",
            element:<AddMachine/>
        },
        {
            path:"view-machine",
            element:<ViewallMachine/>
        },
        {
            path:"add-driver",
            element:<AddDriver/>
        },
        {
            path:"view-driver",
            element:<ViewDriver/>
        }
      ]
    },
  ]);