import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps, router }) => (
  <>
    <Layout route={router.route}>
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
      h1,
      h2,
      b {
        font-weight: 600;
      }
      h2,
      b {
        color: #393939;
      }
      input,
      button {
        background: none;
        border: none;
        color: inherit;
      }
      button {
        cursor: pointer;
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
      .title {
        color: #393939;
        font-size: 2.4rem;
        margin-top: 0.8rem;
      }
      .small-title {
        color: #069c54;
        font-weight: 500;
      }
      @media (min-width: 540px) {
        .main-section {
          min-height: calc(100vh - 6rem);
        }
      }
      @media (min-width: 768px) {
        body {
          font-size: 1.6rem;
        }
        .title {
          font-size: 3.6rem;
        }
      }
    `}</style>
  </>
)

export default MyApp
