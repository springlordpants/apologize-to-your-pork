import Layout from "../components/Layout"
import {
  TitleWrapper,
  HeadTitle,
  PostTitle,
  Section,
  SectionBorder,
} from "../styles/globalStyling"

const About = ({ title }) => {
  return (
    <Layout pageTitle={`${title} | About`}>
      <TitleWrapper>
        <HeadTitle>About</HeadTitle>
      </TitleWrapper>
      <SectionBorder>
        <PostTitle>Based On A Purely Platonic Oral Fixation</PostTitle>
        <Section>
          <main>
            <p>
              This satirical culinary diary follows the journey of a self
              proclaimed "dog person", who has too many stories about living
              their best life through food as an experience.
              <br />
              <br />
              Inspired by Juzo Itami's cult classic film, "Tampopo", dive into a
              blog that covers some needless details, organically sourced from
              this bloggers genuinely uncultured intuition to take what you know
              about the cuisine you love and starfish all over it. Each recipe
              is tailored to instruct joy in the consumption of a meal you'll
              never make eye contact with again, using the same metric standards
              used to declare the average constitution of a tide pod challenger.
              <br />
              <br />
              You are invited to join this millennial who evokes the question
              we're all verbally abusing our phones about, "What the fuck do you
              do that you have the disposable income to travel?"
            </p>
          </main>
        </Section>
      </SectionBorder>
    </Layout>
  )
}

export default About

export async function getStaticProps() {
  const config = await import(`../siteconfig.json`)

  return {
    props: {
      title: config.title,
    },
  }
}
