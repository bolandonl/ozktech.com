import React from 'react'
import { FiGithub, FiZap, FiTwitter, FiLinkedin } from 'react-icons/fi'

function SocialIcons() {
  return (
    <div className="flex pt-12 justify-center">
      <button type="button" className="mx-4">
        <a href="https://twitter.com/bolandonl" target="_blank" rel="noreferrer">
          <FiTwitter className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200" />
        </a>
      </button>
      <button type="button" className="mx-4">
        <a href="https://linkedin.com/in/bolandonl" target="_blank" rel="noreferrer">
          <FiLinkedin className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver dark:hover:text-slate-200" />
        </a>
      </button>
      <button type="button" className="mx-4">
        <a href="https://github.com/bolandonl" target="_blank" rel="noreferrer">
          <FiGithub className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200" />
        </a>
      </button>
      <button type="button" className="mx-4">
        <a href="https://strike.me/bolandonl" target="_blank" rel="noreferrer">
          <FiZap className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200" />
        </a>
      </button>
    </div>
  )
}

export default SocialIcons
