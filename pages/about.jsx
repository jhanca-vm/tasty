import Head from 'next/head'
import Image from 'next/image'

const About = () => (
  <>
    <Head>
      <title>About Us</title>
    </Head>

    <section className="main-section">
      <div>
        <span className="small-title">About Us</span>
        <h1 className="title">
          We cook the best <br /> tasty food
        </h1>
        <p>
          We cook the best food in the entire city, with excellent customer
          service, the best meals and at the best price, visit us.
        </p>
      </div>
      <figure>
        <Image
          className="rounded"
          src="https://imgur.com/sZ4cXD4.jpg"
          alt="tasty food"
          width="800"
          height="800"
        />
      </figure>
    </section>

    <style jsx>{`
      section {
        padding: 1.2rem 0 3.6rem;
        text-align: center;
      }
      p {
        line-height: 1.6;
        margin: 1.6rem 0 2.4rem;
      }
      figure {
        padding: 0 20px;
      }
      @media (min-width: 540px) {
        section {
          column-gap: 16px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: left;
        }
        div,
        figure {
          align-self: center;
        }
        figure {
          grid-column-start: 1;
          grid-row-start: 1;
          padding: 0 12px 0 0;
        }
        p {
          margin-bottom: 0;
        }
      }
      @media (min-width: 1024px) {
        figure {
          padding-right: 36px;
        }
      }
    `}</style>
  </>
)

export default About
