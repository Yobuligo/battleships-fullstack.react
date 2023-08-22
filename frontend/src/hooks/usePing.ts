import { PingApi } from "../api/PingApi";
import { useInitialize } from "./useInitialize";
import { useMessageDialog } from "./useMessageDialog";
import { useTranslation } from "./useTranslation";

export const usePing = () => {
  const messageDialog = useMessageDialog();
  const { t } = useTranslation();

  useInitialize(async () => {
    try {
      await PingApi.run();
    } catch (error) {
      messageDialog.show(t.serverConnection, t.serverNoResponse, undefined, 20);
    }
  });
};
