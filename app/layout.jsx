import '@styles/global.css';
import NavBar from '@components/NavBar.jsx';
import Provider from '@components/Provider'

export const metadata = {
    title : "QoutesShare",
    description : "Discover & Share Anime Qoutes"
}


const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className='gradient' />
            </div>
            
            <main className='app'>
            <NavBar/>
                { children }
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
