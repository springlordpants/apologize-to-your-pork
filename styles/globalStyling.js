import styled from 'styled-components';

const MenuPos = styled.div`
    position: fixed;
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

const PostTitle = styled.h5`
    font-family: 'Luna';
    color: #f3d610;
    padding: 0 50px;
`;


const SectionBorder = styled.div`
    padding: 10px;
    background: #eb3041;
    border-radius: 25px;
`;

const Section = styled.div`
    padding: 25px 50px;
    background: white;
    border-radius: 25px;
`;


export {Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle, PostTitle, Section, SectionBorder};