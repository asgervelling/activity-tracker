import { input, number, select } from "@inquirer/prompts";
import { Activity, ActivityType, activityTypes } from "../activities.js";
import { UTCDate } from "@date-fns/utc";

const choices = activityTypes.map((a) => ({ name: a, value: a }));

export async function getActivity(): Promise<Activity> {
  const activityType = await select({
    message: "Select activity",
    choices,
  });
  switch (activityType) {
    case "Had a cigarette":
      return {
        type: "Had a cigarette",
        date: new UTCDate(),
      };
    case "Set of push-ups":
      return {
        type: "Set of push-ups",
        date: new UTCDate(),
        repetitions: await getNumber("Repetitions"),
      };
  }
}

async function getNumber(question: string) {
  const num = await number({ message: question });
  if (!num) {
    throw new Error(`Missing number for ${question}`);
  }
  return num;
}
