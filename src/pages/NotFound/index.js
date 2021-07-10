import React from 'react';
import { Main } from './styles';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { GlobalStyled } from '../../styles/global';

import NotFoundImage from '../../assets/not_found.svg';

export default function NotFound() {
  return (
    <Main>
      <GlobalStyled />
      <Container fluid>
        <Row>
          <Col xs className="column">
            <Figure className="column">
              <Figure.Image
                width="50%"
                height="auto"
                alt="Not found"
                src={NotFoundImage}
              />
              <Figure.Caption className="column-text">
                Ops, página não encontrada!
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </Main>
  );
}