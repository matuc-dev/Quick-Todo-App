import { Tasktable } from "@/components/tasktable";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Tasktable />
    </div>
  );
}
