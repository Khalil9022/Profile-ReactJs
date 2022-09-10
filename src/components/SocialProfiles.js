import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = props => {
    const { link, image } = props.socialProfile // link ke socialProfile.js

    return (
        <span>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }}></img>
            </a>
        </span>
    )
}

const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILES => {
                    return <SocialProfile key={SOCIAL_PROFILES.id} socialProfile={SOCIAL_PROFILES} />
                })
            }
        </div>
    </div>

)

export default SocialProfiles;