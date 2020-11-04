import Menu from '../components/menu'
import { Body, TitleWrapper, MenuPos, HeadTitle } from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';
import Container from '@material-ui/core/Container';

export default function Contact() {
  return (
    <Body>
      <GlobalFonts />
      <Container maxWidth="md">
        <MenuPos>
          <Menu />
        </MenuPos>
          <TitleWrapper>
            <HeadTitle>Contact</HeadTitle>
          </TitleWrapper>
        </Container>
    </Body>
  )
}