import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

export default function Admin() {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className='d-flex flex-column'>
      <Button
        variant={'outline-dark'}
        className='mt-4 p-2'
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant={'outline-dark'}
        className='mt-4 p-2'
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant={'outline-dark'}
        className='mt-4 p-2'
        onClick={() => setDeviceVisible(true)}
      >
        Добавить устройство
      </Button>

      {/* Импортируем и вставляем наши три модальных окна  */}
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
}
