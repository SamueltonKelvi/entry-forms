import React from 'react';
import { Main, NavBorderTop } from './styles';
import { Container, Row, Col, Card, Button, Figure, Image } from 'react-bootstrap';
import { GlobalStyled } from '../../styles/global';
import { CustomizedButton, ModalView } from '../../components';
import Banner from '../../assets/banner.png';
import IconFooter from '../../assets/book_lover.svg';

export default function Home() {
  const [show, setShow] = React.useState(false);

  return (
    <Main>
      {show && <ModalView show={show} setShow={setShow} />}
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
                <CustomizedButton onClick={() => setShow(true)} title="Quero fazer minha matrícula" />
                <Button active={false} type="button" variant="null" className="card-button">Outras informações</Button>
              </Card.Body>
            </Card>
            <Figure className="figure">
              <Figure.Image
                width="100%"
                height="auto"
                alt="Banner"
                src={Banner}
              />
              <Figure.Caption>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col xl className="col-footer">
            <Card className="card-footer">
              <Card.Header className="card-header">
                <Image fluid src={IconFooter} className="card-img" />
              </Card.Header>
              <Card.Body className="card-content">
                <Card.Title className="card-title">Cursos Graduação</Card.Title>
                <Card.Text className="card-body">
                  <ul>
                    <a href="#">Administração</a>
                    <a href="#">Ciência da computação</a>
                    <a href="#">Ciências Contábeis</a>
                    <a href="#">Direito</a>
                    <a href="#">Engenharia Civil</a>
                    <a href="#">Engenharia de Produção</a>
                    <a href="#">Pegadogia</a>
                  </ul >
                  <ul>
                    <a href="#">Análise e Desenvolvimento de Sistemas</a>
                    <a href="#">Questão Comercia</a>
                    <a href="#">Gestão de Recursos Homanos</a >
                    <a href="#">Gestão Financeira</a >
                    <a href="#">Logística</a >
                    <a href="#">Processos Gerenciais</a >
                    <a href="#">Redes de Computadores</a >
                  </ul>
                </Card.Text >
              </Card.Body >
            </Card >
          </Col >
        </Row >
      </Container >
    </Main >
  );
}