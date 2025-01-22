import { Children, isValidElement } from "react";

import { nodeToElement } from "./nodeToElement";

interface SwitchProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}

export function Switch({ children, fallback = null }: SwitchProps) {
  for (const item of Children.toArray(children)) {
    if (
      isValidElement(item) &&
      typeof item.props === "object" &&
      item.props &&
      "when" in item.props &&
      item.props.when
    ) {
      return item;
    }
  }

  return nodeToElement(fallback);
}
