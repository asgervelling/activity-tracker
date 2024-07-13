import * as E from "fp-ts/lib/Either.js";
import * as T from "fp-ts/lib/Task.js";
import * as TE from "fp-ts/lib/TaskEither.js";
import { input } from "@inquirer/prompts";
import { pipe, flow } from "fp-ts/lib/function.js";
import { matchError, NameIncludes, NameIncludesB } from "../errors.js";

const nameIncludes =
  <S extends string>(s: S) =>
  (name: string): E.Either<NameIncludes<S>, string> =>
    name.includes(s)
      ? E.left({
        type: `NameIncludes${s}`,
        message: "Name cannot contain 'B'",
      })
      : E.right(name);

const getName = async () =>
  pipe(
    await input({ message: "What's your name?" }),
    nameIncludes("B"),
  );

pipe(
  await getName(),
  E.match(
    (e) => matchError(e, {
      NameIncludesB: (e) => console.error(e.message)
    }),
    (name) => console.log("Your name is " + name)
  )
);
