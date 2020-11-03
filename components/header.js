import Link from 'next/link'

export default function Home() {
  return (
    <ul>
        <li>
            <Link as="../pages/index.js/" href="/">
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link as="../pages/about.js/" href="/about">
                <a>About</a>
            </Link>
        </li>
        <li>
            <Link as="../pages/contact.js/" href="/contact">
                <a>Contact</a>
            </Link>
        </li>
    </ul>
  )
}