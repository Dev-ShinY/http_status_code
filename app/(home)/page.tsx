import { Intro } from "./intro";
import { Status } from "./status";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Intro />
      <Status />
    </main>
  );
}
