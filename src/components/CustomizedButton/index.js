import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Colors from '../../styles/color';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;

    .button{
        box-shadow: none;
        border: none;
        background-color: ${Colors.cls_orange};
        color: ${Colors.cls_white};
        padding: 10px;
        font-size: 14px;
        font-weight: bold;
        transition: all 0.2s;
        border-radius: 10px;
    }
    .button:hover{
        border: none;
        box-shadow: none;
        background-color: ${Colors.cls_orange};
        opacity: 0.8;
    }
`;

export default function CustomizedButton({ onClick, title }) {
    return (
        <Container>
            <Button active={false} type="button" variant="null" className="button" onClick={onClick}>{title}</Button>
        </Container>
    )
}