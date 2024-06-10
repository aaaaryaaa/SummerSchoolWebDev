import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../sidebar.css'; // Make sure to create a Sidebar.css file for the CSS
const Sidebar = ({ domain }) => {
  const location = useLocation()

  return (
    <nav className="sidebar">
      <ul>
        <li className='h-40'>

        </li>
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
      </ul>
    </nav>
  )
}

export default Sidebar
