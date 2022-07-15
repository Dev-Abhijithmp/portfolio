import './main.css'
import { Link } from 'react-router-dom';
const  NavBaritem =({title,path="/"})=>{
       

    return(<button  className="text-white"><Link to={path} >{title}</Link></button>);
}
export default NavBaritem