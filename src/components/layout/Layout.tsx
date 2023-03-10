import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <main> {children} </main>
    </>
  );
};

export default Layout;
