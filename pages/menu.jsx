import Head from 'next/head'
import Image from 'next/image'
import api from '../lib/api'

const Menu = ({ menu }) => (
  <>
    <Head>
      <title>Menu of the week</title>
    </Head>

    <section className="main-section">
      <span className="small-title">Special</span>
      <h1 className="title">Menu of the week</h1>
      <div>
        {menu.map(({ id, img, plate, description, price }) => (
          <article key={id}>
            <figure>
              <Image src={img} alt={plate} width="200" height="200" />
            </figure>
            <h2>{plate}</h2>
            <p>{description}</p>
            <b>${price}</b>
            <button>
              <i className="bx bx-cart-alt" />
            </button>
          </article>
        ))}
      </div>
    </section>

    <style jsx>{`
      section {
        padding: 1.2rem 0 4rem;
        text-align: center;
      }
      div {
        column-gap: 24px;
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 210px));
        justify-content: center;
        margin-top: 2.4rem;
        row-gap: 24px;
        text-align: left;
      }
      article {
        background-color: white;
        border-radius: 0.8rem;
        box-shadow: 0 2px 4px rgb(3 74 40 / 15%);
        font-size: 1.3rem;
        padding: 12px;
        position: relative;
      }
      figure {
        margin: 0 auto;
        width: 100px;
      }
      h2 {
        font-size: 1.5rem;
        margin-top: 1.6rem;
      }
      p {
        margin-bottom: 0.8rem;
      }
      button {
        background-color: #069c54;
        border-radius: 0.8rem 0 0.8rem 0;
        bottom: 0;
        color: white;
        display: flex;
        font-size: 1.6rem;
        padding: 1rem 1.3rem;
        position: absolute;
        right: 0;
      }
      @media (min-width: 720px) {
        section {
          padding: 1.2rem 0 5.2rem;
        }
        div {
          column-gap: 64px;
          grid-template-columns: repeat(3, minmax(auto, 210px));
        }
        article {
          font-size: 1.4rem;
          padding: 24px;
        }
        figure {
          width: 130px;
        }
      }
    `}</style>
  </>
)

export async function getServerSideProps({ req }) {
  const menu = await api.get('/menu', req)

  return { props: { menu } }
}

export default Menu
