import React from "react"
import Sidebar from "./Sidebar.js";
import MainContainer from "./MainContainer.js";
import WatchPage from "./WatchPage.js";
import { Outlet } from "react-router-dom";

const Body=()=>{
return <div className="flex">
<Sidebar/>
<Outlet/>

</div>
};
export default Body;