import Layout from '../components/Layout';
import { TitleWrapper, HeadTitle, SecondTitle, PostTitle, Section, SectionBorder } from '../styles/globalStyling';

const Index = ({ title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <TitleWrapper>
          <HeadTitle>Apologize To Your Pork</HeadTitle>
          <SecondTitle>{description}</SecondTitle>
      </TitleWrapper>
      <SectionBorder>
          <PostTitle>Apologize To Your Test</PostTitle>
          <Section>
            <main>
              <div>Posts go here!</div>
            </main>
          </Section>
      </SectionBorder>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}