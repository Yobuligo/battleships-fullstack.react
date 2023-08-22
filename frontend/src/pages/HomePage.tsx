import { Page } from "../components/page/Page";
import { Dashboard } from "../features/dashboard/Dashboard";
import { StartMenu } from "../features/startMenu/StartMenu";
import { usePing } from "../hooks/usePing";

export const HomePage: React.FC = () => {
  usePing();

  return (
    <Page>
      <Dashboard>
        <StartMenu />
      </Dashboard>
    </Page>
  );
};
