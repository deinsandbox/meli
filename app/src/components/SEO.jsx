import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, name = 'Mercado Libre', type, image }) => {
  const url = location.pathname

  return (
    <Helmet titleTemplate="%s | Mercado Libre 📦" defaultTitle="Mercado Libre 📦">
      {/* Standard metadata tags */}
      {Boolean(title) && (
        <title>
          {title} | {name} 📦
        </title>
      )}
      {Boolean(description) && <meta property="description" content={description} />}
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <meta charSet="utf-8" />
      <meta name="keywords" charSet="utf-8" content={[...keywords, 'comprar', 'vender', 'mercado libre'].join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={name} />
      <meta name="theme-color" content="#ffdb15" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#ffdb15" />
      <meta name="msapplication-navbutton-color" content="#ffdb15" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={name} />
      <meta name="application-name" content={name} />
      <meta name="format-detection" content="telephone=no" />

      {/* Open Graph tags */}
      {Boolean(title) && <meta property="og:title" content={title} />}
      {Boolean(description) && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      {Boolean(type) && <meta property="og:type" content={type} />}
      {Boolean(image) && <meta property="og:image" content={image} />}

      {/* X / Twitter tags */}
      {Boolean(title) && <meta property="twitter:title" content={title} />}
      {Boolean(description) && <meta property="twitter:description" content={description} />}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta property="twitter:site" content="@mercadolibre" />
      {Boolean(image) && <meta property="twitter:image" content={image} />}

      {/* Google tags */}
      <meta name="google" content="notranslate" />
      <meta name="google-site-verification" content="google-site-verification" />
      <meta name="googlebot" content="index, follow" />
      <meta name="googlebot-news" content="index, follow" />
      <meta name="googlebot-video" content="index, follow" />
      <meta name="googlebot-image" content="index, follow" />
      <meta name="googlebot-mobile" content="index, follow" />
      <meta name="googlebot-ads" content="index, follow" />
    </Helmet>
  )
}

export default SEO
