import { UTCDate } from "@date-fns/utc";

// Hardcoded for now, but this type will probably be
// generated as a typescript module
export const activityTypes = ["Had a cigarette", "Set of push-ups"] as const;
export type ActivityType = (typeof activityTypes)[number];

type BaseActivity<T extends ActivityType> = {
  date: UTCDate;
  type: T;
};

export type Activity =
  | BaseActivity<"Had a cigarette">
  | (BaseActivity<"Set of push-ups"> & { repetitions: number });
