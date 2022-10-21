/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import SEO from '../next-seo.config'
import COMPANIES, { COMPANY } from '../data/companies'
import TableRow from '../components/TableRow'

function Home() {
  return (
    <>
      <Head>
        <title>ozktech.com</title>
      </Head>
      <DefaultSeo {...SEO} />
      <div className="flex flex-col mb-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      One-liner
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Social
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-right text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      ({COMPANIES.length})
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {COMPANIES.sort((a, b) => {
                    if (a.name < b.name) {
                      return -1
                    }
                  }).map((company: COMPANY) => (
                    <TableRow key={company.name} {...company} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
