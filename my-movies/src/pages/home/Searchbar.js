import React, { useRef } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, Select, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Searchbar() {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };

  const { Option } = Select;

  return (
    <div>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
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
          ref={inputRef}
          onKeyPress={onKeyPress}
          type="search"
        />
      </Input.Group>
      <Tooltip title="search">
        <Button
          shape="circle"
          icon={<SearchOutlined />}
          type="submit"
          onClick={onClick}
        />
      </Tooltip>
    </div>
  );
}

export default Searchbar;
