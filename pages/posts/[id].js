import {useRouter} from 'next/router';
import Head from 'next/head'
import Menu from '../../components/menu';
import {Body, TitleWrapper, MenuPos, SecondTitle, Section } from '../../styles/globalStyling';
import GlobalFonts from '../../styles/globalFonts';
import BodyFonts from '../../styles/bodyFont';
import Container from '@material-ui/core/Container';
import TopButton from '../../components/topButton';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    return(
        <div>
            <Head>
                <title>Apologize to your { id }</title>
            </Head>
            <Body>
            <Container maxWidth="md">
                <MenuPos>
                    <Menu />
                </MenuPos>
                <TitleWrapper>
                    <SecondTitle>Apologize to your { id }</SecondTitle>
                    <GlobalFonts />
                    <BodyFonts />
                    <TopButton />
                    <Section>
                        <p>Temp text</p>
                    </Section>
                </TitleWrapper>
            </Container>
            </Body>
        </div>
    )
}

export default Post;