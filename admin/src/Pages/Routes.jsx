import * as React from "react";
import {  Route, Routes} from "react-router-dom";

import Main from "../Layout/Main";
import Dashboard from "./Dashboard";
import Cars from "./Cars";
import Users from "./Users";
import Login from "./Login";
import SuccessStory from "./SuccessStory";
import Options from "./Options";
import Banner from "./Banner";


export const Router=()=>{
    return(
        <>
        <Routes>
       <Route path="/" element={<Login/>} ></Route>
        <Route  path="dashboard" element={<Main />}  >
            <Route path="home" element={<Dashboard />} />
            <Route path="cars" element={<Cars />} />
            <Route path="successStory" element={<SuccessStory />} />
            <Route path="users" element={<Users />} />
            <Route path="options" element={<Options />} />
            <Route path="banner" element={<Banner />} />
        </Route>
 
    </Routes>
        
        </>
    )
}
