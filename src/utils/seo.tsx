import React, { useEffect } from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo';

interface Props {
  lang?: string,
  alt?: string,
  title?: string,
  description?: string,
  img?: string,
}

const SEO = ({
  lang = 'ja',
  title = '一般社団法人日本CEO協会',
  alt = '一般社団法人日本CEO協会',
  description = '優秀な経営者・起業家を輩出することで、社会課題を解決し、持続可能な社会の実現を目指す。一般社団法人日本CEO協会のサービスをご紹介します。',
  img = 'https://ceo.gatsbyjs.io/images/icon.png',
}: Props) => {

  // useEffect(() => {
  //   let parentNode = document.head;
  //   var e = parentNode.children;

  //   [].slice
  //     .call(e)
  //     .sort((a, b) => {
  //       return a.tagName.localeCompare(b.tagName);
  //     })
  //     .forEach((val, index) => {
  //       parentNode.appendChild(val);
  //     });
  // }, []);

  const displayTitle = title ? `${title} | 一般社団法人日本CEO協会` : "一般社団法人日本CEO協会";
  const displayDescription = description ? description.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').substr(0, 80) : description;

  return (
    <GatsbySeo
      title={displayTitle}
      description={displayDescription}
      language={lang}
      openGraph={{
        url: 'https://jceoa.org/',
        title: displayTitle,
        description: displayDescription,
        images: [
          {
            url: img,
            width: 800,
            height: 600,
            alt: alt,
          },
          {
            url: img,
            width: 900,
            height: 800,
            alt: alt,
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
  )
}

export default SEO
