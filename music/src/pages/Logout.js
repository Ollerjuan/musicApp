import { useState } from "react";

const [token, setToken] = useState('')

const Logout = () => {
        setToken('')
        window.localStorage.value.removeItem(token, '_token')
}
export default Logout;