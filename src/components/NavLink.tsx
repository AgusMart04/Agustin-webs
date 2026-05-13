import { Link } from '@tanstack/react-router'
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, to, children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        to={to}
        className={({ isActive }) =>
          cn(className, isActive && activeClassName)
        }
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
