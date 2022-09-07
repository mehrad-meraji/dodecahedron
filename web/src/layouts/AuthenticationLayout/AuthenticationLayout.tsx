type AuthenticationLayoutProps = {
  children?: React.ReactNode;
};

const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
  return (
    <section className={"flex h-full flex-col"}>
      <section className={"grid grow grid-cols-1 lg:grid-cols-2"}>
        <section
          className={"bg-cover bg-center bg-no-repeat"}
          style={{
            backgroundImage: "url(/images/auth-background.webp)",
          }}
        ></section>
        <section
          className={
            "flex w-full items-center justify-center border-ice-700 lg:border-l"
          }
        >
          {children}
        </section>
      </section>
      <footer
        className={
          "flex w-full items-center justify-center border-t border-ice-700 py-2 text-3xs"
        }
      >
        Copyright © 2022
      </footer>
    </section>
  );
};

export default AuthenticationLayout;
