import Login from "./Login";
import { useState } from "react";

const [token, setToken] = useState('')

const Logout = () => {
        setToken('')
        localStorage.window.removeItem('token')
  
}
export default Logout;