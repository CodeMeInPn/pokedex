export interface HeaderProps {}
export interface HeaderViewProps extends HeaderProps {
  onClick: () => void;
  sortType: SortType;
}

export type SortType = "az" | "number";
