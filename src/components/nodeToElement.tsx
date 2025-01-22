import { isValidElement } from "react";

export function nodeToElement(node: React.ReactNode) {
  if (!node) {
    return null;
  }

  if (isValidElement(node)) {
    return node;
  }

  return <>{node}</>;
}
