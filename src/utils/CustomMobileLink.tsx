'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
}

export const CustomMobileLink: FC<CustomMobileLinkProps> = ({
  href,
  title,
  className = '',
}) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`absolute -bottom-0.5 left-0 inline-block h-[1px] bg-black
      transition-[width] duration-300 ease-in-out group-hover:w-full ${
        pathname === href ? 'w-full' : 'w-0'
      }
    `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
