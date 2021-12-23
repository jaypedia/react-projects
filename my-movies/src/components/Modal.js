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

function MovieModal({ title, visible, onCancel, onCreate, movie, onOk }) {
  const [rating, setRating] = useState(0);

  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const [form] = Form.useForm();

  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onCancel}
      getContainer={true}
      okText="Done"
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            if (!movie) {
              onCreate(values);
            } else {
              onOk(values); // Edit Logic
              form.setFieldsValue(values);
            }
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} initialValues={movie}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  message: 'Please input title',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="director"
              label="Director"
              rules={[
                {
                  required: true,
                  message: 'Please input director',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              name="year"
              label="Year"
              rules={[
                {
                  required: true,
                  message: 'Please input year',
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item
              name="rating"
              label="Rating"
              rules={[
                {
                  required: true,
                  message: 'Please input rating',
                },
              ]}
            >
              <Rate
                allowHalf
                value={rating}
                onChange={setRating}
                style={{ fontSize: 20 }}
              />
            </Form.Item>
          </Col>
          <Col span={1}>
            {rating ? <span className="ant-rate-text">{rating * 2}</span> : ''}
          </Col>
        </Row>
        <Form.Item
          name="ganre"
          label="Ganre"
          rules={[
            {
              required: true,
              message: 'Please input ganre',
            },
          ]}
        >
          <Radio.Group>
            <Radio value="Action">Action</Radio>
            <Radio value="Drama">Drama</Radio>
            <Radio value="Documentary">Documentary</Radio>
            <Radio value="Comedy">Comedy</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="description"
          label="description"
          rules={[
            {
              required: true,
              message: 'Please input description',
            },
          ]}
        >
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
