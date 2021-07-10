import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { CustomizedButton } from '../../components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;

    p{
        font-size: 16px;
        line-height: 25px;
    }

`;

export default function ModalView({ show, setShow }) {
    return (
        <Container>
            <Modal
                centered
                show={show}
                onHide={setShow}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Matrícula</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <CustomizedButton title="Voltar" onClick={() => setShow(false)} />
                </Modal.Footer>
            </Modal>
        </Container>
    )
}