export default function Card(props){
    console.log(props);
    return (
     <div
     className={
        props.rating ? "Card-Component Card-Rating" : "Card-Bad-Rating"
      }>
        <img src={props.image} alt="" width="155px" />
       
        <div className= "Card-Info"> 
            <h3>{props.country}</h3>
            <h4>{props.name}</h4>
            <p>{props.stars}</p>
            {props.rating ?  <h3 className="Card-Rating" ></h3> : <h3 className="Card-Bad-Rating" > </h3> } 
            <p>{props.price}</p></div>
        
     </div>
    )
}