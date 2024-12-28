import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { useProjects } from "@/contexts/projectContext";
import Head from "next/head";

const metadata = {
  title: 'Home | Sarah Riazati Portfolio',
  description: 'Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation',
}


export default function Index() {
  const projects = useProjects();
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Container>
        <ProjectNav active="all" />
        <ProjectList projects={projects} />
      </Container>
    </>
  );
}

