
import React from 'react';
import HornedBeasts from './HorndBeast';
import data from '../data.json';
import Row from 'react-bootstrap/Row';


class Main extends React.Component{

render(){
    return(
        <main>
              <Row xs={1} md={4} className="g-4">
{
    // we dont have to save it varaible, cuz return ma lazm a3rf jwaha variable, 
    data.map((elements) =>{
       return <div>
           <HornedBeasts  title= {elements.title}
         imgUrl={elements.imgUrl} 
         description={elements.description}
         />

    </div>
        })
        
}
        </Row>
            
        </main>

    )
 }
}
export default Main;
