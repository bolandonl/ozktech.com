import Head from 'next/head'
import Title from '../components/Title'

function About() {
  return (
    <>
      <Head>
        <title>ozktech.com</title>
      </Head>
      <div className="my-16">
        <Title className="justify-center text-center" title="ozktech.com" />
        <div className="mt-6">
          <div className="text-lg flex justify-center">
            <div className="text-stone-700 dark:text-quicksilver flex-col justify-center">
              <div className="text-left space-y-6 max-w-3xl">
                <p className="max-w-prose">
                  <span className="ml-6">Not long after</span> moving to the Ozarks at the start of
                  2022, I started browsing the area&apos;s tech scene online. I was happy to
                  discover a lot of activity in the Ozarks, but it was scattered across multiple
                  websites and social media platforms. I decided to create this website to
                  consolidate all of the information I found into one place.
                </p>
                <p className="max-w-prose">
                  <span className="ml-6">That</span> led to what is now ozktech.com - a simple way
                  to find tech companies and jobs in the Ozarks. What started as a random Notes
                  document on my phone is now available as OSS to be shared, copied, and improved
                  upon. The intention is to make this a living document available to anyone who may
                  need it.
                </p>
                <p className="max-w-prose">
                  <span className="ml-6">If</span> any of the information on this website is
                  incorrect or there are known companies or startups that are missing, please create
                  an issue or open a pull request. Also, if 1) you are a new company or startup in
                  the Ozarks and would like to be added to the list or 2) you have any ideas or want
                  to contribute, please reach out.
                </p>
                <p className="dark:text-white text-black font-semibold max-w-prose">
                  <a
                    href="https://boland.onl"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Michael Boland
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
