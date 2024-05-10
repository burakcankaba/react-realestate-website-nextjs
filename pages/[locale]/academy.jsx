import React from 'react'
import { BsEmojiHeartEyes, BsInfoCircleFill } from 'react-icons/bs'
import { BsPlusSquareFill } from 'react-icons/bs'
import { useTranslation } from 'next-i18next';

import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';
import Head from 'next/head';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
const Academy = () => {
  const { t } = useTranslation('common')
  return (
    <>
      {<Head>
                <title>kabasoft Akademi</title>
                <meta name="description" content="Çocuklar için yazılım, onlara teknoloji ve dijital dünya hakkında erken yaşta farkındalık kazandırmanın yanı sıra, yaratıcı düşünme, problem çözme ve mantıksal düşünme becerilerini geliştirme fırsatı sunar. Kodlama öğrenme fırsatları sağlamak, çocukların gelecekteki başarıları için önemli bir yatırımdır." />
                <meta name="keywords" content="Fethiye Çocuklar İçin Yazılım Eğitimleri" />

                <meta name="author" content="kabaSoft" />
                <meta name="copyright" content="©2023 Copyrights by kabaSoft. All Rights Reserved." />
                <meta name="application-name" content="kabaSoftcomtr" />
                <link rel="image_src" href="https://kabasoft.com.tr/academy/academi-first.jpg" />
                <meta property="og:title" content="Fethiye'deki Çocuklar için Yazılım Eğitimleri" />
                <meta property="og:type" content="article" />


                <meta property="og:image" content="https://kabasoft.com.tr/academy/academi-first.jpg" />
                <meta property="og:image:secure_url" content="https://kabasoft.com.tr/academy/academi-first.jpg" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="900" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Fethiye'deki Çocuklar için Yazılım Eğitimleri" />
                <meta name="og:url" content="https://kabasoft.com.tr/tr/academy" />
                <meta property="og:description" content="Çocuklar için yazılım, onlara teknoloji ve dijital dünya hakkında erken yaşta farkındalık kazandırmanın yanı sıra, yaratıcı düşünme, problem çözme ve mantıksal düşünme becerilerini geliştirme fırsatı sunar. Kodlama öğrenme fırsatları sağlamak, çocukların gelecekteki başarıları için önemli bir yatırımdır." />

                <meta name="twitter:card" content="Çocuklar için yazılım, onlara teknoloji ve dijital dünya hakkında erken yaşta farkındalık kazandırmanın yanı sıra, yaratıcı düşünme, problem çözme ve mantıksal düşünme becerilerini geliştirme fırsatı sunar. Kodlama öğrenme fırsatları sağlamak, çocukların gelecekteki başarıları için önemli bir yatırımdır." />
                <meta name="twitter:title" content="Fethiye'deki Çocuklar için Yazılım Eğitimleri" />
                <meta name="twitter:description" content="Çocuklar için yazılım, onlara teknoloji ve dijital dünya hakkında erken yaşta farkındalık kazandırmanın yanı sıra, yaratıcı düşünme, problem çözme ve mantıksal düşünme becerilerini geliştirme fırsatı sunar. Kodlama öğrenme fırsatları sağlamak, çocukların gelecekteki başarıları için önemli bir yatırımdır." />
                <meta name="twitter:image" content="https://kabasoft.com.tr/academy/academi-first.jpg" />
                <meta name="twitter:url" content="https://kabasoft.com.tr/tr/academy" />
            </Head>} 
      <div className='academyPage'>
        <img src="/academy/academi-first.jpg" alt="" />
        <div className="ac_desc">
          <div className="ac_title">
            <h1> <img src="/favicon.ico" alt="kabaSoft favicon" />
              kabaS<span>o</span>ft Akademi</h1>
            <p>Çocuklar için yazılım, onlara teknoloji ve dijital dünya hakkında erken yaşta farkındalık kazandırmanın yanı sıra, yaratıcı düşünme, problem çözme ve mantıksal düşünme becerilerini geliştirme fırsatı sunar. Kodlama öğrenme fırsatları sağlamak, çocukların gelecekteki başarıları için önemli bir yatırımdır. </p>
          </div>
          <div className="ac_paraone">
            <h2>Çocuklarınızın Erken Yaşta Yazılım Öğrenmesinin Faydaları</h2>
            <ul>
              <li><span><BsEmojiHeartEyes />Mantıksal ve yaratıcı düşünme becerilerini geliştirir:</span> Yazılım öğrenmek, çocukların problem çözme ve mantıksal düşünme becerilerini geliştirmelerine yardımcı olur. Aynı zamanda, kodlama gibi yazılım becerileri çocukların yaratıcı düşünme becerilerini de geliştirir.</li>
              <li><span><BsEmojiHeartEyes />Teknolojiye ilgiyi artırır:</span> Çocuklar erken yaşta teknolojiyle tanıştıklarında, teknolojiye ilgi duymaları daha olasıdır. Bu ilgi, gelecekte teknoloji ile ilgili kariyer seçeneklerini düşünmelerine ve teknolojik gelişmeleri takip etmelerine yardımcı olabilir.</li>
              <li><span><BsEmojiHeartEyes />Sorun çözme yeteneğini geliştirir:</span> Yazılım öğrenmek, çocukların sorunları farklı bir bakış açısıyla ele almalarını sağlar ve onlara sorunları çözmek için farklı yollar öğretir. Bu beceriler, çocukların hayatlarında karşılaşacakları zorluklarla başa çıkmalarına yardımcı olabilir.</li>
              <li><span><BsEmojiHeartEyes />İşbirliği ve iletişim becerilerini geliştirir:</span> Yazılım geliştirme, bir takım çalışması gerektirdiğinden, çocukların işbirliği ve iletişim becerilerini geliştirmelerine yardımcı olur.</li>
              <li><span><BsEmojiHeartEyes />Kendine güveni artırır:</span> Yazılım öğrenmek, çocukların kendine güvenlerini artırabilir. Kendi projelerini oluşturmak, çocukların kendilerine güvenmelerini ve yaptıkları şeylerden gurur duymalarını sağlar.</li>
              <li><span><BsEmojiHeartEyes />Gelecekteki kariyer fırsatlarına hazırlar:</span> Teknolojideki hızlı gelişmeler nedeniyle, yazılım becerileri gelecekteki kariyer fırsatları için önemlidir. Erken yaşta yazılım öğrenen çocuklar, gelecekteki kariyerlerinde avantajlı konuma geçebilirler</li>
            </ul>
          </div>
          <div className="ac_paratwo">
            <h2>Çocuklar için Web Tasarım Eğitimi</h2>
            <p>Artık gerçek kodları yazmanın zamanı geldi! Çocuklarımız bu eğitimde ağırlıklı olarak HTML (Hyper Text Markup Language) kodlama yapısı kullanarak nasıl tasarımlar yapılacağını öğrenecektir. </p>
            <div className='ac_two_desc'>
              <h3>Açıklama</h3>
              <p>Bu kursumuz sonunda çocuklarımız Hyper Text Markup Language (HTML) dilini kullanarak web sayfalarının nasıl oluşturulduğunu kavrayacaklar. Bir İnternet kullanıcısı olarak sürekli download (indirme) yapan bir birey olmaktansa, upload (yükleme) yapan birey olmayı tercih edecekler. Metin, ses, video ve animasyon gibi içeriklerin bir araya getirilerek etkin sayfalar tasarlayabileceklerdir.  Çocuklarımız böylece ülkemizde tüketen toplum bilincinden uzaklaşarak üretim odaklı çalışmayı, işlerini daha verimli kullanmayı, karşılarına çıkan problemlere yönelik web projeleri geliştirme arayışı içinde olacaklardır. </p>
              <p>Yüzyılımız bilgi çağı olarak anılıyor. Bilgi çağı, bilişim sistemlerini etkin kullanarak üretim yapabilen ve bilişim sistemleri bileşenlerini üretebilen bireyler istiyor. Bilişim sistemleri üretme kültürünün küçük yaşlardan itibaren geliştirilmesi gerekiyor. Çünkü hem bu alanda bireylerin geliştirmesi gereken bilgi ve beceri çok sayıdadır, hem de bu sistemleri üretmek onları anlamayı kolaylaştırmaktadır. Ayrıca, insanların kullandığı sistemlerin öğelerini ve öğeleri arasındaki ilişkileri bilmeleri, o sistemleri daha kolay kontrol etmelerini sağlamaktadır. </p>
            </div>
            <div className='ac_two_desc'>
              <h3>Bu Eğitim Kimler için Uygun?</h3>
              <ul className='dflex_li'>
                <li><BsInfoCircleFill />8-16 yaş grubu,</li>
                <li><BsInfoCircleFill />HTML öğrenmek isteyen,</li>
                <li><BsInfoCircleFill />CSS öğrenmek isteyen ve,</li>
                <li><BsInfoCircleFill />Web sayfa tasarımı hakkında bilgi sahibi olmak isteyenler için uygundur.</li>
              </ul>
            </div>

            <div className='ac_two_desc'>
              <h3>Gereksinimler</h3>
              <ul className='dflex_li'>
                <li><BsInfoCircleFill />Başlangıç seviyesinde bilgisayar kullanmak</li>
                <li><BsInfoCircleFill />Öğrenme merakı</li>
                <li><BsInfoCircleFill />Çabuk pes eden bir yapıya sahip olmamak</li>
                <li><BsInfoCircleFill />Teknolojiyi doğru kullanmaya hevesli olmak</li>
              </ul>
            </div>
            <div className='ac_two_desc'>
              <h3>Kurs İçeriği</h3>
              <ul className='course'>
                <li>
                  <h4>1. Web Tasarımının Temel Kavramları</h4>
                  <ul>
                    <li><BsPlusSquareFill />İnternet Nedir?</li>
                    <li><BsPlusSquareFill />WWW Nedir?</li>
                    <li><BsPlusSquareFill />WWW Nasıl Çalışır?</li>
                    <li><BsPlusSquareFill />HTML Nedir?</li>
                    <li><BsPlusSquareFill />Web Sitesi Nedir?</li>
                    <li><BsPlusSquareFill />Nelere İhtiyacımız Var?</li>
                    <li><BsPlusSquareFill />Kaynaklar</li>
                  </ul>
                </li>
                <li><h4>2. HTML Sayfası Oluşturmak</h4></li>
                <li><h4>3. HTML Mimarisini Anlamak</h4></li>
                <li><h4>4. CSS (Cascading Style Sheets) - Nedir?</h4></li>
                <li><h4>5. Responsive Tasarım Nedir?</h4></li>
                <li><h4>6. Uygulama: Responsive Website Oluşturma</h4></li>
                <li><h4>7. Uygulama: Responsive Website Geliştirme</h4></li>
                <li><h4>8. CSS (Cascading Style Sheets) - Nedir?</h4></li>
                <li><h4>9. Javascript Kodlamaya Giriş <span>(Önceki Derslerde Başarılı Olmuş Öğrenciler için Geçerlidir.)</span></h4></li>
              </ul>
            </div>
            <div className='ac_two_desc'>
              <h3>Kurs Bilgisi, Saati ve Ücreti</h3>
              <p>Programlama eğitimimiz 5 kişilik gruplar halinde olmaktadır. Çocuklarımız yaş kategorilerine göre ayrılmaktadır. 5 kişilik grup dolduğunda eğitim planı açıklanır. Kurslar, cumartesi ve pazar günleri 1.5 saattir. İsteğe bağlı olarak süre ve gün sayısı uzayabilir. Çocuklarımızı takım çalışmasına alıştırmak için özel kurs hizmeti vermenin doğru olduğunu düşünmüyoruz. Çocuklarımızın teknolojiye ve yazılıma yatkınlığını görmek amacıyla tanışma ve bilgilendirme buluşması gerçekleştirdikten sonra, kurs kaydı oluşturulacaktır. Kurs ücreti saatlik 250TL dir.</p>
            </div>
            <div className='socialMedias'>
              <ul>
                <li><a href='https://www.instagram.com/kabasoftcomtr/' target="_blank" rel="noreferrer"><SiInstagram /></a></li>
                <li><a href='https://www.facebook.com/kabasoftcomtr' target="_blank" rel="noreferrer"><SiFacebook /></a></li>
                <li><a href='https://api.whatsapp.com/send?phone=+905395448587' target="_blank" rel="noreferrer"><SiWhatsapp /></a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Academy