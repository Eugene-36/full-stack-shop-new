import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Button, Row } from 'react-bootstrap';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { registration, login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import { useNavigate } from 'react-router-dom';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;

      if (isLogin) {
        data = await login(email, password);
        console.log('login', data);
      } else {
        data = await registration(email, password);
        console.log('registration', data);
      }

      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-3'
            placeholder='Введите ваш email'
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-3'
            placeholder='Введите пароль'
            type='password'
          />

          <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink className='pl-2' to={REGISTRATION_ROUTE}>
                  Зарегистрируйтесь
                </NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <NavLink className='pl-2' to={LOGIN_ROUTE}>
                  Войдите
                </NavLink>
              </div>
            )}
            <Button onClick={click} variant={'outline-success'}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
