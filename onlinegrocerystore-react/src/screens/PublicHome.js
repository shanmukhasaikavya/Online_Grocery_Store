import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

const PublicHome = () => {
  return (
    <Container>
      <Row>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={require("../images/Banner1.png")}
              alt="First slide"
              style={{height:"400px"}}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={require("../images/Banner2.png")}
              alt="Second slide"
              style={{height:"400px"}}
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={require("../images/Banner3.png")}
              alt="Third slide"
              style={{height:"400px"}}
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <img
          className="d-block w-100 h-20 image-fluid"
          src={require("../images/image.png")}
          alt="banner"
        />
      </Row>
      <Row>
        <CardGroup>
          <Card>
            <Card.Img style={{height:"200px"}} variant="top" src={require("../images/offer1.png")}/>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img style={{height:"200px"}} variant="top" src={require("../images/offer2.png")} />
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img style={{height:"200px"}} variant="top" src={require("../images/offer3.png")} />
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
};

export default PublicHome;
