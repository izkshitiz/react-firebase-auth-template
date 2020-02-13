import React,{Component} from 'react';
// import firebase from 'firebase';
import classes from './Dashboard.module.css';

class Dashboard extends Component{
    state = {
        text:''
    };

 
render(){
return(

<div className={classes.contentcontainer}>
    <div  className={classes.mainrow}>
        <div className={classes.firstcol}>
            <div>
                <div>
                  <p>Important stuff here !</p>
            </div>
            </div>
        </div>    
        <div>
           {/* <img className={classes.stock_illustration} src={stockillustration} alt="trading illustration"></img> */}     
        </div>
    </div>       
</div>

);
}
}
export default Dashboard;