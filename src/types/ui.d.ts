// src/types/ui.ts
import { ReactNode, ComponentType, ElementType } from "react";
import { ChipProps } from "@material-tailwind/react";

// ProfileInfoCard
export interface ProfileInfoCardProps {
  title: string;
  description?: string;
  details?: Record<string, string>;
  action?: ReactNode;
}

// StatisticsCard
export interface StatisticsCardProps {
  color?: string;
  title: string;
  value: string | number;
  icon: ReactNode;
  footer: ReactNode;
} 

// GenericTable
export type Column<T> = {
  width?: Width<string | number> | undefined;
  key: string;
  label: string;
  render?: (row: T) => ReactNode;
};

export interface GenericTableProps<T> {
  data: T[];
  columns: Column<T>[];
  getRowKey: (row: T) => string | number;
}

// Pagination
export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

// routes
export interface NavbarRoute {
  name: string;
  path: string;
  icon?: ComponentType<{ className?: string }>;
}

// Navbar
export interface NavbarProps {
  brandName?: string;
  routes: NavbarRoute[];
  action?: ReactNode;
}

// Sidenav Page
export interface SidenavPage {
  icon: ReactNode;
  name: string;
  path: string;
  sideNavHidden?: boolean;
}

// Sidenav Group
export interface SidenavRouteGroup {
  layout: string;
  title?: string;
  pages: SidenavPage[];
}

// Sidenav Props
export interface SidenavProps {
  brandImg?: string;
  brandName?: string;
  routes: SidenavRouteGroup[];
}

export type MTColor =
  | "blue"
  | "red"
  | "green"
  | "amber"
  | "teal"
  | "indigo"
  | "purple"
  | "pink"
  | "deep-orange"
  | "blue-gray"
  | "light-blue";

export type SidenavType = "dark" | "white" | "transparent";