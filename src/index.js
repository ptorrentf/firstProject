import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBBL0tr9sg4LlbjSydcIFDZIy0u-RjhRxU';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

const App = () => {
  return (
    <div>
  <SearchBar />
  </div>
);
}

ReactDOM.render(<App />, document.querySelector('.container'));
