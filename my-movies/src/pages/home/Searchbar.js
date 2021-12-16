import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, Select, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Searchbar({ onSearch }) {
  const handleSearch = value => {
    const inputValue = value.target.value;
    onSearch(inputValue);
  };

  // const onClick = value => {
  //   handleSearch(value);
  // };

  const { Option } = Select;

  return (
    <div>
      <Input.Group compact>
        <Select defaultValue="Genre" style={{ width: '12%' }}>
          <Option value="Action">Action</Option>
          <Option value="Comedy">Comedy</Option>
          <Option value="Documentary">Documentary</Option>
          <Option value="Horror">Horror</Option>
        </Select>
        <Input
          style={{ width: '50%' }}
          placeholder="Search..."
          onPressEnter={handleSearch}
          type="search"
        />
      </Input.Group>
      {/* <Tooltip title="search">
        <Button
          shape="circle"
          icon={<SearchOutlined />}
          type="submit"
          onClick={onClick}
        />
      </Tooltip> */}
    </div>
  );
}

export default Searchbar;
