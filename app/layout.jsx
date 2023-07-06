import '@styles/global.css'

export const metadata = {
    title : "AnimeQoutes",
    description : "Discover & Share Anime Qoutes"
}


const RootLayout = ({Children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className='gradient' />
            </div>

            <main className='app'>
                {Children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
