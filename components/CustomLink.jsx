import { useRouter } from 'next/router'
import Link from 'next/link'

export default function CustomLink({ href, children }) {
  const { asPath } = useRouter()

  return (
    <>
      <Link href={href}>
        <a>{children}</a>
      </Link>

      <style jsx>{`
        @media (min-width: 540px) {
          a {
            color: ${href === asPath ? '#069c54' : 'inherit'};
          }
          a:hover {
            color: #069c54;
          }
        }
      `}</style>
    </>
  )
}
