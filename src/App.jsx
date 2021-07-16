import logo from './logo.svg';
import styles from './App.module.scss';
import react from 'react'
import Background from './component/Background';
import HomePage from './component/HomePage';
import AboutMe from './component/AboutMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PortfolioPage from './component/PortfolioPage';
import TechStack from './component/TechStack';
import ContactMe from './component/ContactMe';
import { faHtml5 } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className={styles.app}>
      
      {/* <Background /> */}
      <HomePage />
      <AboutMe />
      <PortfolioPage />
      <TechStack />
      <ContactMe />
     
      
    </div>
  );
}

export default App;
