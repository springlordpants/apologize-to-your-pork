import Header from '../components/header';
import {Grid, GridItem} from '../styles/globalStyling';

export default function Home() {
  return (
    <Grid>
        <Header />
        <GridItem>
          <h1>Apologize To Your Pork</h1>
          <h3>Recipes for Sparking Joy</h3>
        </GridItem>
    </Grid>
  )
}