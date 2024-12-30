import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DropdownMenuProps } from '@/types/navigation';

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-[#3B3835] rounded-[4px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
      <div className="py-2">
        {items.map((item, index) => {
          const itemHref = `/${item.toLowerCase().replace(/\s+/g, '-')}`;
          const isActive = pathname === itemHref;

          return (
            <Link
              key={index}
              href={itemHref}
              className={`block px-4 py-2 text-sm text-white transition-colors ${
                isActive ? 'bg-white bg-opacity-10 text-orange' : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <div className="absolute top-[1px] left-6 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-transparent border-b-[#3B3835] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"></div>
    </div>
  );
};

export default DropdownMenu;
