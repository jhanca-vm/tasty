import Head from 'next/head'
import Image from 'next/image'
import api from '../lib/api'

const Services = ({ services }) => (
  <>
    <Head>
      <title>Services</title>
    </Head>

    <section className="main-section">
      <span className="small-title">Offering</span>
      <h1 className="title">Our amazing services</h1>
      <div>
        {services.map(({ id, title, description, img }) => (
          <article key={id}>
            <Image src={img} alt={title} width="64" height="64" />
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>

    <style jsx>{`
      section {
        padding: 1.2rem 0 3.6rem;
        text-align: center;
      }
      div {
        display: grid;
        margin-top: 2.8rem;
        padding: 0 24px;
        row-gap: 4rem;
      }
      h2 {
        font-size: 1.6rem;
        margin: 1.2rem 0 0.8rem;
      }
      @media (min-width: 540px) {
        div {
          column-gap: 30px;
          grid-template-columns: 1fr 1fr;
          padding: 0;
        }
      }
      @media (min-width: 768px) {
        div {
          grid-template-columns: repeat(3, 1fr);
          margin-top: 4.8rem;
        }
        h2 {
          font-size: 2rem;
        }
      }
      @media (min-width: 1024px) {
        section {
          padding: 0 0 6rem;
        }
      }
      @media (min-width: 540px) and (max-width: 767px) {
        div article:last-of-type {
          grid-column: span 2;
          margin: 0 auto;
          width: calc(50% - 15px);
        }
      }
    `}</style>
  </>
)

export async function getServerSideProps({ req }) {
  const services = await api.get('/services', req)

  return { props: { services } }
}

export default Services
