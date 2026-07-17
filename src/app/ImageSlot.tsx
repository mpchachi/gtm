'use client';

import { useState } from 'react';
import { ImageIcon, User } from 'lucide-react';

/**
 * A photo placeholder. Drop a file into /public/images/<name> and it shows up.
 * Until the file exists, it renders a labelled placeholder so the layout is ready.
 */
export function ImageSlot({
  src,
  label,
  className = '',
  fit = 'cover',
}: {
  src: string;
  label: string;
  className?: string;
  fit?: 'cover' | 'contain';
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#F5F0E8] ${className}`}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          onError={() => setFailed(true)}
          className={`h-full w-full ${fit === 'contain' ? 'object-contain p-3' : 'object-cover'}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-[#D8CEBB] text-[#A99F8C]">
          <ImageIcon className="h-7 w-7" />
          <span className="px-4 text-center text-xs font-medium leading-snug">{label}</span>
        </div>
      )}
    </div>
  );
}

/**
 * A person card: circular photo + name + role caption underneath.
 * Drop /public/images/<file> to fill it; until then shows a placeholder avatar.
 */
export function PersonSlot({
  src,
  name,
  role,
  size = 'md',
}: {
  src: string;
  name: string;
  role: string;
  size?: 'sm' | 'md';
}) {
  const [failed, setFailed] = useState(false);
  const dim = size === 'sm' ? 'h-20 w-20' : 'h-28 w-28';

  return (
    <div className="flex flex-col items-center text-center w-32">
      <div className={`${dim} overflow-hidden rounded-full bg-[#F5F0E8] border border-[#E8E0D0]`}>
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={name}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#B8AE9B]">
            <User className="h-8 w-8" />
          </div>
        )}
      </div>
      <div className="mt-3 text-sm font-semibold text-[#1A1F3C] leading-tight">{name}</div>
      <div className="text-xs text-[#6B7689] leading-tight">{role}</div>
    </div>
  );
}
