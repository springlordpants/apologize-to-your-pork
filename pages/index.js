import Header from '../components/header';
import {Body, TitleWrapper, MenuPos, HeadTitle} from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';

export default function Home() {
  return (
    <Body>
      <GlobalFonts />
        <MenuPos>
          <Header />
        </MenuPos>
        <TitleWrapper>
          <HeadTitle>Apologize To Your Pork</HeadTitle>
          <h3>Recipes for Sparking Joy</h3>
        </TitleWrapper>
    </Body>
  )
}