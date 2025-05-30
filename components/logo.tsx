import Image from "next/image"
import Link from "next/link"
import React from "react"

const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };
  
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  
  interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
  }
  
  export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
    return (
      <Link href="/" className={`flex items-center space-x-3 ${className}`}>
        <Image
          src="/thinkg.png"
          alt="Think-Lab Group"
          width={90}
          height={40}
          className={sizeClasses[size]}
        />
      </Link>
    );
  }
