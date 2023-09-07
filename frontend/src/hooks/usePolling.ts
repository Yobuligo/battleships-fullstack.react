import { useCallback } from "react";
import { IPollRepository } from "../api/types/IPollRepository";
import { IEntity } from "../shared/types/IEntity";
import { Todo } from "../utils/Todo";

export const usePolling = <T extends IEntity>(
  repository: IPollRepository<T>,
  reload: () => void,
  interval?: number
) => {
  Todo("Refactor, is no custom hook");
  const onPoll = useCallback(() => {
    setTimeout(async () => {
      try {
        const isOutdated = await repository.isOutdated;
        if (isOutdated) {
          await reload();
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(`Error during poll. ${error.message}`);
        }
      }

      onPoll();
    }, interval ?? parseInt(process.env.REACT_APP_POLL_FREQUENCY!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, reload]);

  return { onPoll };
};
