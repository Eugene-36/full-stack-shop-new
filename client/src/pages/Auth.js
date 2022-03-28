import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Button, Row } from 'react-bootstrap';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log('location', location);
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control className='mt-3' placeholder='Введите ваш email' />
          <Form.Control className='mt-3' placeholder='Введите пароль' />

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
            <Button variant={'outline-success'}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;