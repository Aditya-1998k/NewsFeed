import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <h3 className="navbar-brand" style={{color:"white"}}>NEWSFEED</h3>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/news">Feed</Link>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/form" className="btn btn-outline-success" type="submit">Create Post</Link></li>
                <li className="nav-item"><Link to="/contact" className="btn btn-outline-success" type="submit">Contact Us</Link></li>
            </ul>
        </form>
    </div>
  </div>
</nav>
        </>
    )
}

export default NavBar;