import { FaGithub } from "react-icons/fa";

import "../styles/components/githubnetworks.sass";

const githubNetworks = [ 
    { name: "github", icon: <FaGithub /> }
];

const GithubNetworks = () => {
    return (
        <section id="github-networks">
            {githubNetworks.map((network) => (
                <a href="https://github.com/alexandr30novaes" className="social-btn" id={network.github} key={network.github}>
                    {network.icon}
                </a>
                
            ))};

        </section>
        
    );

};

export default GithubNetworks;