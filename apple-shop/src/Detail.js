import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Detail(props) {
  const history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://www.moolihai.com/wp-content/uploads/2020/05/Blueberry.png"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.fruitData[0].title}</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-info"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
