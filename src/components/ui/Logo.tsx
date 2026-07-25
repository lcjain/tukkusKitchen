import { memo } from 'react';

function LogoComponent() {
  return (
    <div className="inline-flex items-center gap-3">
      <img
        src="/logo.jpeg"
        alt="Tukku's Kitchen logo"
        className="h-12 w-auto rounded-full object-contain"
      />
      <span className="sr-only">Tukku's Kitchen</span>
    </div>
  );
}

export const Logo = memo(LogoComponent);
