import Menu from '../components/menu'
import Head from 'next/head';
import { Body, TitleWrapper, MenuPos, HeadTitle, PostTitle, Section, SectionBorder } from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';
import BodyFonts from '../styles/bodyFont';
import Container from '@material-ui/core/Container';
import TopButton from '../components/topButton';

export default function About() {
  return (
    <div>
    <Head>
      <title>About</title>
    </Head>
    <Body>
      <GlobalFonts />
      <BodyFonts />
      <Container maxWidth="md">
          <MenuPos>
            <Menu id="back-to-top-anchor" />
          </MenuPos>
          <TitleWrapper>
            <HeadTitle>About</HeadTitle>
          </TitleWrapper>
          <TopButton />
          <SectionBorder>
            <PostTitle>Based On A Purely Platonic Oral Fixation</PostTitle>
            <Section>
              <p>
                This satirical culinary diary follows the journey of a self proclaimed "dog person", who has too many stories about living their best life through food as an experience.
                <br /><br />
                Inspired by Juzo Itami's cult classic film, "Tampopo", dive into a blog that covers some needless details, organically sourced from this bloggers genuinely uncultured intuition to take what you know about the cuisine you love and starfish all over it. Each recipe is tailored to instruct joy in the consumption of a meal you'll never make eye contact with again, using the same metric standards used to declare the average constitution of a tide pod challenger.
                <br /><br />
                You are invited to join this millennial who evokes the question we're all verbally abusing our phones about, "What the fuck do you do that you have the disposable income to travel?"
              </p>
            </Section>
          </SectionBorder>
        </Container>
    </Body>
    </div>
  )
}