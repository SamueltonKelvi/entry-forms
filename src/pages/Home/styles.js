import styled from 'styled-components';
import Colors from '../../styles/color';

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .col-header, .col-footer, .card, .card-body, .card-footer{
        display: flex;
    }
    .col-header {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5%5%;
        width: 100%;
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
    .figure{

    }
    .col-footer{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .card-footer{
        flex-direction: row;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: auto;
        background-color: ${Colors.cls_blue};
        border-radius: 20px;
        margin-bottom: 20px;

        .card-header{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
            background-color: transparent;
            box-shadow: none;
            border: none;
        }
        .card-img{
            width: 50%;
            height: auto;
            resize: content;
        }
        .card-title{
            font-size: 30px;
            font-weight: bold;
            color: ${Colors.cls_white};
            width: 100%;
        }
        .card-content{
            display: flex;
            flex-direction: column;
        }
        .card-body{
            display: flex;
            flex-direction: row;
            width: 100%;
        }
        ul{
            display: flex;
            width: 50%;
            flex-direction: column;
        }
        li{
        }
        a{
            font-size: 14px;
            text-decoration: none;
            cursor: pointer;
            color: ${Colors.cls_white};
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