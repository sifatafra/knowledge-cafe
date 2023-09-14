import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <li className='shadow-2xl bg-gray-300 rounded-md mb-2 font-semibold space-y-3 p-5'>{title} </li>

        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.shape({
        title: PropTypes.string.isRequired, // Assuming title is a required string
        // Add other propTypes for other properties of bookmark if needed
    }).isRequired,
};

export default Bookmark;
