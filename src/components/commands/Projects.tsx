import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are some of my key projects. Type `projects go &lt;id&gt;` to open.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "MIRA – AI Mock Interview Platform",
    desc: "Full-stack enterprise app with real-time interview orchestration, adaptive question generation, JWT auth, resume parsing, ATS skill extraction, and browser-side proctoring via TensorFlow.js. Stack: React 19, FastAPI, LangChain, LangGraph, Groq, MySQL.",
    url: "https://github.com/Sikorsky3301",
  },
  {
    id: 2,
    title: "Silo – AI Full-Stack App Generator",
    desc: "AI-powered platform converting natural language prompts into fully functional Next.js apps, reducing prototyping time by 80%+. Autonomous agent pipeline using GPT-4.1, Inngest, E2B Sandboxes, and live code previews. Stack: Next.js 15, TypeScript, PostgreSQL, Prisma, tRPC.",
    url: "https://github.com/Sikorsky3301",
  },
  {
    id: 3,
    title: "CrossCamReID – Multi-Camera Person Re-ID",
    desc: "Real-time distributed analytics pipeline for cross-camera people tracking with global identity memory, dwell-time analytics, and threshold-based alerting. Containerized with Docker and CI/CD-ready. Stack: ResNet, TensorRT, ByteTrack, FastAPI, WebSocket, ChromaDB.",
    url: "https://github.com/Sikorsky3301",
  },
];

export default Projects;
