import React from 'react';
import 'antd/dist/antd.css';
import { Input, Select, Row, Menu, Button, Dropdown } from 'antd';
import './Searchbar.css';

function Searchbar({ onSearch, filterGanre, sort }) {
  const { Search } = Input;
  const { Option } = Select;

  const menu = (
    <Menu>
      <Menu.Item key="1">title</Menu.Item>
      <Menu.Item key="2">year</Menu.Item>
      <Menu.Item key="3">star</Menu.Item>
    </Menu>
  );

  return (
    <Row>
      <Search
        placeholder="Search any movies"
        allowClear
        onSearch={onSearch}
        style={{ width: '100%' }}
        size="large"
      />

      <Select
        defaultValue="Genre"
        style={{ width: '12%' }}
        size="large"
        onChange={filterGanre}
      >
        <Option value="Action">Action</Option>
        <Option value="Drama">Drama</Option>
        <Option value="Documentary">Documentary</Option>
      </Select>

      <Select
        defaultValue="Sort"
        style={{ width: '12%' }}
        size="large"
        onChange={sort}
      >
        <Option value="title">title</Option>
        <Option value="year">year</Option>
        <Option value="star">star</Option>
      </Select>

      {/* <Dropdown overlay={menu} placement="bottomCenter">
        <Button size="large">Sort</Button>
      </Dropdown> */}
    </Row>
  );
}

export default Searchbar;
