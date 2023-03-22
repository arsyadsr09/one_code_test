import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {CustomMenu} from './styled';

type Props = {
  children?: React.ReactNode;
};

export default function DropdownHeader({children}: Props) {
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const onMenuClick = (id: string) => {
    switch (id) {
      case 'profile':
        navigate('/profile');
        return;
      default:
        return;
    }
  };

  return (
    <>
      <div className="dropdown relative">
        <div className="pointer disabled-highlight" onClick={handleDropDown}>
          {children}
        </div>

        <div
          id="dropdown"
          className={`w-44 bg-white rounded divide-y divide-gray-100 shadow absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            isOpen ? 'z-10' : '-z-10'
          }`}
        >
          <CustomMenu className="z-10 w-44 bg-white divide-y divide-gray-100 ">
            <li>
              <a
                className="block py-2 px-4 hover:bg-gray-100 disabled-highlight pointer"
                onClick={() => onMenuClick('profile')}
              >
                Detail Profile
              </a>
            </li>
          </CustomMenu>
        </div>
      </div>
    </>
  );
}
