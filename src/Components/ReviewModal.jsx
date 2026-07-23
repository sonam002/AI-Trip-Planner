import { useState } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';

const ReviewModal = ({ isOpen, onClose, onSubmit, destinationName }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [visitAgain, setVisitAgain] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment, visitAgain });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        >
          <FaTimes className="text-xl" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Visited {destinationName}?
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Rate your experience
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl transition-colors ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Review
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              rows="3"
              placeholder="What did you like the most?"
              required
            ></textarea>
          </div>

          <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
            <input
              type="checkbox"
              id="visitAgain"
              checked={visitAgain}
              onChange={(e) => setVisitAgain(e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="visitAgain" className="text-gray-700 dark:text-gray-200 font-medium cursor-pointer">
              I would like to visit this place again!
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-transform transform active:scale-95"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;