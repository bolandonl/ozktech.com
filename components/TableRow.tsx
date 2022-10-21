/* eslint-disable react/destructuring-assignment */

import { COMPANY } from '../data/companies'
import SocialMedia from './SocialMedia'

const formatFilePath = (name: string) => name?.replace(/ /g, '_').toLowerCase()

function TableRow(company: COMPANY) {
  let categoryClassName = 'bg-green-100 text-green-800'

  if (company.category === 'Public') {
    categoryClassName = 'bg-blue-100 text-blue-800'
  } else if (company.category === 'Private') {
    categoryClassName = 'bg-orange-100 text-orange-800'
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              loading="lazy"
              className="h-10 w-10 rounded-full"
              src={`/logos/${formatFilePath(company.name)}.jpg`}
              alt={company.name}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">{company.name}</div>
            <div className="text-sm leading-5 text-gray-500">
              {company.city}, {company?.state}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm leading-5 text-gray-900 min-w-[400px]">{company.description}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <span
          className={`${categoryClassName} px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
        >
          {company.category}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <SocialMedia {...company} />
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        <a
          href={company.careers}
          target="_blank"
          className="text-blue-600 hover:text-blue-900"
          rel="noreferrer"
        >
          View Jobs
        </a>
      </td>
    </tr>
  )
}

export default TableRow
