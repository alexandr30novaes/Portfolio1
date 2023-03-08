import GithubNetworks from "./GithubNetworks";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";

import Avatar from "../img/eu.jpg";




const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Alexandre Novaes" />
        <p className="title">Desenvolvedor Full Stack</p>
        <GithubNetworks />
        <SocialNetworks />
        <InformationContainer />
        
        <a href="https://docs.google.com/uc?export=download&id=18yuNffSIKr_2cWTxIHfImFWhWA9wdJ2q" className="btn"> Curriculum download</a>

    </aside>
    
};

export default Sidebar;