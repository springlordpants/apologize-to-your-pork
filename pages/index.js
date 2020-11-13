import Layout from "../components/Layout"
import PostSample from "../components/PostSample"
import {
  TitleWrapper,
  HeadTitle,
  SecondTitle,
  PostTitle,
  Section,
  SectionBorder,
} from "../styles/globalStyling"
import matter from "gray-matter"

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <TitleWrapper>
        <HeadTitle>Apologize To Your Pork</HeadTitle>
        <SecondTitle>{description}</SecondTitle>
      </TitleWrapper>
      <div>
        <main>
          <PostSample posts={posts} />
        </main>
      </div>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context("../posts", true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
