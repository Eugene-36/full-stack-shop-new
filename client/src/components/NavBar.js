import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const navigate = useNavigate();

  console.log('ADMIN_ROUTE', LOGIN_ROUTE);
  const { user } = useContext(Context);
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          Купи Девайс
        </NavLink>
        {user.isAuth ? (
          <Nav className='me-auto' style={{ color: 'white' }}>
            <Button
              onClick={() => navigate(ADMIN_ROUTE)}
              variant={'outline-light'}
            >
              Админ панель
            </Button>

            <Button
              onClick={() => navigate(LOGIN_ROUTE)}
              variant={'outline-light'}
              className='ml-2'
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className='me-auto' style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
