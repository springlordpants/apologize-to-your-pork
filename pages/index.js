import Header from '../components/header';
import {Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle} from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';

export default function Home() {
  return (
    <div>
    <Body>
      <GlobalFonts />
        <MenuPos>
          <Header />
        </MenuPos>
        <TitleWrapper>
          <HeadTitle>Apologize To Your Pork</HeadTitle>
          <SecondTitle>Recipes for Sparking Joy</SecondTitle>
        </TitleWrapper>
    </Body>
    </div>
  )
}