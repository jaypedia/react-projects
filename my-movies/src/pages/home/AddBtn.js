import React, { useState } from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  Upload,
  Rate,
  Row,
  Col,
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import NewMovieModal from '../../components/Modal';

function AddBtn() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rate, setRate] = useState(0);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      <Button
        className="add-movies"
        size="large"
        style={{
          backgroundColor: '#c5d2ec',
          borderRadius: '20px',
          fontWeight: 'bold',
        }}
        onClick={showModal}
      >
        Add new movie
      </Button>
      {/* <NewMovieModal /> */}
      <Modal
        title="Add New Movie"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item label="Title">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Director">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item label="Year">
              <InputNumber />
            </Form.Item>
            <Form.Item name="rate" label="Rate">
              <span>
                <Rate
                  allowHalf
                  style={{ fontSize: 25 }}
                  value={rate}
                  onChange={setRate}
                />
                {rate ? <span className="ant-rate-text">{rate * 2}</span> : ''}
              </span>
            </Form.Item>
          </Row>
          <Form.Item name="ganre" label="Ganre">
            <Radio.Group>
              <Radio value="Action">Action</Radio>
              <Radio value="Drama">Drama</Radio>
              <Radio value="Documentary">Documentary</Radio>
              <Radio value="Comedy">Comedy</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name={['movie', 'introduction']} label="Introduction">
            <Input.TextArea rows={5} />
          </Form.Item>
          <Form.Item
            name="upload"
            label="poster"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddBtn;
