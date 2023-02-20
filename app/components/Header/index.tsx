import { useState } from "react";
import type { SortType } from "./types";
import HeaderView from "./view";

const Header = () => {
  const [sortType, setSortType] = useState<SortType>("az");
  const handleSortType = () =>
    sortType === "az" ? setSortType("number") : setSortType("az");

  return <HeaderView sortType={sortType} onClick={() => handleSortType()} />;
};

export default Header;
