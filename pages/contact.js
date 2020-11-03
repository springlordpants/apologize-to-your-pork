import Header from '../components/header'
import {Body, TitleWrapper, MenuPos, HeadTitle} from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';

export default function Contact() {
  return (
    <Body>
      <GlobalFonts />
        <MenuPos>
          <Header />
        </MenuPos>
        <TitleWrapper>
          <HeadTitle>Contact</HeadTitle>
        </TitleWrapper>
    </Body>
  )
}