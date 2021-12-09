/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

const Box = styled.div`
  padding: 30px;
`;

const Content = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: ${props => props.color};
`;

export default function Detail(props) {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log(display);
      setDisplay(false);
    }, 2000);
  });

  const history = useHistory();
  const { id } = useParams();
  const selectedFruit = props.fruitData.find(f => f.id === +id);

  return (
    <div className="container">
      <Box className="box">
        <Content color={'black'}>Detail</Content>
      </Box>

      <div className="my-alert" show={display}>
        <p>Hurry up! Stock is running out!</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://www.moolihai.com/wp-content/uploads/2020/05/Blueberry.png"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{selectedFruit.title}</h4>
          <p>{selectedFruit.content}</p>
          <p>{selectedFruit.price}</p>
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
