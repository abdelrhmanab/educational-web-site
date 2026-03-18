
type NavItem = {
  name: string;
  path: string;
};

export type NavItems = {
  name: string;
  path: string;
  itemList?: NavItem[]; // optional عشان مش كل لينك عنده dropdown
};

