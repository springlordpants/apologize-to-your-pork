import styled from 'styled-components';


const MenuPos = styled.div`
    position: relative;
    top: 60px;
    left: 10px;
`;

const Body = styled.div`
    padding: 25px;
    justify-content: center;
`;

const TitleWrapper = styled.div`
    padding: 1px;
    margin: 10px 0;
    border-radius: 25px;
    text-align: center;
    background: #69aefc;
`;

const HeadTitle = styled.h1`
    font-family: 'Luna';
    padding: 25px 25px 0;
    font-size: 50px;
    color: #f6f3e0;
`;

const SecondTitle = styled.h3`
    font-family: 'Luna';
    padding: 0 25px;
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
    font-size: 17px;
`;


export {Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle, PostTitle, Section, SectionBorder};