import React from 'react';
import 'antd/dist/antd.css';
import { Input, Select, Row, Button } from 'antd';
import './Searchbar.css';
import { ReloadOutlined } from '@ant-design/icons';

function Searchbar({ onSearch, filterGanre, sort, reload }) {
  const { Search } = Input;
  const { Option } = Select;

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
        defaultValue="Ganre"
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
        <Option value="rating">star</Option>
      </Select>
      <Button size="large" onClick={reload}>
        <ReloadOutlined />
      </Button>
    </Row>
  );
}

export default Searchbar;
