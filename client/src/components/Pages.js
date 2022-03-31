import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import Pagination from 'react-bootstrap/Pagination';

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  //.replaceAll('(current)', '')
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  console.log('pages', pages);
  return (
    <Pagination className='mt-5'>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={device.page === page}
          onClick={() => device.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;