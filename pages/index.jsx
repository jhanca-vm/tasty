import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => (
  <>
    <Head>
      <title>Tasty</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <section className="main-section">
      <div>
        <h1>Tasty food</h1>
        <p>
          Try the best food of <br /> the week
        </p>
        <Link href="/menu">
          <a>View Menu</a>
        </Link>
      </div>
      <figure>
        <Image
          src="https://imgur.com/rPVAHfc.png"
          alt="plate"
          width="724"
          height="733"
        />
      </figure>
    </section>

    <style jsx>{`
      section {
        padding: 0 4px 2rem;
      }
      h1 {
        color: #069c54;
        font-size: 3.6rem;
      }
      p {
        color: #393939;
        font-size: 2.4rem;
        font-weight: 600;
      }
      a {
        background-color: #069c54;
        border-radius: 0.8rem;
        box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
        color: #fbfefd;
        display: inline-block;
        margin: 2rem 0;
        padding: 1.2rem 1.6rem;
      }
      a:hover {
        background-color: #048654;
      }
      @media (min-width: 540px) {
        section {
          display: grid;
          grid-template-columns: 56% 42%;
          padding: 2rem 0 4rem;
        }
        div,
        figure {
          align-self: center;
        }
      }
      @media (min-width: 768px) {
        h1 {
          font-size: 6.4rem;
        }
        p {
          font-size: 3.6rem;
        }
      }
    `}</style>
  </>
)

export default Home
