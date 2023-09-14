
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs/Blogs'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState([]);

  const addToBookmarks = blog => {
    const handleBookmarks = [...bookmarks, blog];
    setBookmarks(handleBookmarks);

  }

  const handleMarkAsRead = time => {
    const newReadingTimeString = readingTime + time;
    const newReadingTime = parseFloat(newReadingTimeString)
    setReadingTime(newReadingTime);
    console.log(time)
  }
  return (
    <>
      <Header></Header>
      <div className='flex mx-20'>
        <Blogs addToBookmarks={addToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

      </div>

    </>
  )
}

export default App
