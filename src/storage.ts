import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const baseDir = path.join(__dirname, "..");

// Activity configs
/* 
Let's say the user has defined two activity types:
- Running of { distance: number } & { minutes: number }
- Set of push-ups of ( repetitions: number )

They will be stored in
*/
