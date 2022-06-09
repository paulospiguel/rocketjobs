import { ReactElement } from "react";

interface GridLayoutProps {
  children: ReactElement;
}

export default function GridLayout({ children }: GridLayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
