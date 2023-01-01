import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo';
// import Helmet from "react-helmet"

interface Props {
  lang: string,
  title: string,
  description: string,
  img: string,
  meta: [],
}

const SEO = ({ lang, title, description, img, meta = [] }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)

  useEffect(() => {
    let parentNode = document.head;
    var e = parentNode.children;

    // for (let i = 0; i < e.length; i++) {
    //   const nameVal = e[i].getAttribute('name');
    //   console.log(e[i].nodeName);
    //   if (nameVal !== null) {
    //     // if (nameVal.indexOf('keywords') != -1) {
    //     //   headData[i].setAttribute('content', keywords);
    //     // }
    //     if (nameVal.indexOf('description') != -1) {
    //       e[i].setAttribute('content', description);
    //     }
    //     // OGP(twitter)の設定
    //     if (nameVal.indexOf('twitter:title') != -1) {
    //       e[i].setAttribute('content', title);
    //     }
    //     if (nameVal.indexOf('twitter:description') != -1) {
    //       e[i].setAttribute('content', description);
    //     }
    //   }
    // }

    [].slice
      .call(e)
      .sort((a, b) => {
        return a.tagName.localeCompare(b.tagName);
      })
      .forEach((val, index) => {
        parentNode.appendChild(val);
      });
  }, []);

  return (
    <GatsbySeo
      title={title}
      description={title}
      language={lang}
      openGraph={{
        url: 'https://jceoa.org/',
        title: title,
        description: title,
        images: [
          {
            url: img,
            width: 800,
            height: 600,
            alt: '画像',
          },
          {
            url: img,
            width: 900,
            height: 800,
            alt: '画像',
          },
        ],
        site_name: '一般社団法人日本CEO協会',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    // <Helmet
    //   htmlAttributes={{
    //     lang,
    //   }}
    //   title={`${title} | ${data.site.siteMetadata.title}`}
    //   titleTemplate={`%s | ${title}`}
    //   meta={[
    //     {
    //       name: `description`,
    //       content: data.site.siteMetadata.description.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').substr(0, 60),
    //     },
    //     {
    //       property: `og:image`,
    //       content: img,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: data.site.siteMetadata.description.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').substr(0, 60),
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     {
    //       name: `twitter:card`,
    //       content: `summary`,
    //     },
    //     // {
    //     //   name: `twitter:creator`,
    //     //   content: site.siteMetadata.author,
    //     // },
    //     {
    //       name: `twitter:title`,
    //       content: title,
    //     },
    //     {
    //       name: `twitter:description`,
    //       content: data.site.siteMetadata.description.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').substr(0, 60),
    //     },
    //   ].concat(meta)}
    // />
  )
}

export default SEO
