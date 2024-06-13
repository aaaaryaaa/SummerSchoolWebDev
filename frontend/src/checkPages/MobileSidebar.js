import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import downarrow from '../assets/arrowdown.svg';

export default function MobileSidebar({ domain }) {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className="centereddiv pt-5" ref={dropdownRef}>
      <label className="dropdown">

        <div className="border border-[#00CDB7] pl-2 pr-2 py-2 font-bold text-[#00CDB7] flex flex-row justify-center align-middle">
          Choose Week
          <img src={downarrow} alt=">" className='h-7 w-7 text-[red]' />
        </div>

        <button onClick={handleToggle} />

        {isOpen && (
          <ul className="dd-menu">
            <li>
              <Link
                to={`/${domain}/week1`}
                className={location.pathname === `/${domain}/week1` ? 'active' : ''}
              >
                Week 1
              </Link>
            </li>
            <li>
              <Link
                to={`/${domain}/week2`}
                className={location.pathname === `/${domain}/week2` ? 'active' : ''}
              >
                Week 2
              </Link>
            </li>
            <li>
              <Link
                to={`/${domain}/week3`}
                className={location.pathname === `/${domain}/week3` ? 'active' : ''}
              >
                Week 3
              </Link>
            </li>
            <li>
              <Link
                to={`/${domain}/week4`}
                className={location.pathname === `/${domain}/week4` ? 'active' : ''}
              >
                Week 4
              </Link>
            </li>
            {domain === 'webdev' && (
              <>
                <li>
                  <Link
                    to={`/${domain}/week5`}
                    className={
                      location.pathname === `/${domain}/week5` ? 'active' : ''
                    }
                  >
                    Week 5
                  </Link>
                </li>
              </>
            )}
            {domain === 'dsa' && (
              <>
                <li>
                  <Link
                    to={`/${domain}/week5`}
                    className={
                      location.pathname === `/${domain}/week5` ? 'active' : ''
                    }
                  >
                    Week 5
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${domain}/week6`}
                    className={
                      location.pathname === `/${domain}/week6` ? 'active' : ''
                    }
                  >
                    Week 6
                  </Link>
                </li>
              </>
            )}
            <li className="divider"></li>
            {domain !== 'webdev' && (
              <li>
                <Link to={`/webdev`} className='font-semibold'>Go To WebDev</Link>
              </li>
            )}
            {domain !== 'appdev' && (
              <li>
                <Link to={`/appdev`} className='font-semibold'>Go To AppDev</Link>
              </li>
            )}
            {domain !== 'dsa' && (
              <li>
                <Link to={`/dsa`} className='font-semibold'>Go To DSA</Link>
              </li>
            )}
            {domain !== 'aiml' && (
              <li>
                <Link to={`/aiml`} className='font-semibold'>Go To AIML</Link>
              </li>
            )}
            {domain !== 'design' && (
              <li>
                <Link to={`/design`} className='font-semibold'>Go To Design</Link>
              </li>
            )}
            <li>
              <Link to={`/`} className='font-semibold text-[#00CDB7]'>Go To Home</Link>
            </li>
          </ul>
        )}
      </label>
    </div>
  )
}
