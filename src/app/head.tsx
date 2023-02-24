import { Default } from "./DefaultTags"

import { description, title } from "@/components/siteSetting"

export default function Head() {

  return (
    <>
      <title>{title}</title>
      <Default description={description} title={title} imgurl="" />
    </>
  )
}
