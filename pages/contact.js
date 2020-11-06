import Menu from '../components/menu';
import Head from 'next/head';
import { Body, TitleWrapper, MenuPos, HeadTitle, PostTitle, Section, SectionBorder } from '../styles/globalStyling';
import { ContactSection, ContactContent, ContactList, ListItem } from '../styles/contactStyling';
import GlobalFonts from '../styles/globalFonts';
import BodyFonts from '../styles/bodyFont';
import Container from '@material-ui/core/Container';
import TopButton from '../components/topButton';
import Link from 'next/link';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Contact() {
  return (
    <div>
    <Head>
      <title>Contact</title>
    </Head>
    <Body>
      <GlobalFonts />
      <BodyFonts />
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
            <ContactSection>
              <PostTitle>Send your food apologies to</PostTitle>
              <ContactContent>
                <ContactList>
                  <ListItem>
                    <Link href={{
                      pathname: 'mailto:byron.filler@gmail.com',
                      query: {name: 'email'},
                    }}>
                        <a target='_blank'>
                          <MailOutlineIcon style={{ fontSize: 50 }} />
                          <p>byron.filler@gmail.com</p>
                        </a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href={{
                      pathname: 'https://twitter.com/filler_films',
                      query: {name: 'twitter'},
                    }}>
                        <a target='_blank'>
                          <TwitterIcon style={{ fontSize: 50 }} />
                          <p>@filler_films</p>
                        </a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href={{
                      pathname: 'https://github.com/springlordpants',
                      query: {name: 'github'},
                    }}>
                        <a target='_blank'>
                          <GitHubIcon style={{ fontSize: 50 }} />
                          <p>@filler_films</p>
                        </a>
                    </Link>
                  </ListItem>
                </ContactList>
              </ContactContent>
            </ContactSection>
          </SectionBorder>
        </Container>
    </Body>
    </div>
  )
}