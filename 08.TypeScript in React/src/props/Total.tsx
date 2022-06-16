import { PropsWithChildren } from "react";

type OscarProps = PropsWithChildren<{greet: string}>;
export function Oscar(props: OscarProps) {
  return(
    <div>{props.children} {props.greet}</div>
  )
}

type ContainerProps = {
  styles: React.CSSProperties;
};
export function Container (props: ContainerProps) {
  return (
    <div style={props.styles}></div>
  )
}

type ListProps<T> = {
  items: T[];
}

export function List<T extends string | number> (props: ListProps<T>) {
  return (
    <ul>
      {
        props.items.map((item: T) => {
          if (typeof item === "string") {
            return <li key={item}>{item.toLocaleUpperCase()}</li>
          }
          return <li key={item}>{item.toFixed(2)}</li>
        })
      }
    </ul>
  )
}