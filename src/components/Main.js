import React from 'react';
import HornedBeasts from './HorndBeast';
import data from '../data.json';


class Main extends React.Component{
render(){

 // <HornedBeasts/> its object (child class) from HorndBeast component ,,,attribute lazm inside carly praces

// let myArray= hornedBeastsArray.map((elements)=> {
//    return elements
// });
// console.log(myArray);

    return(
        <main>

{
    data.map((elements) =>{
       return <HornedBeasts title= {elements.title} imgUrl={elements.imgUrl} description={elements.description} />
    })
}
            {/* <HornedBeasts/> */}

           {/* <HornedBeasts title="Rhino Family" imgUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" 
           description=  "Mother (or father) rhino with two babies"/>

           <HornedBeasts title={'Unicorn Head'} imgUrl={"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"}
           description={"Someone wearing a creepy unicorn head mask"}/> */}

{/*           
<HornedBeasts title={this.pr.title}  imgUrl={this.state.imgUrl}
              description= {this.state.description}/> */}
            
        </main>

    )
}
}
export default Main;