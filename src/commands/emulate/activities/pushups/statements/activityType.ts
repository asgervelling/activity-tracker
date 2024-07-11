import ts, { factory } from "typescript";

export function activityType() {
  return factory.createTypeAliasDeclaration(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    factory.createIdentifier("SetOfPushUpsActivity"),
    undefined,
    factory.createTypeLiteralNode([
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("type"),
        undefined,
        factory.createLiteralTypeNode(
          factory.createStringLiteral("Set of push-ups")
        )
      ),
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("date"),
        undefined,
        factory.createTypeReferenceNode(
          factory.createIdentifier("UTCDate"),
          undefined
        )
      ),
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("repetitions"),
        undefined,
        factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
      ),
    ])
  );
}
