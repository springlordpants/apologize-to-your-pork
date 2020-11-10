import Menu from '../components/Menu';
import Head from 'next/head';
import { Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle, PostTitle, Section, SectionBorder } from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';
import BodyFonts from '../styles/bodyFont';
import Container from '@material-ui/core/Container';
import TopButton from '../components/TopButton';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
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
        <SectionBorder>
          <div>
            <PostTitle>Apologize To Your Test</PostTitle>
            <Section>
              <p>Temp Post</p>
            </Section>
          </div>
        </SectionBorder>
      </Container>
    </Body>
    </div>
  )
}