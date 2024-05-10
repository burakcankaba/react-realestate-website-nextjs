import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si'
import { CgPhone } from 'react-icons/cg'
export default function Layout({ children }) {

  return (
    <>
      <Header />
      <main>{children}</main>
      <div className="socialMedia_fixed">
        <ul>
          <li><a href='https://www.instagram.com/kabasoftcomtr/' target="_blank" rel="noreferrer"><SiInstagram /></a></li>
          <li><a href='https://www.facebook.com/kabasoftcomtr' target="_blank" rel="noreferrer"><SiFacebook /></a></li>
        </ul>
      </div>
      <div className="phonecall_fixed">
        <a  href='tel:+905395448587' target="_blank" rel="noreferrer"><CgPhone/></a>
      </div>
      <div className="whatsapp_fixed">
        <a  href='https://api.whatsapp.com/send?phone=+905395448587' target="_blank" rel="noreferrer"><SiWhatsapp/></a>
      </div>
      <Footer />
    </>
  )
}