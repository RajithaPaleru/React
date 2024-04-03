function Card(props){
    return(
      <div className='contacts'>
        <h2>{props.name}</h2>
        <img src={props.img} ></img>
        <p>{props.phoneNo}</p>
      </div>
  
    );
  }
  export default Card