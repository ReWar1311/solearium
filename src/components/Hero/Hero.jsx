import "./Hero.css";
import InfoCard from "../InfoCard/InfoCard";

const Hero = () => {
    return (
        <div className="hero diagonal-split">
        <div className="hero-top">
        <div className="hero-text">
            <h1 className="hero-title">Welcome to Sole-Arium</h1>
            <p className="hero-description">In India, Diabetes causes 3.5 minutes of limb loss, affecting over 80 million people. Over 17.5% of elderly suffer from diabetes, like sarcopenia and with osteoporosis affecting 60 million people, increasing the risk of disability and foot ulcers.
At Sole - Arium , we focus on transforming people the way which manages diabetes with their health. Our aim is to help severe outcomes and support individuals. With Sole - arium it is designed to be affordable and ensuring proactive and life changing care . It  prevents complications,  supporting you to live a healthier, happier life .</p>
            <button className="hero-button btn">See Demo</button>
        </div>
        <div className="hero-image">
            <img src="./login_soles.png" ></img>
        </div>
        </div>
        <div className="hero-bottom">
            <InfoCard
                icon={<i className="fas fa-shoe-prints"></i>}
                title="Comfort"
                description="Many traditional treatments are not only expensive but it involves painful surgeries to trauma with dealing health issues. With Sole-arium , you can focus only on prevention which allow you to live with fullest with reducing risks and expenses , also embracing proactive and compassionate approach.
."
                className="info-card-comfort"
            />
            <InfoCard
                icon={<i className="fas fa-star"></i>}
                title="Quality"
                description="Crafted with the finest materials for lasting durability."
                className="info-card-quality"
            />
            <InfoCard
                icon={<i className="fas fa-dollar-sign"></i>}
                title="Affordability"
                description="Stylish footwear that won't break the bank."
                className="info-card-affordability"
            />
        </div>
        </div>
    );
}

export default Hero;