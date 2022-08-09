import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { data, getFilterValues } from '../utils/filter'

const PropertySearch = () => {
  const [filters, setFilters] = useState(data);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query})
  }

  return (
    <div className='flex flex-wrap gap-2 bg-gray-100 p-4  border-b border-gray-200 rounded-b-md'>
        <div className='text-2xl font-bold'>Sort Option:</div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
            {filters.map((filter) => (
              <div key={filter.queryName}>
                <select
                onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}
                className='p-2 bg-gray-100 cursor-pointer '
                >
                  <option value="">{filter.placeholder}</option>
                  {filter?.items?.map((item) => (
                    <option value={item.value} key={item.value}>{item.name}</option>
                  ))}
                </select>
              </div>
            ))}
        </div>
    </div>
  )
}

export default PropertySearch