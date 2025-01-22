import { nodeToElement } from "./nodeToElement";
import { renderProp } from "./renderProp";

interface ShowProps<T> {
  children?: ((item: NonNullable<T>) => React.ReactNode) | React.ReactNode;
  fallback?: React.ReactNode;
  when?: T;
}

export function Show<T>({ children, fallback = null, when }: ShowProps<T>) {
  if (!when) {
    return nodeToElement(fallback);
  }

  return renderProp(children, when);
}
