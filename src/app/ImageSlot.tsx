'use client';

import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

/**
 * A photo placeholder. Drop a file into /public/images/<name> and it shows up.
 * Until the file exists, it renders a labelled placeholder so the layout is ready.
 *
 * Usage: <ImageSlot src="/images/harvard.jpg" label="Harvard — 2nd worldwide" />
 */
export function ImageSlot({
  src,
  label,
  className = '',
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#F5F0E8] ${className}`}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-[#D8CEBB] text-[#A99F8C]">
          <ImageIcon className="h-7 w-7" />
          <span className="px-4 text-center text-xs font-medium leading-snug">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
