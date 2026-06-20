import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Computer Science & Engineering",
    desc: "IILM College of Engineering & Technology, Greater Noida | 2021 - 2025 | GPA: 7.28",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    desc: "Microsoft | Cloud Infrastructure & Services",
  },
  {
    title: "AI/ML Developer Professional Certificate",
    desc: "Microsoft | Machine Learning & AI Development",
  },
  {
    title: "Python for Data Science & AI",
    desc: "Coursera | Data Science & AI Fundamentals",
  },
  {
    title: "Intro to TensorFlow for Deep Learning",
    desc: "Udacity | Deep Learning with TensorFlow",
  },
];

export default Education;
