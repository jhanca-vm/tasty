import { useState } from 'react'
import CustomLink from './CustomLink'

export default function Navbar() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const links = ['about', 'services', 'menu', 'app']

  const hideMenu = event => {
    if (event.target.nodeName === 'A' && menuIsVisible) {
      setMenuIsVisible(false)
    }
  }

  return (
    <>
      <header>
        <nav onClick={hideMenu}>
          <CustomLink href="/">Tasty</CustomLink>
          <div>
            <button onClick={() => setMenuIsVisible(false)}>
              <i className="bx bx-x" />
            </button>
            <ul>
              {links.map(link => (
                <li key={link}>
                  <CustomLink href={`/${link}`}>{link}</CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={() => setMenuIsVisible(true)}>
            <i className="bx bx-menu" />
          </button>
        </nav>
      </header>

      <style jsx>{`
        header {
          font-weight: 500;
          padding: 0 16px;
        }
        nav {
          align-items: center;
          display: flex;
          height: 4.8rem;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1024px;
          width: 100%;
        }
        div {
          background-color: #069c54;
          box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
          color: #fbfefd;
          height: 100%;
          position: fixed;
          right: ${menuIsVisible ? 0 : '-100%'};
          top: 0;
          transition: 0.4s;
          width: 56%;
          z-index: 1;
        }
        ul {
          text-align: center;
          text-transform: capitalize;
        }
        li {
          letter-spacing: 0.05rem;
          margin-bottom: 3.2rem;
        }
        button {
          font-size: 2.08rem;
        }
        div button {
          display: block;
          font-size: 2.4rem;
          margin: 0.85rem 16px 1.2rem auto;
        }
        @media (min-width: 540px) {
          header {
            padding: 0 32px;
          }
          header button {
            display: none;
          }
          nav {
            height: 6rem;
          }
          div {
            background-color: transparent;
            box-shadow: none;
            color: inherit;
            height: fit-content;
            position: static;
            width: fit-content;
          }
          ul {
            display: flex;
            font-size: 1.45rem;
          }
          li {
            margin: 0 0 0 40px;
          }
        }
      `}</style>
    </>
  )
}
