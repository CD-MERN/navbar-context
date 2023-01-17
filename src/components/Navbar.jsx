import { useContext } from "react"
import NavContext from "../context/NavContext"
const Navbar = () => {

    const {name}  = useContext(NavContext)
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-text">
                        Bienvenido {name}
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar