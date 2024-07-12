import ts, { factory } from "typescript";
import { ActivityConfig, FieldConfig } from "../../../../createActivityType.js";
import _ from "lodash";

function pascalCase(s: string) {
  return _.startCase(_.camelCase(s)).replace(/\s/g, "");
}

export function activityType(a: ActivityConfig) {
  return factory.createTypeAliasDeclaration(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    factory.createIdentifier(pascalCase(a.name)),
    undefined,
    factory.createTypeLiteralNode([
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("type"),
        undefined,
        factory.createLiteralTypeNode(factory.createStringLiteral(a.name))
      ),
      ...a.fields.map(createPropertySignature),
    ])
  );
}

function createPropertySignature(field: FieldConfig) {
  const identifier = _.camelCase(field.name);

  switch (field.inputType) {
    case "Date":
      return factory.createPropertySignature(
        undefined,
        factory.createIdentifier(identifier),
        undefined,
        factory.createTypeReferenceNode(
          factory.createIdentifier("UTCDate"),
          undefined
        )
      );
    case "number":
    case "boolean":
    case "string":
      return factory.createPropertySignature(
        undefined,
        factory.createIdentifier(identifier),
        undefined,
        factory.createKeywordTypeNode(
          field.inputType === "number"
            ? ts.SyntaxKind.NumberKeyword
            : field.inputType === "boolean"
            ? ts.SyntaxKind.BooleanKeyword
            : ts.SyntaxKind.StringKeyword
        )
      );
  }
}
