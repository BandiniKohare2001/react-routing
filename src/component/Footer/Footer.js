import "./Footer.css"


export default function Footer() {
    return (<>
   <div className="footer-main">
        <div className="footer">
            <div>
            <h1>Bandini</h1>
            <p>Bandhe Raho Ristho Ke Dhage Me With Bandini</p></div>
            <div>
           <h2> Quick Links</h2>
           <li className="list-items">Anniversaries</li>
    <li className="list-items">Birthdays</li>
    <li className="list-items">Baby Showers</li> 
    <li className="list-items">Festivals</li></div>

    <div>
           <h2> Contact Us</h2>
<div className="img-text">
           <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" className="icons" alt="email-icon"/>
           bandini@kohare.org<br /></div>
           <div className="img-text">
           <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png" className="icons" alt="call-con"/>
           8459562384<br /></div>
           <div className="img-text">
           <img src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" className="icons" alt="location-icon"/>
           Pune<br /></div>
           
   </div>
  
     </div>
      <hr />
      <p>Made With Love ♥️ By BANDINI</p>
      </div> 
</>
    )
}

