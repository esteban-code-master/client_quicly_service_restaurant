import React from "react"
import Navbar from "../component/navbar"
import Toollbar from "../component/toollbar/toolbar"

const Template = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            { children }
            <Toollbar />
        </React.Fragment>
    )
}

export default Template