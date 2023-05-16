import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({blok}) => (
    <Link href={blok.link.cached_url} className="text-base font-medium text-gray-500 hover:text-gray-900" {...storyblokEditable(blok)}>
      {blok.name}
    </Link>
)
export default MenuLink