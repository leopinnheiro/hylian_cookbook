interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-2 border border-dashed border-ash-steel/40 bg-deep-steel/50 px-6 py-12 text-center">
      <p className="font-chrome text-sm uppercase tracking-[0.2em] text-sheikah">{title}</p>
      <p className="max-w-sm font-dish text-base text-ash-steel">{description}</p>
    </div>
  );
}
