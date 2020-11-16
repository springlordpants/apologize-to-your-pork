import Link from "next/link"
import {
  PostTitle,
  Section,
  SectionBorder,
  LinkTitle,
} from "../styles/globalStyling"

export default function PostSample({ posts }) {
  if (posts === "undefined") return null

  return (
    <div>
      {!posts && (
        <SectionBorder>
          <PostTitle>No posts!</PostTitle>
          <Section>
            <p>Please refresh this page.</p>
          </Section>
        </SectionBorder>
      )}
      <div>
        {posts &&
          posts.map((post) => {
            return (
              <SectionBorder>
                <PostTitle key={post.slug}>
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <LinkTitle>
                      Apologize to your {post.frontmatter.title}
                    </LinkTitle>
                  </Link>
                </PostTitle>
                <Section>
                  <p>{post.frontmatter.date}</p>
                  <p>{post.frontmatter.prev}</p>
                  <div key={post.slug}>
                    <Link href={{ pathname: `/post/${post.slug}` }}>
                      <a>Continue to recipe</a>
                    </Link>
                  </div>
                </Section>
              </SectionBorder>
            )
          })}
      </div>
    </div>
  )
}
