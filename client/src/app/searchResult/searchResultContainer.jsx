import { Suspense } from 'react';
import Loading from '../Components/Loading';
import SearchResult from './page';

const SearchResult = () => {
  return (
    <Suspense fallback={<Loading/>}>
    <SearchResult />
    </Suspense>
  );
}

export default SearchResult