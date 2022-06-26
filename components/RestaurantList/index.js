import Link from "next/link";
import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Row,
  CardText,
} from "reactstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const query = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`;

const RestaurantList = () => {
  // const { loading, error, data } = useQuery(query);

  return (
    <Row>
      <Col xs="6" sm="4">
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg
            src="http://localhost:1337/uploads/promotion2_85e340bf8f.jpeg"
            top={true}
            style={{ height: 250 }}
          ></CardImg>
          <CardBody>
            <CardTitle>パーソナルトレーニング </CardTitle>
            <CardText>
              パーソナルトレーニングのコースをレベル別で用意しております。
              お客様に合ったコースを選択してください。
            </CardText>
          </CardBody>
          <div className="card-footer">
            <Link
              href="/restaurants?id=62ab3f0a9c2bcf5210d22813"
              as="/restaurants/62ab3f0a9c2bcf5210d22813"
            >
              <a className="btn btn-primary">もっと見る</a>
            </Link>
          </div>
        </Card>
      </Col>
      <Col xs="6" sm="4">
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg
            src="http://localhost:1337/uploads/myprotein_d6050364bb.png"
            top={true}
            style={{ height: 250 }}
          ></CardImg>
          <CardBody>
            <CardTitle>プロテインおすすめ</CardTitle>
            <CardText>
              マイプロテイン・各種サプリのアンバサダーとして活動しており、おすすめ商品・割引対象商品を紹介いたします。
            </CardText>
          </CardBody>
          <div className="card-footer">
            <Link
              href="/restaurants?id=62ab3f0a9c2bcf5210d22813"
              as="/restaurants/62ab3f0a9c2bcf5210d22813"
            >
              <a className="btn btn-primary">もっと見る</a>
            </Link>
          </div>
        </Card>
      </Col>
      <Col xs="6" sm="4">
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg
            src="http://localhost:1337/uploads/event_e1a2d1345b.jpeg"
            top={true}
            style={{ height: 250 }}
          ></CardImg>
          <CardBody>
            <CardTitle>トレーニングイベント</CardTitle>
            <CardText>
              定期的にトレーニングイベントを開催しておりますので、どしどし参加お待ちしております。
            </CardText>
          </CardBody>
          <div className="card-footer">
            <Link
              href="/restaurants?id=62ab3f0a9c2bcf5210d22813"
              as="/restaurants/62ab3f0a9c2bcf5210d22813"
            >
              <a className="btn btn-primary">もっと見る</a>
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default RestaurantList;
