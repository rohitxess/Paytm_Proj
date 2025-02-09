import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

export default function Home() {
  return (
    <div className="text-xl text-gray-900 dark:text-grey">
      hi there from home 
    </div>
  );
}
