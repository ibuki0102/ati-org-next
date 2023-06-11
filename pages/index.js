import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import bg from '../public/image-asset.jpeg'
import banner from '../public/banner.jpg'
import italy from '../public/italy.jpg'
import ig from '../public/ig.svg'
import fb from '../public/f.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>義大利台灣交流恊會 Associazione Taiwan e Italia</title>
        <link rel="icon" href="/logo.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>義大利台灣交流恊會</h1>
          <h1>Associazione Taiwan e Italia</h1>
        </div>
        <Image
          src={bg}
          alt="background img"
          priority="true"
          width={1920}
          height={600}
          className={styles.bg}
        />
      </header>
      <main>
        <section className={styles.description}>
          <p>
            Associazione Taiwan e Italia (ATI)
            成立於義大利，是一個由熱愛台灣的人組成的非營利協會，推動台灣-義大利間文化交流及商業合作為宗旨的非營利協會組織，ATI的願景是串聯整個義大利僑界民間努力，在台灣和義大利之間搭建更多合作的橋樑，也是個重要的平台。因此，於2022年正式成立了「義大利台灣交流協會（ATI）」，希望能夠促進兩地更多的交流，
            也給兩地未來下一代提供更多的合作可能，推動更多的雙向互動，進而走向國際舞台。我們
            透過舉辦和參與義大利各地的活動，整合兩地的民間和官方資源，促進企業、文化藝術工作者、公益團體之間的合作，期望增進兩地交流，為未來的合作提供更多可
            能性，共同推動國際文化和商業交流。
          </p>
        </section>
        <section className={styles.goal}>
          <div className={styles.goalContainer}>
            <h2>ATI的三大方向</h2>
            <ul>
              <label htmlFor="q1">
                <li>
                  <input type="checkbox" name="q1" id="q1" />
                  <div className={styles.listItem}>
                    <div>文化合作</div>
                    <span class="material-symbols-outlined">add</span>
                  </div>
                  <div className={styles.content}>
                    <p>
                      在義大利以深入台灣文化為主的活動內容 ,
                      反之在台灣則以義大利藝術設計文化為主題，在台也可以積極推辦義大利藝術家駐村、工作坊等等。
                    </p>
                    <p>
                      每年固定時間舉辦，內容包含音樂、舞蹈、畫展、
                      視覺藝術等等，以演出、展覽
                      、工作坊、座談為主與各個不同的藝術機構團體合作合辦,
                      ATI交協協會主要負責爭取免費（或補助）場地，內容整合，與活動執行。除了著重在文化藝術的交流外
                      ，更希望可以促進藝術商貿上的互動及專業發展。協會積極增進與當地重要基金會/團體的互動，以增加當地的支援。
                    </p>
                  </div>
                </li>
              </label>
              <label htmlFor="q2">
                <li>
                  <input type="checkbox" name="q2" id="q2" />
                  <div className={styles.listItem}>
                    <div>學術合作</div>
                    <span class="material-symbols-outlined">add</span>
                  </div>
                  <div className={styles.content}>
                    <p>
                      臺灣華語文學習中心（Taiwan Center for Mandarin
                      Learning）是由中華民國僑委會於2021年6月起推動的海外華語文學習計劃，旨在輔助歐美地區為主的僑校成立學習中心，以教授及推廣具臺灣特色之華語文教學。其課程以正體字為主，教科書主要為僑委會自編教之華語文教材，以18歲以上之成年人為授課對象。
                    </p>
                    <p>
                      ATI協助台灣僑委會海外華語文學習中心成立計劃內容，於SIENA成立正式學習中心，以推展正體華語文化為。羅馬設置分部，與原有的語文學校搭配。米蘭設置分部，與SIENA設置模式相同，開立僑民學童班級及商業實務課程
                      。
                    </p>
                  </div>
                </li>
              </label>
              <label htmlFor="q3">
                <li>
                  <input type="checkbox" name="q3" id="q3" />
                  <div className={styles.listItem}>
                    <div>商業合作</div>
                    <span class="material-symbols-outlined">add</span>
                  </div>
                  <div className={styles.content}>
                    <p>
                      媒合台義在商業、科技等領域進行多元聯合運作模式。協助產業與品牌進行跨界之品牌開發及通路整合。協助企業與媒體規劃國際行銷策略，並提供在地資源媒合。
                    </p>
                  </div>
                </li>
              </label>
            </ul>
          </div>
        </section>
        <section className={styles.banner}>
          <Image
            src={banner}
            alt="banner img"
            priority="true"
            width={1920}
            className={styles.bannerImg}
          />
        </section>
        <section className={styles.advantage}>
          <h2>ATI的優勢</h2>
          <div className={styles.content}>
            <Image src={italy} alt="italy img" priority="true" width={400} />
            <ul>
              <li>* 擁有雙向窗口平台</li>
              <li>* 熟悉當地談判策略和技巧</li>
              <li>* 開展多元化的業務交流以促進創新合作 </li>
              <li>
                * 具有深厚的當地社交背景和人脈網絡，與當地官方和民間緊密合作
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.contact}>
          <div className={styles.container}>
            <h2>聯絡ATI</h2>
            <form action="">
              <div className={styles.label}>
                Nome <span>(required)</span>
              </div>
              <div className={styles.nameGroup}>
                <div>
                  <div className={styles.smLabel}>
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <input type="text" name="name" id="firstName" />
                </div>
                <div>
                  <div className={styles.smLabel}>
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                  <input type="text" name="name" id="lastName" />
                </div>
              </div>
              <div>
                <div className={styles.label}>
                  <label htmlFor="email">
                    E-mail <span>(required)</span>
                  </label>
                </div>
                <input type="text" name="name" id="email" />
              </div>
              <div>
                <div className={styles.label}>
                  <label htmlFor="message">
                    Messaggio <span>(required)</span>
                  </label>
                </div>
                <textarea type="text" name="name" id="message" rows="4" />
              </div>
              <button className={styles.submitBtn}>Invia</button>
            </form>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <h3>Italy</h3>
          <p>Via Celso Cittadini 1, 53100 Siena</p>
        </div>
        <div className={styles.column}>
          <h3>Hours</h3>
          <p>From Monday to Friday</p>
          <p>9:00 am to 16:00</p>
        </div>
        <div className={styles.column}>
          <h3>Contact</h3>
          <p>info@npo-ati.org</p>
          <p>(+39) 3489805902</p>
          <div className={styles.icons}>
            <a
              href="https://www.instagram.com/associazione_taiwan_e_italia/"
              target="_blank"
            >
              <Image
                src={ig}
                alt="ig icon"
                priority="true"
                width={20}
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/associazioneTaiwaninItalia/"
              target="_blank"
            >
              <Image
                src={fb}
                alt="fb icon"
                priority="true"
                width={20}
                className={styles.icon}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
