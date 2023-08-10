import React from "react";
import logo from "../../LOGO.png"
import {AiFillPrinter} from "react-icons/ai"
import {GrUndo} from "react-icons/gr"

const AppBar = () => {

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex items-center justify-center h-60 bg-[#120123] pb-20">
            <div className="flex flex-row items-center justify-center h-16">
                <img src={logo} alt='logo' className="flex-shrink-0 h-full max-h-full mr-2"></img>
            </div>
            <div className="absolute top-0 right-0 cursor-pointer text-xl md:text-5xl text-white pr-20 pt-32 md:pt-14" onClick={handlePrint}>
                <AiFillPrinter />
            </div>
            <div className="absolute top-0 left-0 cursor-pointer text-xl md:text-5xl text-white pl-20 pt-32 md:pt-14">
                <a href="https://8288girl.com">
                    <GrUndo />
                </a>
            </div>
        </div>
    )
}

export default AppBar;