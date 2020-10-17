import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import Data from './Data';
import "./index.css";

ReactDOM.render(
<>

<h1 className="start"> List of Top 6 Netflix Series in 2020 </h1>
{Data.map(function play(value){
   return(
   <Box 
   imgsrc={value.imgsrc}
   title={value.title}
   sename={value.sename}
   link={value.link}
    />
   );
}
)}
</>
,document.getElementById('root'));

