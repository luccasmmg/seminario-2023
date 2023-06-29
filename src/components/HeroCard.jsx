import { Poppins } from 'next/font/google'
 
const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export function HeroCard({ href, title, subtitle }) {
  return (
    <a className={poppins.className} href={href}>
      <div class="group relative my-auto flex h-full cursor-pointer items-center justify-center rounded-xl border border-slate-400 bg-red-600">
        <div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.950)),var(--quick-links-hover-bg,theme(colors.red.950)))_padding-box,linear-gradient(to_top,theme(colors.red.900),theme(colors.amber.900),theme(colors.orange.800))_border-box] group-hover:opacity-100 "></div>
        <div class="relative flex flex-col items-center justify-center gap-x-2 rounded-xl px-4 py-2 text-slate-200">
          <h2 class="font-display text-center text-white ">{title}</h2>
          <h2 class="font-display text-center text-white ">{subtitle}</h2>
        </div>
      </div>
    </a>
  )
}
