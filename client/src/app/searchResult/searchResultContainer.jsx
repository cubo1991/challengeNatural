'use client'
import { Suspense } from 'react';
import Loading from '../../Components/Loading';

import SearchResult from './page';

const SearchResultContainer = () => {
  return (
 <Suspense fallback={<Loading/>}>
    <SearchResult  />
    </Suspense>
  )
}

export default SearchResultContainer