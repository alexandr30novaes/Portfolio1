import { FaWhatsapp } from "react-icons/fa";

import "../styles/components/whatsnetworks.sass";

const whatsNetworks = [
    {name: "whats", icon: <FaWhatsapp /> }
];

const WhatsNetworks = () => {
    return (
        <section id="whats-networks">
            {whatsNetworks.map((network) => (
                <a href="https://wa.me/5511994917685?text=Alexandre%20Novaes%20De%20Oliveira%20" className="social-btn" id={network.whats} key={network.whats}>
                    {network.icon}
                </a>
                
            ))};
        </section>
    );
};

export default WhatsNetworks;