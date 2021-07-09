import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>

    <style jsx global>{`
      * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
      }
      html {
        color: #707070;
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
      }
      body {
        background-color: #fbfefd;
        font-size: 1.5rem;
      }
      h1 {
        font-weight: 600;
      }
      input,
      button {
        background: none;
        border: none;
        color: inherit;
      }
      ul {
        list-style: none;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      .rounded {
        border-radius: 0.8rem;
      }
      .main-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: calc(100vh - 4.8rem);
      }
      @media (min-width: 540px) {
        .main-section {
          min-height: calc(100vh - 6rem);
        }
      }
    `}</style>
  </>
)

export default MyApp
