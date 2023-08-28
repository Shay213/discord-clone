import ThemeToggle from "@/components/ThemeToggle";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ThemeToggle />
    </div>
  );
};

export default Home;
