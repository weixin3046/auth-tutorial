"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
FcGoogle;
FaGithub;

export const Social = () => {
  return (
    <div className="flex justify-center gap-x-2 w-full">
      <Button
        className="w-full"
        size={"lg"}
        variant={"outline"}
        onClick={() => {}}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        className="w-full"
        size={"lg"}
        variant={"outline"}
        onClick={() => {}}
      >
        <FaGithub className="2-5 h-5" />
      </Button>
    </div>
  );
};
