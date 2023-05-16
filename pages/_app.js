import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
      <>
        <div>
          <h1>Heading</h1>
          <Component {...pageProps} />
        </div>
      </>
  )
}
