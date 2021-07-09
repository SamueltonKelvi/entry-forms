import React from 'react';
import { Main, NavBorderTop } from './styles';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { GlobalStyled } from '../../styles/global';
import { CustomizedButton } from '../../components';

export default function Home() {
  return (
    <Main>
      <GlobalStyled />
      <Container fluid>
        <Row>
          <Col sm>
            <NavBorderTop />
          </Col>
        </Row>
        <Row>
          <Col xs className="col-header">
            <Card className="card">
              <Card.Body className="card-body">
                <Card.Subtitle className="card-sub-title">Captação 2021.2</Card.Subtitle>
                <Card.Title classname="card-title">Formas de Ingresso</Card.Title>
                <Card.Text>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </Card.Text>
                <CustomizedButton onClick={() => { }} title="Quero fazer minha matrícula" />
                <Button active={false} type="button" variant="null" className="card-button">Outras informações</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Main>
  );
}