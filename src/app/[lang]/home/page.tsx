import { getDictionary } from '@/app/[lang]/dictionaries'
import type { PageParamsProps } from '@/types'

export default async function HomePage({ params: { lang } }: PageParamsProps) {
  const dict = await getDictionary(lang)
  return <div>{dict.home.title}</div>
}
