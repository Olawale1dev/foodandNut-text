import React from "react";
//import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import about from './about.svg'
//import foodread from './foodread.gif';
import Module1 from "./Module1.svg";
import Module2 from "./Module2.svg";
import Module3 from "./Module3.svg";
import Module4 from "./Module4.svg";
import Module5 from "./Module5.svg";
import Module6 from "./Module6.svg";

import './App.css';

//import Table from './Table';


/* <Stack direction="row" spacing={2} className="tableofcontent">
        
      <Button variant="contained" href="http://localhost:3001/TableOfContent" className="tableofcontent">
       ABOUT
      </Button>
    </Stack>*/ 
    /*<Button variant="contained" href="http://localhost:3001/Food" className="tableofcontent">
       CLICK TO READ
      </Button>*/ 



 function HomePage() {
  return (
    
    <div className="GridHome">
    <div className="foodimg">  
    <a href="http://localhost:3000/TableOfContent"><img src={about} alt="about app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module1"><img src={Module1} alt="module1 app" width={100} height={100} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module2"><img src={Module2} alt="module2 app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module3"><img src={Module3} alt="module3 app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module4"><img src={Module4} alt="module4 app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module5"><img src={Module5} alt="module5 app" width={270} height={270} className="img"></img></a>
    </div>
    <div className="foodimg">
    <a href="http://localhost:3000/module6"><img src={Module6} alt="module5 app" width={270} height={270} className="img"></img></a>
    </div>
    <Stack direction="row" spacing={2} className="tableofcontent">
        
      
    </Stack>
        
    </div>
    
  );
}



export default HomePage