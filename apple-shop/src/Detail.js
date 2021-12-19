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
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => {
      setDisplay(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [display]);

  const history = useHistory();
  const { id } = useParams();
  const selectedFruit = props.fruitData.find(f => f.id === +id);
  const temp = [...props.inStock];

  return (
    <div className="container">
      <Box className="box">
        <Content color={'black'}>Detail</Content>
      </Box>

      <input
        onChange={e => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
      />

      {display ? (
        <div className="my-alert">
          <p>Hurry up! Stock is running out!</p>
        </div>
      ) : null}

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
          <StockInfo inStock={props.inStock} id={id} />
          <button
            className="btn btn-danger"
            onClick={() => {
              if (temp[id] <= 0) {
                alert('Sold out!');
                return;
              }
              --temp[id];
              props.setInStock(temp);
            }}
          >
            Order
          </button>
          &nbsp;
          <button
            className="btn btn-info"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

function StockInfo({ inStock, id }) {
  return <div>In Stock : {inStock[id]}</div>;
}
