import { renderProp } from "./renderProp";

interface MatchProps<T> {
  children?: ((item: NonNullable<T>) => React.ReactNode) | React.ReactNode;
  when?: T;
}

export function Match<T>({ children, when }: MatchProps<T>) {
  if (!when) {
    return null;
  }

  return renderProp(children, when);
}
