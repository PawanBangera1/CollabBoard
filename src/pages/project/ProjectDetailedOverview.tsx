import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";

const mockProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1.",
    team: "team-a",
    users: 5,
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2.",
    team: "team-b",
    users: 3,
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3.",
    team: "team-c",
    users: 8,
  },
  {
    id: 4,
    title: "Project 4",
    description: "A brief description of Project 4.",
    team: "team-a",
    users: 2,
  },
];

const ProjectDetailedOverview: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const project = mockProjects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Project not found</h2>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <Card className="p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </Card>
      <Card className="p-6 shadow-lg">
        <div className="space-y-4 text-gray-700 dark:text-gray-200">
          <p>
            <strong>Name:</strong> {project.title}
          </p>
          <p>
            <strong>Description:</strong> {project.description}
          </p> 
          <p>
            <strong>Team:</strong> {project.team}
          </p>
          <p>
            <strong>Members:</strong> {project.users}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetailedOverview;
