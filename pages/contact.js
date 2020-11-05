import Menu from '../components/menu'
import { Body, TitleWrapper, MenuPos, HeadTitle, PostTitle, Section, SectionBorder } from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';
import Container from '@material-ui/core/Container';
import TopButton from '../components/topButton';
import Link from 'next/link';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';

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
          <TopButton />
          <SectionBorder>
            <PostTitle>Request your favorite dishes:</PostTitle>
            <Section>
              <PostTitle>Send your food apologies here</PostTitle>
              <ul>
                <li>
                  <Link href={{
                    pathname: 'mailto:byron.filler@gmail.com',
                    query: {name: 'email'},
                  }}>
                    <a target='_blank'><MailOutlineIcon />byron.filler@gmail.com</a>
                  </Link>
                </li>
                <li>
                  <Link href={{
                    pathname: 'https://twitter.com/filler_films',
                    query: {name: 'twitter'},
                  }}>
                    <a target='_blank'><TwitterIcon />@filler_films</a>
                  </Link>
                </li>
              </ul>
            </Section>
          </SectionBorder>
        </Container>
    </Body>
  )
}