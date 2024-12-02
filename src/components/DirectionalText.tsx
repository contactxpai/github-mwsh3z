import { useDirection } from '../hooks/useDirection';
import { CSSProperties } from 'react';

interface DirectionalTextProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function DirectionalText({ children, className = '', style = {} }: DirectionalTextProps) {
  const { dir, dirClassName } = useDirection();

  return (
    <div 
      dir={dir}
      className={`${dirClassName} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}