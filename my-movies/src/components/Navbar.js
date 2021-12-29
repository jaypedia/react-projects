import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Menu } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';

function Navbar() {
  const [current, setCurrent] = useState('my-movies');

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu
      className="navbar"
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{
        backgroundColor: '#c5d2ec',
        height: '70px',
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '70px',
      }}
    >
      <Menu.Item key="logo">
        <Link to="/main">
          <VideoCameraOutlined style={{ fontSize: '25px' }} />
        </Link>
      </Menu.Item>

      <Menu.Item key="my-movies">
        <Link to="/" className="navbar__home">
          My Movies
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
