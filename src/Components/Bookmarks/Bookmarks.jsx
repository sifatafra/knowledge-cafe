import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-1/3 ml-8 text-center">

            <h1 className='text-2xl my-5 border-2 p-4 rounded-md text-blue-500'>Reading Time: {readingTime}</h1>
            <h1 className="text-2xl bg-gray-300 mb-5 rounded-md shadow-2xl font-bold p-5">Bookmarked Blocks: {bookmarks.length}</h1>
            {bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number
};

export default Bookmarks;
