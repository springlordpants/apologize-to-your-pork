import Layout from "../components/Layout"
import {
  TitleWrapper,
  HeadTitle,
  SecondTitle,
  PostTitle,
  Section,
  SectionBorder,
} from "../styles/globalStyling"
import {
  ContactSection,
  ContactContent,
  ContactList,
  ListItem,
} from "../styles/contactStyling"
import Link from "next/link"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"

const Contact = ({ title }) => {
  return (
    <Layout pageTitle={`${title} | Contact`}>
      <TitleWrapper>
        <HeadTitle>Contact</HeadTitle>
      </TitleWrapper>
      <SectionBorder>
        <PostTitle>Request your favorite dishes:</PostTitle>
        <ContactSection>
          <PostTitle>Send your food apologies to</PostTitle>
          <ContactContent>
            <ContactList>
              <ListItem>
                <Link
                  href={{
                    pathname: "mailto:byron.filler@gmail.com",
                    query: { name: "email" },
                  }}
                >
                  <a target="_blank">
                    <MailOutlineIcon style={{ fontSize: 50 }} />
                    <p>byron.filler@gmail.com</p>
                  </a>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={{
                    pathname: "https://twitter.com/filler_films",
                    query: { name: "twitter" },
                  }}
                >
                  <a target="_blank">
                    <TwitterIcon style={{ fontSize: 50 }} />
                    <p>@filler_films</p>
                  </a>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={{
                    pathname: "https://github.com/springlordpants",
                    query: { name: "github" },
                  }}
                >
                  <a target="_blank">
                    <GitHubIcon style={{ fontSize: 50 }} />
                    <p>@filler_films</p>
                  </a>
                </Link>
              </ListItem>
            </ContactList>
          </ContactContent>
        </ContactSection>
      </SectionBorder>
    </Layout>
  )
}

export default Contact

export async function getStaticProps() {
  const config = await import(`../siteconfig.json`)

  return {
    props: {
      title: config.title,
    },
  }
}
