import styled from "styled-components"

const Overlay = styled.div`
    background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 715px;
    background: #03122F;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    height: auto;
    width: 70%;
    padding: 30px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .button-x {
        width: 100%;
        height: 52px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 30px;
        background-color: transparent;
        border: none;
    }
    form {
        box-sizing: border-box;
    }
`

const Title = styled.h1`
    text-transform: uppercase;
    font-weight: 900;
    font-size: 60px;
    line-height: 70px;
    width: 575px;
    height: 40px;
    color: #2271D1;
    text-align: center;
    margin-bottom: 50px;
    @media screen and (max-width: 580px) {
        width: 100%;
        font-size: 36px;
        line-height: 48px;
    }
`

export {Overlay, DialogEstilizado, Title}