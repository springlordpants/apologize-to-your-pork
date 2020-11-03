import styled from 'styled-components';

const MenuPos = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`;

const Body = styled.div`
    display: flex;
    justify-content: center;
    background: #69aefc;
`;

const TitleWrapper = styled.div`
    text-align: center;
`;

const HeadTitle = styled.h1`
    font-family: 'Luna';
    font-size: 50px;
    color: #f6f3e0;
`;

const SecondTitle = styled.h1`
    font-family: 'Luna';
    font-size: 25px;
    color: #f6f3e0;
`;


export {Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle};