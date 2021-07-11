import Head from 'next/head'
import Image from 'next/image'

const App = () => (
  <>
    <Head>
      <title>Download the App</title>
    </Head>

    <section className="main-section">
      <div>
        <span className="small-title">App</span>
        <h1 className="title">App is aviable</h1>
        <p>
          Find our application and download it, you can make reservations, food
          orders, see your deliveries on the way and much more.
        </p>
        <div>
          <figure>
            <Image
              src="https://imgur.com/FGOYT6d.png"
              alt="App Store"
              width="300"
              height="89"
            />
          </figure>
          <figure>
            <Image
              src="https://imgur.com/hPaZ9RS.png"
              alt="Google Play"
              width="300"
              height="89"
            />
          </figure>
        </div>
      </div>
      <figure>
        <Image
          src="https://imgur.com/a6xXPSe.png"
          alt="app"
          width="565"
          height="812"
        />
      </figure>
    </section>

    <style jsx>{`
      section {
        padding: 1.2rem 0 2.4rem;
        text-align: center;
      }
      p {
        margin: 2.4rem 0 4rem;
      }
      section > figure {
        margin: 4rem auto 0;
        width: 230px;
      }
      div > div {
        display: flex;
        justify-content: center;
      }
      div figure {
        cursor: pointer;
        padding: 0 8px;
        width: 120px;
      }
      @media (min-width: 568px) {
        section {
          column-gap: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 0 0 4rem;
          text-align: left;
        }
        section > figure {
          grid-column-start: 1;
          grid-row-start: 1;
          width: auto;
        }
        div,
        section > figure {
          align-self: center;
        }
        div > div {
          justify-content: left;
        }
        div figure:first-of-type {
          padding-left: 0;
        }
      }
    `}</style>
  </>
)

export default App
