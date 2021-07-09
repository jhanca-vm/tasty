import Navbar from './Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>

    <style jsx>{`
      main {
        margin: 0 auto;
        max-width: 900px;
        padding: 0 16px;
      }
      @media (min-width: 540px) {
        main {
          padding: 0 32px;
        }
      }
    `}</style>
  </>
)

export default Layout
