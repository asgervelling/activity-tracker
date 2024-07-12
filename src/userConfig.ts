import * as fs from "fs";
import path from "path";

import { getUserTimezone } from "./timestuff.js";
import { baseDir } from "./storage.js";

const DATA_PATH = path.join(baseDir, "data");
const USER_CONFIG_PATH = path.join(DATA_PATH, "userConfig.json");

export type UserConfig = {
  timezone: string;
};

function generateUserConfig(): UserConfig {
  return {
    timezone: getUserTimezone(),
  };
}

function dirExists(path: string): boolean {
  try {
    const stat = fs.statSync(path);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

function fileExists(path: string): boolean {
  try {
    const stat = fs.statSync(path);
    return stat.isFile();
  } catch {
    return false;
  }
}

/** Throws on error */
function storeUserConfig(userConfig: string) {
  fs.writeFileSync(USER_CONFIG_PATH, userConfig);
}

/** Throws on error */
function readUserConfig(): UserConfig {
  const content = fs.readFileSync(USER_CONFIG_PATH, "utf-8");
  const config: UserConfig = JSON.parse(content);
  return config;
}

export function getOrGenerateUserConfig() {
  if (fileExists(USER_CONFIG_PATH)) {
    return readUserConfig();
  } else {
    if (!dirExists(DATA_PATH)) {
      fs.mkdirSync(DATA_PATH);
    }
    const userConfig = generateUserConfig();
    storeUserConfig(JSON.stringify(userConfig));
    return userConfig;
  }
}
