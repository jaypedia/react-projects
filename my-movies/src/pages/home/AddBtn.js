import React, { useState } from 'react';
import { Button } from 'antd';
import MovieModal from '../../components/Modal';

function AddBtn() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
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
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </>
  );
}

export default AddBtn;
