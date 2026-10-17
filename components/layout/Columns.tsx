import { Children, type CSSProperties, type ReactNode } from "react";
import styles from "./Columns.module.css";

type ColumnCount = 1 | 2 | 3 | 4;

type Props = {
  children: ReactNode;
  columns?: ColumnCount;
  gap?: CSSProperties["gap"];
  id?: string;
  className?: string;
};

export default function Columns({
  children,
  columns = 2,
  gap,
  id,
  className,
}: Props) {
  return (
    <section
      id={id}
      className={[styles.columns, className].filter(Boolean).join(" ")}
      data-columns={columns}
      style={gap === undefined ? undefined : { gap }}
    >
      {Children.map(children, (item) => (
        <div className={styles.item}>{item}</div>
      ))}
    </section>
  );
}
