import { useContext } from "react";
import { ElementRepository } from "../api/ElementRepository";
import { Page } from "../components/page/Page";
import { AppContext } from "../context/AppContext";
import { Dashboard } from "../features/dashboard/Dashboard";
import { Legend } from "../features/legend/legend/Legend";
import { useInitialize } from "../hooks/useInitialize";
import { usePing } from "../hooks/usePing";
import { usePolling } from "../hooks/usePolling";

export const GamePage: React.FC = () => {
  const context = useContext(AppContext);
  usePing();
  const polling = usePolling(ElementRepository, () => reload());

  const reload = async () => {
    const elements = await ElementRepository.findAll();
    context.grid.updateElements(elements.data);
  };

  useInitialize(async () => {
    try {
      await reload();
      polling.onPoll();
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error during initial load of data. ${error.message}`);
      }
    }
  });

  return (
    <Page>
      <Dashboard>
        <Legend />
      </Dashboard>
    </Page>
  );
};
