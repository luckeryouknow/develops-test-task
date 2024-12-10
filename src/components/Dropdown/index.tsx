import { ReactNode, useEffect, useState } from "react";

type Props = {
  dropdownButtonText: string;
  chooseItem: string | number;
  children: ReactNode;
};

export default function Dropdown({ dropdownButtonText, chooseItem, children }: Props) {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      setDisplayDropdown(!displayDropdown);
    } else {
      setIsMounted(true);
    }
  }, [chooseItem]);

  return (
    <div className="relative inline-block text-left">
      <div className="flex gap-1 items-center">
        <button
          onClick={() => setDisplayDropdown(!displayDropdown)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {dropdownButtonText}
        </button>
        <p>{chooseItem}</p>
      </div>

      {displayDropdown && <div>{children}</div>}
    </div>
  );
}
