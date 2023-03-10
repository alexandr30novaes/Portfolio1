import GithubNetworks from "./GithubNetworks";
import SocialNetworks from "./SocialNetworks";
import WhatsNetworks from "./WhatsNetworks";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";

import Avatar from "../img/eu.jpg";




const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Alexandre Novaes" />
        <p className="title">Desenvolvedor Full Stack</p>
        <SocialNetworks />
        <GithubNetworks />
        <WhatsNetworks />
        <InformationContainer />
        
        <a href="https://docs.google.com/uc?export=download&id=1lbCWnG0rDRIw_8U6-X-F5Yp2Tdzg5anm" className="btn"> Curriculum download</a>

    </aside>
    
};

export default Sidebar;