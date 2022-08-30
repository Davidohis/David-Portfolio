import Theme from "../styles/theme";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-PJHQ9G4XKG"></Script>
<Script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJHQ9G4XKG');
</Script>
    </>
  );
}
