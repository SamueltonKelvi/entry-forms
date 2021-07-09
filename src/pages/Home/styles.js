import styled from 'styled-components';
import Colors from '../../styles/color';

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .col-header, .card, .card-body{
        display: flex;
    }
    .col-header {
        padding: 5%5%;
    }
    .card{
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 50%;
        border: none;
        box-shadow: none;
    }
    .card-body{ 
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;

        .card-sub-title{
            font-size: 16px;
            color: ${Colors.cls_orange};
            margin: 15px auto;
            text-align: left;
            width: 100%;
        }
        .card-title{
            color: ${Colors.cls_blue};
            font-size: 30px;
            font-weight: bold;
        }
        p{
            font-size: 16px;
            line-height: 25px;
            width: 100%;
        }
        .card-button{
            background-color: ${Colors.cls_gray};
            padding: 10px;
            border-radius: 10px;
            transition: all 0.2s;
            box-shadow: none;
            border: none;
            font-size: 14px;
            font-weight: bold;
            color: ${Colors.cls_black};
            margin: 10px 0px 0px 0px;
        }
        .card-button:hover{
            opacity: 0.8;
        }
    }
`;
export const NavBorderTop = styled.div`
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: ${Colors.cls_black};
`;