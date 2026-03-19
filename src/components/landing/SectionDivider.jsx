import React from 'react';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
      <div className="w-2 h-2 rotate-45 border border-gold/40 mx-4" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}