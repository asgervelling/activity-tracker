type NameIncludes<S extends string> = Readonly<{
  type: `NameIncludes${S}`;
  message: string;
}>

type NameIncludesB = NameIncludes<"B">;
type _Error = NameIncludesB;

function matchError<T>(
  e: _Error,
  handlers: {
    NameIncludesB: (e: NameIncludesB) => T;
  }
): T {
  switch (e.type) {
    case "NameIncludesB":
      return handlers.NameIncludesB(e);
  }
}

export { NameIncludes, NameIncludesB, matchError };
