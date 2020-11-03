import styled from 'styled-components';

const MenuPos = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`;

const Body = styled.div`
    padding: 25px;
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

const SecondTitle = styled.h3`
    font-family: 'Luna';
    font-size: 25px;
    color: #f6f3e0;
`;

const SectionBorder = styled.div`
    padding: 10px;
    background: #dd3c42;
    border-radius: 25px;
`;

const Section = styled.div`
    padding: 25px 50px;
    background: white;
    border-radius: 25px;
`;


export {Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle, Section, SectionBorder};