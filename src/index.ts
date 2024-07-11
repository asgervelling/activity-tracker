#!/usr/bin/env node
import { select } from "@inquirer/prompts";
import { getActivity } from "./commands/addEntry.js";
import { getActivityConfig } from "./commands/createActivityType.js";

enum Command {
  AddEntry = "AddEntry",
  CreateActivityType = "CreateActivityType",
}

async function run() {
  const command = await select({
    message: "",
    choices: [
      { name: "Add an activity entry", value: Command.AddEntry },
      {
        name: "Create a new type of activity",
        value: Command.CreateActivityType,
      },
    ],
  });

  switch (command) {
    case Command.AddEntry:
      const activity = await getActivity();
      console.log(JSON.stringify(activity, null, 2));
    case Command.CreateActivityType:
      const activityType = await getActivityConfig();
      console.log(JSON.stringify(activityType, null, 2));
  }
}

run();
