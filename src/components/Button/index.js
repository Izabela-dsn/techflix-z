/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    background: var(--black);
    padding: 16px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid var(--white);
    text-decoration: none;

    transition: opacity .3s;
    &:hover,
    &:focus{
        opacity: .5
    }

    @media(max-width:800px){
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: var(--black);
        color: var(--primary);
        
        outline: 0;
        text-align: center;
        border-radius:0;
    }

`;
export default Button;
