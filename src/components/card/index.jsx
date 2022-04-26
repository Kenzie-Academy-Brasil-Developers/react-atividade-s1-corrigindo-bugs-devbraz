import "./style.css";

function Card({actual}) {

  return(
   
    <img src={actual.image} alt={actual.code} className="card" />
   
  )

};

export default Card;
