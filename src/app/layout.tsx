import { ReactNode } from "react";

export default async function Layout(props: { children?: ReactNode }) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
