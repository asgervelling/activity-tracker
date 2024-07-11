import { UTCDate } from "@date-fns/utc";
import { ActivityType } from "./activityType.js";

declare function jsonToDiscUnion(json: string): ActivityType;

// Example
const activityTypesJson = `[
  { "type": "Had a cigarette" },
  {
    "type": "Set of push-ups",
    "repetitions": "number"
  }
]`;

// Becomes
//
// type Activity =
//   | { type: "Had a cigarette", date: UTCDate }
//   | { type: "Set of push-ups", date: UTCDate, repetitions: number }
