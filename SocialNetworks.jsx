import { FaLinkedinIn } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> }
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href="https://www.linkedin.com/in/alexandre-novaes-09b454213/" className="social-btn" id={network.linkedin} key={network.linkedin}>
                    {network.icon}
                </a>
                
            ))};
            
        </section>
        
    );
    
};

export default SocialNetworks;