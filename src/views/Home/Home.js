import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";

import Card from "../../component/Cards/Card";
import Footer from "../../component/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <img className="poster-img" src="https://shutterflywpe.wpenginepowered.com/wp-content/uploads/2018/08/family-and-love.jpg" alt="poster-img"/>
            <h1 className="h1">Bandhe Raho Ristho Ke Dhage Me With Bandini</h1><FontAwesomeIcon icon={faHouse} className="text-danger" />

            <p className="para"> Family is one of the most important, if not the most important thing in our lives. Taking time every day to appreciate your loved ones for all that they do helps us to reconnect as a family. For that reason, we’ve provided a collection of our favorite family quotes and sayings that remind us of the love shared between family members. These family quotes and family sayings are perfect to celebrate your love for your family members. </p>

            <span>

                <Card
                    title="Anniversary"
                    imageUrl="https://shutterflywpe.wpenginepowered.com/wp-content/uploads/2019/01/50th-wedding-anniversary-party-ideas-hero-1058x480.jpg"
                    description="“The minute I heard my first love story I started looking for you, not knowing how blind that was. Lovers don’t finally meet meet somewhere. They’re in each other all along.” " />
                <Card
                    title="Baby Shower"
                    imageUrl="https://shutterflywpe.wpenginepowered.com/wp-content/uploads/2020/07/personalized-baby-gift-hero-1058x480.jpg"
                    description="“Wishing you all the best with the new baby who is not far away now. Please let us know if you need absolutely anything along the way. Very excited for the both of you.”" />


                <Card
                    title="Birthday"
                    imageUrl="https://shutterflywpe.wpenginepowered.com/wp-content/uploads/2019/05/80th-birthday-party-5-1058x480.jpg"
                    description="“A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!”"
                />

                <Card
                    title="Festival"
                    imageUrl="https://shutterflywpe.wpenginepowered.com/wp-content/uploads/2016/12/new-years-eve-party-hero-1058x480.jpg"
                    description="“There’s just a completely different vibe at festivals. Everyone gets to hang out and enjoy their favorite music all day. I really do try and play as many festivals as possible!”"
                />
            </span>
            <div>
            <img src="https://shutterflywpe.wpenginepowered.com/wp-content/uploads/2018/08/family-roots.jpg" width="100%" alt="poster" /></div>


        
            <Footer />
        </div>


    )
}
