import Header from '../components/header'
import {Body, BodyItem, MenuPos} from '../styles/globalStyling';

export default function Home() {
  return (
    <Body>
        <MenuPos>
          <Header />
        </MenuPos>
        <BodyItem>
          <h1>Contact</h1>
        </BodyItem>
    </Body>
  )
}