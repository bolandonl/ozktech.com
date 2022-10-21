import React from 'react'
import { FiGithub, FiTwitter } from 'react-icons/fi'

function SocialIcons() {
  return (
    <div className="flex pt-12 justify-center">
      <button type="button" className="mx-4">
        <a href="https://twitter.com/bolandonl" target="_blank" rel="noreferrer">
          <FiTwitter className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200" />
        </a>
      </button>
      <button type="button" className="mx-4">
        <a href="https://github.com/bolandonl" target="_blank" rel="noreferrer">
          <FiGithub className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200" />
        </a>
      </button>
    </div>
  )
}

export default SocialIcons
