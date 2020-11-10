import Head from 'next/head';
import Menu from './Menu';
import TopButton from './TopButton';
import { Body, MenuPos } from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';
import BodyFont from '../styles/bodyFont';
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
                    <BodyFont />
                    <TopButton />
                        <MenuPos>
                            <Menu />
                        </MenuPos>
                    <section>
                        <div>{children}</div>
                    </section>
                </Container>
            </Body>
        </>
    )
}