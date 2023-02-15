import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { SiFacebook, SiInstagram, SiTwitter, SiWhatsapp } from 'react-icons/si'
import { CgPhone } from 'react-icons/cg'
import { useEffect } from 'react'
export default function Layout({ children }) {
//   useEffect(() => {
//     const handleContextmenu = e => {
//         e.preventDefault()
//     }
//     document.addEventListener('contextmenu', handleContextmenu)
//     return function cleanup() {
//         document.removeEventListener('contextmenu', handleContextmenu)
//     }
// }, [ ])
  return (
    <>
      <Header />
      <main>{children}</main>
      <div className="socialMedia_fixed">
      <ul>
        <li><a href='https://www.instagram.com/talainvestment/' target="_blank" rel="noreferrer"><SiInstagram /></a></li>
        <li><a href='https://www.facebook.com/talatourism' target="_blank" rel="noreferrer"><SiFacebook /></a></li>
        <li><a href='https://twitter.com/tala_tourism' target="_blank" rel="noreferrer"><SiTwitter /></a></li>
      </ul>
    </div>
    <div className="phonecall_fixed">
      <a  href='tel:+905427787170' target="_blank" rel="noreferrer"><CgPhone/></a>
    </div>
    <div className="whatsapp_fixed">
      <a  href='https://api.whatsapp.com/send?phone=+905427787170' target="_blank" rel="noreferrer"><SiWhatsapp/></a>
    </div>
      <Footer />
    </>
  )
}