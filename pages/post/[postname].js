import Link from "next/link"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import { TitleWrapper, HeadTitle, Section } from "../../styles/globalStyling"

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <article>
        <TitleWrapper>
          <HeadTitle>Apologize to your {frontmatter.title}</HeadTitle>
          <Section style={{ margin: "0 25px 25px" }}>
            <div>
              <ReactMarkdown source={markdownBody} />
            </div>
            <Link href="/">
              <a>More Recipes</a>
            </Link>
          </Section>
        </TitleWrapper>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)

      return slug
    })
    return data
  })(require.context("../../posts", true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
