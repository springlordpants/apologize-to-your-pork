import Head from 'next/head';
import Menu from '@components/Menu';
import TopButton from '@components/TopButton';
import { Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle, PostTitle, Section, SectionBorder } from '@styles/globalStyling'
import GlobalFonts from '../styles/globalFonts';
import BodyFonts from '../styles/bodyFont';
import Container from '@material-ui/core/Container';

export default function Layout ({ children, pageTitle, ...props}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
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
                          <div>{children}</div>
                        </Section>
                      </div>
                    </SectionBorder>
                </Container>
            </Body>
        </>
    )
}