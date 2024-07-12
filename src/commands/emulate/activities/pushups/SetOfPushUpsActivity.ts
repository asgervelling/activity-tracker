import ts, { factory } from "typescript";
import { importUTCDate } from "./statements/imports.js";
import { activityType } from "./statements/activityType.js";
import { ActivityConfig } from "../../../createActivityType.js";

function br() {
  return factory.createEmptyStatement();
}

export function generateCode(a: ActivityConfig) {
  const statements: readonly ts.Statement[] = [
    importUTCDate(),
    br(),
    activityType(a),
  ];

  // Create a source file containing the statements
  const sourceFile = factory.createSourceFile(
    statements,
    factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.None
  );

  // Create a printer to print the source file
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  // Print the source file
  const result = printer.printFile(sourceFile);
  console.log(result);
}
