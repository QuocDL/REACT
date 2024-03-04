import { useState } from "react"

export const Header = ()=>{
    const [isActive, setActive] = useState(false)
    const openBar = ()=>{
        setActive(!isActive)
        console.log(!isActive)
    }


    return(
       <header>
         <div className="container">
            <div className="header_inner">
                <a href="#">
                    <h2 className="header_title">HotCoffee</h2>
                </a>
                <div>
                    <ul className={isActive ? "nav_header": "nav_header_open"}>
                        <button className="btn_close_res" onClick={openBar}>X</button>
                        <li><a className="nav_item" href="">Home</a></li>
                        <li><a className="nav_item" href="">Article</a></li>
                    </ul>
                    <button onClick={openBar} className={isActive ? "btn_nav": "btn_close"}>
                        <svg viewBox="0 0 100 80" width="20" height="20">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </button>
                </div>
            </div>
         </div>
       </header>
    )
}