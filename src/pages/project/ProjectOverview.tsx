import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

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

const ProjectOverview: React.FC = () => {
  const [addProject, setaddProject] = useState<boolean>(false);
  const [team, setTeam] = useState<string | undefined>(undefined);

  const [deleteProject, setDeleteProject] = useState<boolean>(false);
  const teams: string[] = ["team-a", "team-b", "team-c"];
    const navigate = useNavigate();
  return (
    <>
      <div className="p-4 sm:p-6 mb-4">
        <Card className="mb-8 p-4 rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <h2 className="text-2xl font-bold">Project Overview</h2>
            </div>
            <div className=" flex justify-center items-center gap-4">
              <Button className="" onClick={() => setDeleteProject(true)}>Delete Project</Button>
              <Button className="" onClick={() => setaddProject(true)}>
                Create New Project
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {mockProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => {navigate(`/project-detailed-overview/${project.id}`)}}
            >
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {project.title}
              </span>
            </Card>
          ))}
        </div>
      </div>
      <Dialog open={addProject} onOpenChange={setaddProject}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Project</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input
                  id="name-1"
                  name="name"
                  placeholder="Enter project name"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter project description"
                />
              </div>
              <div>
                <Label htmlFor="team">Team</Label>
                <Select value={team} onValueChange={(v: string) => setTeam(v)}>
                  <SelectTrigger aria-label="Select team" className="w-full">
                    <SelectValue placeholder="Select a team" />
                  </SelectTrigger>
                  <SelectContent>
                    {teams.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant="outline"
                  onClick={() => {
                    setaddProject(false);
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                onClick={() => {
                  setaddProject(false);
                }}
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
      <Dialog open={deleteProject} onOpenChange={setDeleteProject}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete project</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this project?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant="outline"
                  onClick={() => {
                    setDeleteProject(false);
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                onClick={() => {
                  setDeleteProject(false);
                }}
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default ProjectOverview;
