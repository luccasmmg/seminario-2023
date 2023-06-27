export function HeroCard({ href, title, icon }) {
  return (
    <a href={href}>
      <div class="group relative my-auto flex h-full cursor-pointer items-center justify-center rounded-xl border border-slate-400">
        <div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.950)),var(--quick-links-hover-bg,theme(colors.red.950)))_padding-box,linear-gradient(to_top,theme(colors.red.900),theme(colors.amber.900),theme(colors.orange.800))_border-box] group-hover:opacity-100 "></div>
        <div class="relative flex items-center justify-center gap-x-2 rounded-xl p-6 text-slate-200">
          {icon}
          <h2 class="font-display text-center text-slate-200 ">{title}</h2>
        </div>
      </div>
    </a>
  )
}
