export default function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/8 text-white/60">
      {label}
    </span>
  )
}
