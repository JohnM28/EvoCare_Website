import Card from "./Card";
const Service = () => {
    const D= [{id:1,source:"gallery_05.jpg",title:"Protection Film",url:'/protectionfilm'},{id:2,source:"gallery_05.jpg",title:"Dipping",url:'/dipping'},{id:3,source:"image_02-1.jpg",title:"Polish",url:'/polish'},{id:4,source:"image_01-1.jpg",title:"Nanoceramic",url:'/nano'},{id:5,source:"gallery_05.jpg",title:"Car Care",url:"/car"},{id:6,source:"gallery_05.jpg",title:"Window Film",url:"/windowfilm"}]

    // const D = [{sou"gallery_05.jpg","gallery_05.jpg","image_02-1.jpg","image_01-1.jpg","gallery_05.jpg","gallery_05.jpg"]

    return ( 
    <div className=" mb-5 p-4 text-center" id ='services'>
<div className="mb-5 ">
        <h3>
        Our Services
        </h3>
        <hr className="hr"/>
        <p className="font">Lorem ipsum dolor sit amet</p>
        </div>
        
<div className="cont-m">
        <div className="row ">

            {D.map((data)=>{
                return(

                    <Card data = {data}/>
                


                )
            })}
            

        </div>
        </div>

    </div>
    
    
    
    
    
     );
}
 
export default Service;