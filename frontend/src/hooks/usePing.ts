import { Ping } from "../api/Ping";
import { useInitialize } from "./useInitialize";
import { useMessageDialog } from "./useMessageDialog";
import { useTranslation } from "./useTranslation";

export const usePing = () => {
  const messageDialog = useMessageDialog();
  const { t } = useTranslation();

  useInitialize(async () => {
    try {
      await Ping.run();
    } catch (error) {
      messageDialog.show(t.serverConnection, t.serverNoResponse, 20);
    }
  });
};
