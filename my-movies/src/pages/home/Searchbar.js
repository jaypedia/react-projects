import React from 'react';
import 'antd/dist/antd.css';
import { Input, Select } from 'antd';

function Searchbar({ onSearch }) {
  const handleSearch = value => onSearch(value);
  const { Option } = Select;
  const { Search } = Input;

  return (
    <>
      <Search
        placeholder="Search..."
        allowClear
        onSearch={handleSearch}
        style={{ width: '100%' }}
        size="large"
      />

      <Input.Group compact>
        <Select defaultValue="Genre" style={{ width: '12%' }}>
          <Option value="Action">Action</Option>
          <Option value="Comedy">Comedy</Option>
          <Option value="Documentary">Documentary</Option>
          <Option value="Horror">Horror</Option>
        </Select>
      </Input.Group>
    </>
  );
}

export default Searchbar;
