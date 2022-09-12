import { NavLink, routes } from "@redwoodjs/router";

const RightTabs = () => {
  return (
    <div className={"flex flex-col justify-between w-6 h-full border-l border-ice-700"}>
      <div>
        <div
          className={
            "flex w-full items-center justify-center whitespace-nowrap p-2 text-3xs uppercase text-ice-400"
          }
          style={{
            writingMode: "vertical-lr",
          }}
        >
          {"Todo List"}
        </div>
      </div>
      <NavLink activeClassName={"bg-ice-700"} to={routes.settings()}>
        <div
          className={
            "flex w-full items-center justify-center whitespace-nowrap p-2 text-3xs uppercase text-ice-400"
          }
          style={{
            writingMode: "vertical-lr",
          }}
        >
          Settings
        </div>
      </NavLink>
    </div>
  );
};

export default RightTabs;
