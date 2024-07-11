import { UTCDate } from "@date-fns/utc";

export type SetOfPushUpsActivity = {
  type: "Set of push-ups";
  date: UTCDate;
  repetitions: number;
};
