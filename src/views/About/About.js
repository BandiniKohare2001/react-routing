import "./About.css";
import Navbar from "../../component/Navbar/Navbar";
import Button from "../../component/Button/Button";

export default function About(){
    return(
        <div className="container">
            <Navbar />
            <h1>About </h1>
            <Button text="Back to home page"/>
            <Button text="Register"/>
          <Button text="Read more"/>
            </div>
    )
}