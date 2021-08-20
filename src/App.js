import './App.css';
import { Provider, useDispatch, connect } from 'react-redux';
import configureStore from './state-management/store/configureStore';
import { search, searchSuccess } from './state-management/actions/search';
import { useEffect } from 'react';
import { useState } from 'react';
import { SEARCH_SUCCESS } from './state-management/constants/search';

const store = configureStore();


function SearchComponent({ results, search }) {
  const [searchTerm, setSearchTerm] = useState("axios");
  const dispatch = useDispatch();
  useEffect(() => {
    search(searchTerm);

    //WITHOUT MIDDLEWARES

    // dispatch({
    //   type: SEARCH_SUCCESS,
    //   results: [],
    // });
  }, [searchTerm])
  return (
    <>
      <input placeholder="Search Packages" onChange={({ target: { value } }) => setSearchTerm(value)} />
      <div style={{ width: '100%', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {results.map(pckg => (
          <div style={{ width: 'min-content', border: 'solid 1px black', borderRadius: '5px', padding: '10px', margin: '10px' }}>
            <h1>{pckg?.package?.name}</h1>
            <h6>{pckg?.package?.publisher?.username}</h6>
            <h6>{pckg?.package?.publisher?.email}</h6>
            <h2>Maintainers</h2>
            {pckg?.package?.maintainers?.map(maintainer => (<ul>
              <li><span>{maintainer?.username}</span><span>{maintainer?.email}</span></li>
            </ul>))}
          </div>))}
      </div>
    </>
  );
}

const mapStateToProps = (state, props) => ({
  results: state.search.results,
});

const mapDispatchToProps = dispatch => ({
  // search: (searchTerm) => dispatch(searchSuccess(searchTerm)),
  search: (searchTerm) => dispatch(search(searchTerm)),
});


const ConnectedSearchComponent = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);


const App = () => (<Provider store={store}><ConnectedSearchComponent /></Provider>);
export default App;
