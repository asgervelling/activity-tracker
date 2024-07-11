import { factory } from "typescript";

export function importUTCDate() {
  return factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(
          false,
          undefined,
          factory.createIdentifier("UTCDate")
        ),
      ])
    ),
    factory.createStringLiteral("@date-fns/utc"),
    undefined
  );
}
