import React from 'react';
import 'antd/dist/antd.css';
import { Input, Select, Row } from 'antd';
import './Searchbar.css';

function Searchbar({ onSearch }) {
  const handleSearch = value => onSearch(value);
  const { Search } = Input;
  const { Option } = Select;

  return (
    <Row>
      <Search
        placeholder="Search any movies"
        allowClear
        onSearch={handleSearch}
        style={{ width: '100%' }}
        size="large"
      />

      <Select defaultValue="Genre" style={{ width: '12%' }} size="large">
        <Option value="Action">Action</Option>
        <Option value="Comedy">Comedy</Option>
        <Option value="Documentary">Documentary</Option>
        <Option value="Horror">Horror</Option>
      </Select>

      <Select defaultValue="Sort" style={{ width: '12%' }} size="large">
        <Option value="title">title</Option>
        <Option value="year">year</Option>
        <Option value="star">star</Option>
      </Select>
    </Row>
  );
}

export default Searchbar;
