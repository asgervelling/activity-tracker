import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { UTCDate } from "@date-fns/utc";

export function getUserTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Usage example
const utcDateExample = new UTCDate(); // Example UTC date
const userTimezone = getUserTimezone();
const localDate = toZonedTime(utcDateExample, userTimezone);

const fmt = (d: UTCDate | Date) => format(d, "yyyy-MM-dd hh:mm");

// console.log(`UTC Date: ${fmt(utcDateExample)}`);
// console.log(`User Timezone: ${userTimezone}`);
// console.log(`Local Date: ${fmt(localDate)}`);
