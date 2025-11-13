import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";

type String = {
  id: number;
  title: string;
};

const Main: React.FC = () => {
  const [openFilter, setOpenFilter] = React.useState<boolean>(false);
  const List: String[] = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Services",
    },
    {
      id: 4,
      title: "Contact",
    },
  ];
  return (
    <>
      <div className="w-screen h-screen">
        <nav className="max-w-[90%] sticky top-10 z-10 flex items-center mx-auto justify-between h-15 rounded-md shadow-md bg-white-50">
          <div className="p-4">
            <h1 className="text-2xl font-bold">Pawan</h1>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex gap-6">
              {List.map((item) => (
                <ul
                  key={item.id}
                  className="hover:text-pink-500 cursor-pointer"
                >
                  {item.title}
                </ul>
              ))}
            </div>
            <div className="p-4">
              <DrawerTrigger asChild>
                <Button className="hover:text-pink-500" variant="outline">
                  Menu
                </Button>
              </DrawerTrigger>
            </div>
          </div>
        </nav>
        <div className="h-full bg-red"></div>
        <div className="h-full bg-red-600">
          <Button
            className="m-4"
            variant="outline"
            onClick={() => setOpenFilter(true)}
          >
            Click Me
          </Button>
        </div>
      </div>
      {/* <Drawer open={openFilter} onOpenChange={setOpenFilter}>
        <DrawerContent className="fixed right-0 top-0 h-full w-[300px] bg-white p-4 shadow-lg">
          <DrawerClose className="absolute top-4 right-4" />
          <DrawerTitle className="text-lg font-medium mb-4">Drawer Title</DrawerTitle>
          <div>
            <p>This is the content of the drawer.</p>
          </div>
        </DrawerContent>
      </Drawer> */}
    </>
  );
};

export default Main;
