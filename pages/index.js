import Menu from '../components/menu';
import { Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle } from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';
import BodyFonts from '../styles/bodyFont';
import Container from '@material-ui/core/Container';
import TopButton from '../components/topButton';

export default function Home() {
  return (
    <div>
    <Body>
      <Container maxWidth="md">
      <GlobalFonts />
      <BodyFonts />
        <MenuPos>
          <Menu />
        </MenuPos>
        <TitleWrapper>
          <HeadTitle>Apologize To Your Pork</HeadTitle>
          <SecondTitle>Recipes for Sparking Joy</SecondTitle>
        </TitleWrapper>
        <TopButton />
      </Container>
    </Body>
    </div>
  )
}