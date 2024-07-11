#!/usr/bin/env node
import { input, select } from "@inquirer/prompts";
import { getActivity } from "./commands/addEntry.js";

enum Command {
  AddEntry = "AddEntry",
  CreateActivityType = "CreateActivityType",
}

const command = await select({
  message: "",
  choices: [
    { name: "Add an activity entry", value: Command.AddEntry },
    // { name: "Create a new type of activity", value: "CreateActivityType" }, // Not yet
  ],
});

if (command !== Command.AddEntry) {
  console.log("Only one command, AddEntry, supported for now");
  process.exit(1);
}

const activity = await getActivity();
console.log(JSON.stringify(activity, null, 2));
