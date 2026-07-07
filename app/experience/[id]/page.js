import ExperienceDetail from "../../components/ExperienceDetail";

export default function ExperiencePage({ params }) {
  return <ExperienceDetail id={params.id} />;
}