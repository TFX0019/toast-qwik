import type { QwikIntrinsicElements } from '@builder.io/qwik'

export function LucideX(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12"></path></svg>
  )
}
export default LucideX