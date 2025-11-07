import { Card } from "@/components/ui/card";

type Project = {
  id: number;
  title: string;
  description: string;
};

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1.",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2.",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3.",
  },
  {
    id: 4,
    title: "Project 4",
    description: "A brief description of Project 4.",
  },
];

const ProjectOverview = () => {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-8">Project Overview</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {mockProjects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {project.title}
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              {project.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
