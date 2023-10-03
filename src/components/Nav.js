import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <nav style={naStyle}>
        <ul style={ulStyle}>
            <li style={liStyle}> <Link to ="/" style={aStyle} className="nav-item">Home</Link> </li>
            <li style={liStyle}> <Link to ="/about-me" style={aStyle} className="nav-item">About Me</Link> </li>
            <li style={liStyle}> <Link to="/projects" style={aStyle} className="nav-item">Projects</Link></li>
        </ul>
    </nav>

    );
    
}
export default Nav;

const naStyle = {
    margin: '0',
    
    backgroundColor: 'teal',
}

const ulStyle = {
    display: 'flex',
    margin: '0',
    border: '0',
    
}

const liStyle = {
    padding: '15px',
    listStyleType : 'none',   
}

const aStyle = {
    textDecoration : 'none',
    color: 'white',
}