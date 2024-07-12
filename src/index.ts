#!/usr/bin/env node
import { select } from "@inquirer/prompts";
import { getActivity } from "./commands/addEntry.js";
import { getActivityConfig } from "./commands/createActivityType.js";
import { generateCode } from "./commands/emulate/activities/pushups/SetOfPushUpsActivity.js";
import _ from "lodash";
import { getOrGenerateUserConfig } from "./userConfig.js";

enum Command {
  AddEntry = "AddEntry",
  CreateActivityType = "CreateActivityType",
}

async function run() {
  const userConfig = getOrGenerateUserConfig();

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
      const activityConfig = await getActivityConfig();
      console.log(JSON.stringify(activityConfig, null, 2));
      console.log();
      generateCode(activityConfig);
  }
}

run();
