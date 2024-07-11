#!/usr/bin/env node
import { input } from "@inquirer/prompts";

const answer = await input({ message: "Enter your name" });

// Fun exercise
type Primitive = string | number | boolean | null;
type FormatA = { key: string; value: Primitive };
type FormatB = {
  [key: string]: Primitive;
};

function aToB(a: FormatA): FormatB {
  return {
    [a.key]: a.value,
  };
}

function bToA(b: FormatB): FormatA {
  const [key, value] = Object.entries(b)[0];
  return { key, value };
}
