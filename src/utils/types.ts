import { ReactNode } from "react";

export interface RowData {
  ID: string;
  Name: string;
  Industry: string;
  City: string;
  State: string;
  Segment: string;
  OwnerID: string;
}

export interface Tableprops {
  data: RowData[];
}

export interface ButtonProps {
  children?: ReactNode;
  className: string;
}
