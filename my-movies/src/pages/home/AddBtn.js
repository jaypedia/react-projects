import React, { useState } from 'react';
import { Button } from 'antd';
import MovieModal from '../../components/Modal';

function AddBtn() {
  // Modal과 관련된 코드들은 모두 Modal.js로 옮겨야 할까?
  // 그러면 어떻게 모달을 보여줘야 할까?
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
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
      <MovieModal visible={isModalVisible} onCancel={handleCancel} />
    </>
  );
}

export default AddBtn;
