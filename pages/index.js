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
            成立於義大利，是一個由熱愛台灣的人組成的非營利協會，推動台灣-義大利間文化交流及商業合作為宗旨的非營利協會組織，ATI的願景是串聯整個義大利僑界民間努
            力，在台灣和義大利之間搭建更多合作的橋樑，也是個重要的平台。因此，於2022年正式成立了「義大利台灣交流協會（ATI）」，希望能夠促進兩地更多的交流，
            也給兩地未來下一代提供更多的合作可能，推動更多的雙向互動，進而走向國際舞台。我們
            透過舉辦和參與義大利各地的活動，整合兩地的民間和官方資源，促進企業、文化藝術工作者、公益團體之間的合作，期望增進兩地交流，為未來的合作提供更多可
            能性，共同推動國際文化和商業交流。
          </p>
        </section>
        <section className={styles.goal}>
          <div className={styles.goalContainer}>
            <h2>ATI的三大方向</h2>
            <ul>
              <li>
                <div>文化合作</div>
                <span class="material-symbols-outlined">add</span>
              </li>
              <li>
                <div>學術合作</div>
                <span class="material-symbols-outlined">add</span>
              </li>
              <li>
                <div>商業合作</div>
                <span class="material-symbols-outlined">add</span>
              </li>
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
