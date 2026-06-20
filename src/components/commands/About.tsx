import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Rishi Raj</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>an AI Engineer</HighlightAlt> based in Noida, India.
      </p>
      <p>
        I build production-grade Computer Vision, Generative AI, <br />
        and full-stack applications that bridge AI research <br />
        with real-world enterprise solutions.
      </p>
    </AboutWrapper>
  );
};

export default About;
