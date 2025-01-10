import "./Navigation.css"
import { link } from "react-router-dom"


const Navigation = () => {
  return (
    <nav>
        <div>
            <img src="./images/logo.png" alt="logo" />
        </div>

        <ul>
            <li>
            <link to = "/Products">Products</link>
            </li>
            <li>
              <link to = "/Orders">Orders</link>
            </li>
            <li>
              <link to = "/Register">Register</link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation