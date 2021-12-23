import React from 'react';
import 'antd/dist/antd.css';
import { Input, Select, Row, Col, Button, Form } from 'antd';
import './Searchbar.css';
import { ReloadOutlined } from '@ant-design/icons';

function Searchbar({ onSearch, filterGanre, sort, resetStates }) {
  const { Search } = Input;
  const { Option } = Select;

  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
    resetStates();
  };

  return (
    <Form form={form} className="searchbar-form">
      <Form.Item name="search">
        <Search
          placeholder="Search any movies"
          onSearch={onSearch}
          size="large"
        />
      </Form.Item>
      <Form.Item name="ganre">
        <Select defaultValue="Ganre" size="large" onChange={filterGanre}>
          <Option value="Action">Action</Option>
          <Option value="Drama">Drama</Option>
          <Option value="Documentary">Documentary</Option>
        </Select>
      </Form.Item>
      <Form.Item name="sort">
        <Select defaultValue="Sort" size="large" onChange={sort}>
          <Option value="title">title</Option>
          <Option value="year">year</Option>
          <Option value="rating">star</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button className="reload" size="large" onClick={handleReset}>
          <ReloadOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Searchbar;
