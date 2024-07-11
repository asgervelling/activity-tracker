import { UTCDate } from "@date-fns/utc";

// Hardcoded for now, but this type will probably be
// generated as a typescript module
type ActivityKind = "Had a cigarette" | "Set of push-ups";

type BaseActivity<T extends ActivityKind> = {
  date: UTCDate;
  kind: T;
};

export type Activity =
  | BaseActivity<"Had a cigarette">
  | (BaseActivity<"Set of push-ups"> & { repetitions: number });
