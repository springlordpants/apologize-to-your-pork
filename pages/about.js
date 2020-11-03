import Header from '../components/header'
import {Grid, GridItem} from '../styles/globalStyling';

export default function Home() {
  return (
    <Grid>
        <Header />
        <GridItem>
          <h1>About</h1>
        </GridItem>
    </Grid>
  )
}