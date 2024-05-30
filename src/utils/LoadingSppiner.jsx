import { HiOutlineRefresh } from 'react-icons/hi';
import './Styles.css';

export default function LoadingSpinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-20 z-50">
      <div className="text-white">
        <HiOutlineRefresh className="animate-spin h-12 w-12" />
      </div>
    </div>
  );
}
