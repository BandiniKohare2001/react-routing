import "./Card.css";
import Button from "../Button/Button";

export default function Card({title, imageUrl, description})
{
 return(
    <>
    <div className="card">
    <img src={imageUrl} alt={title} />
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p> </div>
      <div className="read-more-btn">
  <Button text="Show Quotes" /></div>
   
  </div>
  </>





//    <div className="maindiv">
// <div className="card-style">
//  <h3>Dear {name}, </h3>
//  <p className="margin-para">{para}</p>
//  <h3 className="to-style">To. {to} </h3>
// </div></div>
 )
}