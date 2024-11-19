interface SubLink {
  title: string;
  linkAddress: string;
}

export interface DropdownItemType {
  linkTitle: string;
  subLinks: SubLink[];
}
