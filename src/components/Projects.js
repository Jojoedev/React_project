import Api from '../Assets/images/Api.png';
import hospital from '../Assets/images/hospital.png';
import request from '../Assets/images/request.png';
import classes from '../components/Project.module.css';



const Projects = () => {
    return(
        
    <div>
    <h2 className={classes.header}>List of Projects</h2>
         
               
                <div>
                                            
                        <img className={classes.pictures} src={Api} alt="Pictures" />
                        
                        <img className={classes.pictures} src={hospital} alt="Pictures" />
                                                     
                        <img className={classes.pictures}src={request} alt="Pictures" />
                        
                     <img className={classes.pictures} src={require("../Assets/images/hospital.png") } alt="pix" /> 
              </div>
</div>
    );
}

export default Projects;