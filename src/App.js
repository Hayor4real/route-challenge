import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPost] = useState([
    {
      id: 1,
      title: 'My First Post',
      datetime: 'August 21, 2022 19:20 PM',
      body: 'this is the body section where you ahve everything you need to know about the body',
    },
    {
      id: 2,
      title: 'My First Post',
      datetime: 'August 21, 2022 19:20 PM',
      body: 'this is the body section where you ahve everything you need to know about the body',
    },
    {
      id: 3,
      title: 'My First Post',
      datetime: 'August 21, 2022 19:20 PM',
      body: 'this is the body section where you ahve everything you need to know about the body',
    },
    {
      id: 4,
      title: 'My First Post',
      datetime: 'August 21, 2022 19:20 PM',
      body: 'this is the body section where you ahve everything you need to know about the body',
    },
  ]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id == id);
    setPost(postsList);
    history.push('/');
  };

  return (
    <div className='App'>
      <Header title='React JS Blog' />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path='/'>
          <Home posts={posts} />
        </Route>
        <Route exact path='/post'>
          <NewPost />
        </Route>
        <Route path='/post/:id'>
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
