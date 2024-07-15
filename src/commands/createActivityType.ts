import { confirm, input, select } from "@inquirer/prompts";
import _ from "lodash";
import * as E from "fp-ts/lib/Either.js";

const inputTypes = ["number", "string", "boolean", "Date"] as const;
type InputType = (typeof inputTypes)[number];

export type FieldConfig = {
  name: string;
  inputType: InputType;
};

export type ActivityConfig = {
  name: string;
  fields: FieldConfig[];
};

export async function getActivityConfig(): Promise<ActivityConfig> {
  const name = await getInput({ message: "Name of activity:" });
  if (name._tag === "Left") {
    throw new Error("Temporary error while refactoring");
  }
  const fields = await getFieldConfigs();
  return { name: name.right, fields };
}

async function getInput(config: {
  message: string;
}): Promise<E.Either<string, string>> {
  try {
    const userInput = await input(config);
    return E.right(userInput);
  } catch (err) {
    return E.left("Could not get user input");
  }
}

async function getFieldConfigs(): Promise<FieldConfig[]> {
  async function recInner(): Promise<FieldConfig[]> {
    const addFields = await confirm({
      message: "Would you like to add additional fields?",
      default: false,
    });

    if (!addFields) return [];

    const config = await getFieldConfig();

    return [config, ...(await recInner())];
  }

  const dateField: FieldConfig = {
    name: "Date",
    inputType: "Date",
  };
  return [dateField, ...(await recInner())];
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
