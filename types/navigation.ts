import { LucideIcon } from 'lucide-react';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export interface DropdownMenuItem {
  text: string;
  href: string;
}

export interface DropdownMenuProps {
  items: string[];
}

export interface NavigationLink {
  text: string;
  href: string;
  className?: string;
  dropdownItems?: string[];
  icon?: LucideIcon;  // Changed from IconType to LucideIcon
}
