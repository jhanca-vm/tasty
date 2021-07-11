import { motion } from 'framer-motion'
import Navbar from './Navbar'

export default function Layout({ children, route }) {
  const animation = {
    pageInitial: { opacity: 0, x: '-5%' },
    pageAnimate: { opacity: 1, x: 0 },
  }

  return (
    <>
      <Navbar />
      <motion.main
        key={route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={animation}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>

      <style>{`
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
}
