import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';

import { Container, NavContainer } from './styles';
import { useState } from 'react';


export function Header() {

  const [eventsActive, setEventsActive] = useState(false);
  const [myEventsActive, setMyEventsActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  function handleActiveElement(){
    setEventsActive(false);
    setMyEventsActive(false);
    setProfileActive(false);
  }

  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="Logo Paroquia" />
      </div>
      <NavContainer>
        <Link to='/eventos'>
          <span className={eventsActive ? 'active' : ''} onClick={()=>{
            handleActiveElement();
            setEventsActive(true);
          }}>Eventos Gerais</span>
        </Link>
        <Link to='/'>
          <span className={myEventsActive ? 'active' : ''} onClick={()=>{
            handleActiveElement();
            setMyEventsActive(true);
          }}>
              Meus Eventos
          </span>
        </Link>
        <Link to='/'>
          <span className={profileActive ? 'active' : ''} onClick={()=>{
            handleActiveElement();
            setProfileActive(true);
          }}>
            <AccountCircle />
          </span>
        </Link>
        <Link to='/'>
          <span>
            <Logout />
          </span>
        </Link>
      </NavContainer>
    </Container>
  );
}
