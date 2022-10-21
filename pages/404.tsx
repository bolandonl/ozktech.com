import Head from 'next/head'
import Title from '../components/Title'

function NotFound() {
  const title = (
    <span className="flex">
      <span className="hidden sm:block">Page&nbsp;</span>Not Found
    </span>
  )

  return (
    <>
      <Head>
        <title>ozktech.com</title>
      </Head>
      <Title className="justify-center text-center" title={title} />
      <div className="mt-2">
        <div className="text-lg flex justify-center">
          <div className="text-stone-700 dark:text-quicksilver flex-col justify-center">
            <div className="text-center">
              <span className="flex">
                404 - <span className="hidden sm:flex">&nbsp;Please check&nbsp;</span>
                <span className="flex sm:hidden">&nbsp;Check&nbsp;</span> URL.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
