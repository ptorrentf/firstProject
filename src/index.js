import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBBL0tr9sg4LlbjSydcIFDZIy0u-RjhRxU';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');         
  }

videoSearch(term) {
  YTSearch({key: API_KEY, term: term}, (videos) => { //Se puede factorizar function(data) = (data) =>
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }); //se factoriza videos: videos = videos Esto porque son el mismo string, caso particular.
    });
}

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
