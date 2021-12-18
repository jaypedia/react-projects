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
import { UploadOutlined } from '@ant-design/icons';

function MovieModal({ visible, onOk, onCancel }) {
  const [rating, setRating] = useState(0);
  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Modal
      title="Add New Movie"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="director" label="Director">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item name="year" label="Year">
            <InputNumber />
          </Form.Item>
          <Form.Item name="rating" label="Rating">
            <span>
              <Rate
                allowHalf
                style={{ fontSize: 25 }}
                value={rating}
                onChange={setRating}
              />
              {rating ? (
                <span className="ant-rate-text">{rating * 2}</span>
              ) : (
                ''
              )}
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
        <Form.Item name="introduction" label="Introduction">
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
  );
}

export default MovieModal;
