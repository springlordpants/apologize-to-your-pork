import Header from '../components/header'
import {Body, TitleWrapper, MenuPos, HeadTitle} from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';

export default function About() {
  return (
    <Body>
      <GlobalFonts />
        <MenuPos>
          <Header />
        </MenuPos>
        <TitleWrapper>
          <HeadTitle>About</HeadTitle>
        </TitleWrapper>
    </Body>
  )
}