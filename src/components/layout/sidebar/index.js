import Styled from 'styled-components';

export const Sidebar = Styled('div')`
    padding: 20px 10px;
    width: 150px;
    background-color: #000;
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            margin-bottom: 10px;
            &:last-child{
                margin-bottom: 0;
            }
            &:hover{
                a{
                    color: #64695D
                }
                svg{
                    color: #64695D
                }
            }
            &:.active{
                a{
                    color: #64695D
                }
                svg{
                    color: #64695D
                }
            }
            svg{
                color: #fff;
                transition: .2s all ease;
                font-size: 20px;
            }
            a{
                text-decoration: none;
                color: #fff;
                transition: .2s all ease;
                margin-left: 5px;
                font-size: 16px;
            }
        }
        
    }
`;