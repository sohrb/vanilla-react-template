import { nodeToElement } from "./nodeToElement";

export function renderProp<TArgs extends readonly unknown[]>(
  prop: ((...args: TArgs) => React.ReactNode) | React.ReactNode,
  ...args: TArgs
) {
  if (typeof prop === "function") {
    return nodeToElement(prop(...args));
  }

  return nodeToElement(prop);
}
