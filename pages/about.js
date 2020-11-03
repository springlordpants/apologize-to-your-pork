import Header from '../components/header'
import {Body, TitleWrapper, MenuPos, HeadTitle, SecondTitle, PostTitle, Section, SectionBorder} from '../styles/globalStyling';
import GlobalFonts from '../styles/globalFonts';

export default function About() {
  return (
    <div>
    <Body>
      <GlobalFonts />
        <MenuPos>
          <Header />
        </MenuPos>
        <TitleWrapper>
          <HeadTitle>About</HeadTitle>
        </TitleWrapper>
        <SectionBorder>
          <PostTitle>Based On A Purely Platonic Oral Fixation</PostTitle>
          <Section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit lacus, bibendum in purus in, iaculis varius arcu. Nam et turpis in lorem eleifend placerat. Ut tortor nulla, pulvinar quis sollicitudin vitae, fermentum ut enim. Curabitur velit felis, molestie egestas diam sollicitudin, laoreet dapibus ex. Nam ac dolor interdum, interdum neque sit amet, posuere dolor. Maecenas egestas nisi pulvinar, euismod lectus et, fermentum sapien. Sed vitae mauris vel diam pharetra cursus. Vivamus efficitur tempor sapien, sed tristique lacus fringilla eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit lacus, bibendum in purus in, iaculis varius arcu. Nam et turpis in lorem eleifend placerat. Ut tortor nulla, pulvinar quis sollicitudin vitae, fermentum ut enim. Curabitur velit felis, molestie egestas diam sollicitudin, laoreet dapibus ex. Nam ac dolor interdum, interdum neque sit amet, posuere dolor. Maecenas egestas nisi pulvinar, euismod lectus et, fermentum sapien. Sed vitae mauris vel diam pharetra cursus. Vivamus efficitur tempor sapien, sed tristique lacus fringilla eu.
            </p>
          </Section>
        </SectionBorder>
    </Body>
    </div>
  )
}