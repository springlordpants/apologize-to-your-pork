import Menu from '../components/menu';
import Head from 'next/head';
import { Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle, PostTitle, Section, SectionBorder } from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';
import BodyFonts from '../styles/bodyFont';
import Container from '@material-ui/core/Container';
import TopButton from '../components/topButton';

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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate nulla id ligula suscipit, quis pellentesque turpis lobortis. Phasellus nec feugiat risus. Donec et condimentum nisi, sollicitudin aliquet ante. Aliquam cursus turpis pretium malesuada placerat. Nulla scelerisque interdum aliquam. Cras placerat rhoncus mauris, vitae rutrum nunc. Suspendisse dolor elit, ultrices eu lorem vitae, faucibus ultricies ante. Nulla finibus nulla scelerisque, aliquet lacus eget, egestas erat. Ut auctor elementum consectetur. Nullam id magna eget nisl placerat sollicitudin at quis nunc. Vivamus molestie vitae nulla quis vulputate.
              <br /><br />
              Integer porta fringilla augue ac viverra. Curabitur faucibus purus faucibus, suscipit mi fermentum, vehicula elit. Pellentesque suscipit lacinia imperdiet. Nunc vitae purus lacus. In nulla est, euismod eu neque sit amet, fermentum pretium nisl. Vivamus sed dictum erat, non scelerisque ante. Integer in luctus orci. Phasellus eget tellus convallis, tincidunt velit nec, pretium turpis. Curabitur laoreet pulvinar eros, nec tincidunt odio sollicitudin ut. Mauris dictum molestie aliquam. Mauris quis rutrum erat. Nam molestie urna ac eros gravida pharetra.
              <br /><br />
              Duis finibus erat ac urna fermentum blandit. Duis fringilla vehicula lacinia. Phasellus tincidunt lectus quis massa convallis consectetur. Donec sit amet turpis at nunc interdum egestas. Ut et quam sollicitudin, varius odio ac, mollis lectus. Nunc condimentum tincidunt nibh in convallis. Nam mollis risus in tortor molestie lacinia. Etiam pharetra consectetur augue sed imperdiet. Etiam placerat erat eget metus interdum, euismod ultricies ligula porttitor. Sed mattis pretium lacinia. Etiam faucibus justo odio, sit amet placerat nisi finibus vel. Fusce tempus, purus vel vehicula mollis, orci lectus commodo libero, et ultricies diam metus quis libero.
              <br /><br />
              Suspendisse tincidunt eros id nunc bibendum, vel aliquet ligula sodales. Pellentesque in est est. Sed ac mauris vel metus tincidunt vehicula laoreet nec libero. Praesent efficitur erat ac faucibus vehicula. Mauris faucibus ac mauris eget auctor. Vivamus auctor iaculis felis ac eleifend. Etiam nulla purus, tempus vel vestibulum quis, tempor in nunc. Maecenas luctus erat leo, nec efficitur lacus sagittis ut. Ut ut tempus tortor. Phasellus neque quam, porttitor in dictum quis, finibus sed turpis. Praesent viverra tempus aliquam. Sed enim ligula, egestas vitae varius in, ullamcorper eu libero. Quisque a felis non nisl lobortis laoreet. Quisque in venenatis ante. Maecenas feugiat, tortor id molestie mollis, sem velit semper diam, at convallis mi leo ac elit. Vestibulum at orci a enim malesuada auctor eu sit amet magna.
              <br /><br />
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ornare quis lorem id dictum. Cras quis bibendum libero. Nam venenatis turpis vehicula lorem convallis lobortis. Sed aliquet feugiat enim id aliquam. Suspendisse potenti. Cras a egestas sapien.
              </p>
            </Section>
          </div>
        </SectionBorder>
      </Container>
    </Body>
    </div>
  )
}