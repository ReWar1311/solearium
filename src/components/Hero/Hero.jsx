import "./Hero.css";
import InfoCard from "../InfoCard/InfoCard";

const Hero = () => {
    return (
        <div className="hero diagonal-split">
        <div className="hero-top">
        <div className="hero-text">
            <h1 className="hero-title">From Pressure Maps, To Health Gaps</h1>
            <p className="hero-description">Over 80 million Indians are living with diabetes, facing serious risks like foot ulcers, mobility loss, and even amputation. At Sole-Arium, we’re working to change that.

Our smart, affordable insole solution detects early pressure changes, helping to prevent complications before they arise. Whether you’re managing diabetes or supporting someone who is, Sole-Arium keeps you moving with confidence.

Stay protected. Stay independent. Stay one step ahead.
</p>
            <button className="hero-button btn">See Demo</button>
        </div>
        <div className="hero-image">
            <img src="./login_soles.png" ></img>
        </div>
        </div>
        <div className="hero-bottom">
            <InfoCard
                icon={<i className="fas fa-shield-halved"></i>}
                title="Prevention"
                description="Skip the surgeries. Dodge the costs.
With Sole-Arium, prevention takes the lead. Our smart insole helps you stay ahead of complications—painlessly and affordably—so you can live life on your own terms.
."
                className="info-card-comfort"
            />
            <InfoCard
                icon={<i className="fas fa-user-secret"></i>}
                title="Detection"
                description="What you can’t see can hurt you.
Sole-Arium bridges the silent gaps in diagnosis with real-time, remote monitoring. Detect early signs before they become serious—and step confidently into better health."
                className="info-card-quality"
            />
            <InfoCard
                icon={<i className="fas fa-user-check"></i>}
                title="Empowerment"
                description="Your health, always in hand.
From foot pressure trends to instant alerts, our intuitive app keeps you connected and in control. Simple visuals. Smart insights. Doctor access—all at your fingertips."
                className="info-card-affordability"
            />
        </div>
        </div>
    );
}

export default Hero;