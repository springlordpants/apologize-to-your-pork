import styled from "styled-components"

const ContactTitle = styled.h5`
  font-family: "Luna";
  color: #ffc85b;
  margin: 20px 50px 10px;
`

const ContactSection = styled.div`
  padding: 25px 50px;
  background: white;
  border-radius: 25px;
  font-size: 17px;
  font-family: "Itim";
`

const ContactContent = styled.div`
  justify-content: center;
`

const ContactList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-inline-start: 0;
  @media (max-width: 500px) {
    display: block;
  }
`

const ListItem = styled.li`
  a:link {
    text-decoration: none;
    color: #69aefc;
  }
  a:visited {
    text-decoration: none;
    color: #eb3041;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  a:active {
    text-decoration: underline;
    color: #f6f3e0;
  }
  list-style-type: none;
  text-align: center;
`

export { ContactTitle, ContactSection, ContactContent, ContactList, ListItem }
