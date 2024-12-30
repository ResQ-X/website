import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLinkProps } from '@/types/navigation';

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative font-[400] hover:animate-shake text-[14px] leading-[24px] tracking-[-2%] flex items-center gap-1 transition-colors duration-200 ${
        isActive ? 'text-orange' : 'text-white hover:text-orange'
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
