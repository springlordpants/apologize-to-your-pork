import styled from "styled-components"

const Body = styled.body`
  margin: 0;
  padding: 0;
  justify-content: center;
`

const Background = styled.div`
  background-image: url("/../public/imgs/wild-sea.png");
  background-repeat: repeat;
  position: fixed;
  z-index: -1;
`

const MenuPos = styled.div`
  position: relative;
  top: 60px;
  left: 10px;
`

const TitleWrapper = styled.div`
  padding: 1px;
  margin: 0 0 -20px;
  border-radius: 25px;
  text-align: center;
  background: #69aefc;
`

const HeadTitle = styled.h1`
  font-family: "Luna";
  padding: 25px 25px 0;
  font-size: 50px;
  @media (max-width: 500px) {
    font-size: 30px;
  }
  color: #f6f3e0;
`

const SecondTitle = styled.h3`
  font-family: "Luna";
  padding: 0 25px;
  font-size: 25px;
  @media (max-width: 500px) {
    font-size: 15px;
  }
  color: #f6f3e0;
`

const PostTitle = styled.h5`
  font-family: "Luna";
  color: #ffc85b;
  margin: 20px 50px 10px;
  cursor: pointer;
`

const LinkTitle = styled.a`
  a:link {
    text-decoration: none;
    color: #ffc85b;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  a:active {
    color: #ffc85b;
  }
`

const SectionBorder = styled.div`
  margin: 50px 0;
  padding: 1px 10px 10px;
  background: #eb3041;
  border-radius: 25px;
`

const Section = styled.div`
  padding: 25px 50px;
  background: white;
  border-radius: 25px;
  font-size: 17px;
  font-family: "Itim";
`

export {
  Body,
  TitleWrapper,
  MenuPos,
  HeadTitle,
  SecondTitle,
  PostTitle,
  LinkTitle,
  Section,
  SectionBorder,
  Background,
}
