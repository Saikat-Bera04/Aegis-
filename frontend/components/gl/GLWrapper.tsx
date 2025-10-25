'use client';

import dynamic from 'next/dynamic';

const GL = dynamic(() => import('@/components/gl').then(mod => mod.GL), { 
  ssr: false,
  loading: () => null
});

export default function GLWrapper({ hovering = false }: { hovering?: boolean }) {
  return <GL hovering={hovering} />;
}
