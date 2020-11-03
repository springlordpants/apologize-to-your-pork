import Header from '../components/header';
import {Body, BodyItem, MenuPos} from '../styles/globalStyling';

export default function Home() {
  return (
    <Body>
        <MenuPos>
          <Header />
        </MenuPos>
        <BodyItem>
          <h1>Apologize To Your Pork</h1>
          <h3>Recipes for Sparking Joy</h3>
        </BodyItem>
    </Body>
  )
}