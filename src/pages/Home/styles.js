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
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        
        h4, p{
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            color: ${Colors.cls_black};
        }
        p{
            font-size: 16px;
        }
        .content-left{
            width: 120px;
            height: 20%;
            display: block;
            position: absolute;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            background-color: ${Colors.cls_white};
            z-index: 1000; 
            padding: 10px;
            right: 25%;   
            border-radius: 50% 0% 0%;
            text-align: center;
        }
        .content-right{
            border-radius: 50% 0% 0%;
            text-align: center;
            height: 20%;
            width: 120px;
            display: block;
            position: absolute; 
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            background-color: ${Colors.cls_white};
            z-index: 1000;
            padding: 10px;
            right: 2%;
            top: 15%;           
        }
    }
    .col-footer{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 5%5%;
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
            flex-direction: row;
        }
        .card-body{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        ul{
            display: flex;
            width: 50%;
            flex-direction: column;
            list-style: none;
        }
        li{
            display: flex;
            align-items: center;
            flex-direction: row;
        }
        hr{
            width: 10px;
            border: 2px solid ${Colors.cls_black};
            margin: 0px 5px;
            border-radius: 10px;
        }
        a{
            font-size: 14px;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s;
            color: ${Colors.cls_white};
        }
        a:hover{
            color: ${Colors.cls_orange};
        }
    }

    @media (max-width: 700px){
        .col-header {
            flex-direction: column;
            padding: 2%;
        }
        .card{
            width: 100%;
        }
        .card-footer{
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            .card-title{
                text-align: center;
            }
            .card-content{
                text-align: center;
                flex-direction: column;
            }
            ul{
                width: 100%;
            }
        }
        .figure{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .content-left{
                top: 80%;
                right: 60%;
                height: 14%;
            }
            .content-right{
                top: 80%;
                right: 20%;
                height: 14%;
            }
        }
    }
`;
export const NavBorderTop = styled.div`
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: 5px;
    width: 95%;
    background-color: ${Colors.cls_black};
    margin: 20px auto;
`;