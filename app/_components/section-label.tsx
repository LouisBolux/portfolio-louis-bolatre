export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4">
      {children}
    </p>
  );
}
