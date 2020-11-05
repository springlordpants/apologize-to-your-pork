import Menu from '../components/menu'
import { Body, TitleWrapper, MenuPos, HeadTitle, PostTitle, Section, SectionBorder } from '../styles/globalStyling';
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
          <SectionBorder>
            <PostTitle>Request your favorite dishes:</PostTitle>
            <Section>
              <p>This is where contact information will be listed.</p>
            </Section>
          </SectionBorder>
        </Container>
    </Body>
  )
}