import React from "react";
import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import RestaurantList from "../components/RestaurantList";

const index = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="search">
            <InputGroup>
              <Input placeholder="項目名を入力してください"></Input>
              <InputGroupText>探す</InputGroupText>
            </InputGroup>
          </div>
          <RestaurantList />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px; 10px;
            width: 50%;
          }
        `}
      </style>
    </>
  );
};

export default index;
