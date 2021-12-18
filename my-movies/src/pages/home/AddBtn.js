import React, { useState } from 'react';
import { Button } from 'antd';
import MovieModal from '../../components/Modal';

function AddBtn() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      <MovieModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
}

export default AddBtn;
