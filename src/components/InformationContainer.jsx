import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import {ImBook, ImBooks} from "react-icons/im";
import {FaBrain} from "react-icons/fa";

import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
    return (
      <section id="information">
        <div className="info-card">
          <AiFillPhone id="phone-icon" />
          <div>
            <h3>Telephone</h3>
            <p>(11) 99491-7685</p>
          </div>
        </div>
        <div className="info-card">
          <AiOutlineMail id="email-icon" />
          <div>
            <h3>Email</h3>
            <p>ale.oliveira00@gmail.com</p>
          </div>
        </div>
        <div className="info-card">
          <AiFillEnvironment id="pin-icon" />
          <div>
            <h3>Location</h3>
            <p>São Paulo / SP</p>
          </div>
        </div>
        <div className="book-card">
          <ImBook id="book-icon" />
          <div>
            <h3>Academic education</h3>
            <h4>System Analysis and Development</h4>
          </div>
        </div>
        <div className="course-card">
          <ImBooks id="course-icon" />
          <div>
            <h3>Course</h3>
            <h4>HTML 5</h4>
            <h4>CSS 3</h4>
            <h4>Sass</h4>
            <h4>JavaScrip</h4>
            <h4>TyperScript</h4>
            <h4>React</h4>
            <h4>Bootstrap</h4>
            <h4>NodeJs</h4>
            <h4>API</h4>
            <h4>Mongodb</h4>
          </div>
        </div>
        <div className="comp-card">
          <FaBrain id="brain-icon" />
          <div>
            <h3>Competence</h3>
            <h4>Proramation Logic</h4>
            <h4>Frontend programming</h4>
            <h4>Backend Programming</h4>
            <h4>Flutter Development</h4>
            <h4>Database</h4>
            <h4>Agile methodology</h4>
          </div>
        </div>
      </section>
    );
  };

  export default InformationContainer;
