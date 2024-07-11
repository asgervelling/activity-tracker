import { confirm, input, select } from "@inquirer/prompts";
import _ from "lodash";

const inputTypes = ["number", "string", "boolean", "Date"] as const;
type InputType = (typeof inputTypes)[number];
type FieldConfig = {
  name: string;
  inputType: InputType;
};
type ActivityConfig = {
  name: string;
  fields: FieldConfig[];
};

export async function getActivityConfig(): Promise<ActivityConfig> {
  const name = await input({ message: "Name of activity:" });
  const fields = await getFieldConfigs();
  return { name, fields };
}

async function getFieldConfigs(): Promise<FieldConfig[]> {
  const addFields = await confirm({
    message: "Would you like to add additional fields?",
    default: false,
  });

  if (!addFields) return [];

  const config = await getFieldConfig();

  // Present the newly created config to the user
  console.log(JSON.stringify(config));

  return [config, ...(await getFieldConfigs())];
}

async function getFieldConfig(): Promise<FieldConfig> {
  const name: string = await input({ message: "Field name:" });
  const inputType: InputType = await select({
    message: "Input type",
    choices: inputTypes.map((type) => ({
      name: _.capitalize(type),
      value: type,
    })),
  });
  return { name, inputType };
}

// Example config:
const pushUpsConfig: ActivityConfig = {
  name: "Set of push-ups",
  fields: [
    { name: "Date", inputType: "Date" },
    { name: "Repetitions", inputType: "number" },
  ],
};
