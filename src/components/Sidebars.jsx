import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Settings,
  User,
  Menu,
  Car,
  List,
  FormInput,
  Search,
  Star,
} from "lucide-react";

export default function Sidebars() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen p-4   transition-all duration-300 ${
          isOpen ? "w-48" : "w-16"
        }`}
      >
        {/* Toggle Button */}
        <button
          className="p-2 mb-4 bg-gray-800 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={20} />
        </button>

        {/* Nav Items */}
        <nav className="space-y-4">
          <Link
            to="/"
            className="flex items-center p-2 rounded hover:bg-gray-700"
          >
            <Home size={20} />
            {isOpen && <span className="ml-2">Home</span>}
          </Link>

          <Link
            to="/cars"
            className="flex items-center p-2 rounded hover:bg-gray-700"
          >
            <Car size={20} />
            {isOpen && <span className="ml-2">Cars Sorting</span>}
          </Link>

          <Link
            to="/random-car"
            className="flex items-center p-2 rounded hover:bg-gray-700"
          >
            <List size={20} />
            {isOpen && <span className="ml-2">Random Car</span>}
          </Link>

          <Link
            to="/multi-form"
            className="flex items-center p-2 rounded hover:bg-gray-700"
          >
            <FormInput size={20} />
            {isOpen && <span className="ml-2">Multi Form</span>}
          </Link>

          <Link
            to="/submit-form"
            className="flex items-center p-2 rounded hover:bg-gray-700"
          >
            <FormInput size={20} />
            {isOpen && <span className="ml-2">Submit Form</span>}
          </Link>

          <Link
            to="/filter-search"
            className="flex items-center p-2 rounded hover:bg-gray-700"
          >
            <Search size={20} />
            {isOpen && <span className="ml-2">Filter Search</span>}
          </Link>

          <Link
            to="/memo"
            className="flex items-center p-2 rounded hover:bg-gray-700"
          >
            <Settings size={20} />
            {isOpen && <span className="ml-2">Memo</span>}
          </Link>

          <Link
            to="/traffic"
            className="flex items-center p-2 rounded hover:bg-gray-700"
          >
            <Settings size={20} />
            {isOpen && <span className="ml-2">Traffic</span>}
          </Link>

          <Link
            to="/star"
            className="flex items-center p-2 rounded hover:bg-gray-700"
          >
            <Star size={20} />
            {isOpen && <span className="ml-2">Star</span>}
          </Link>
          <Link
            to="/coupon"
            className="flex items-center p-1 rounded hover:bg-gray-700"
          >
            <Settings size={20} />
            {isOpen && <span className="ml-2">Coupon</span>}
          </Link>
          <Link
            to="/options"
            className="flex items-center p-1 rounded hover:bg-gray-700"
          >
            <Star size={20} />
            {isOpen && <span className="ml-2">Options</span>}
          </Link>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4">Main Content</div>
    </div>
  );
}
