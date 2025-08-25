import React, { ReactNode } from 'react'
import clsx from 'clsx'


type Props = {
  icon: ReactNode
    link:string,
    text:string,
    className:string
}
export default function MenuSidebar({link,text, className, icon}: Props)  {
  return (
    <a href={link} className={clsx('w-full  rounded-xl py-3 px-5 font-semibold flex gap-2 hover:bg-red-700 hover:text-white active:hover:text-shadow-lg/10 hover:scale-105 hover:shadow-2xl ease-in-out duration-300 transition-all', className)}>{icon}{text}</a>
  )
}
