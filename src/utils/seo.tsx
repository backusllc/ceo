import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet-async';

interface Props {
  lang?: string;
  alt?: string;
  title?: string;
  description?: string;
  img?: string;
}

const SEO = ({
  lang = 'ja',
  title = '一般社団法人日本CEO協会',
  alt = '一般社団法人日本CEO協会',
  description = '優秀な経営者・起業家を輩出することで、社会課題を解決し、持続可能な社会の実現を目指す。一般社団法人日本CEO協会のサービスをご紹介します。',
  img = 'https://ceo.gatsbyjs.io/images/icon.png',
}: Props) => {
  const { pathname } = useLocation();
  const canonical = `https://ceo.gatsbyjs.io${pathname}`;

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

  const displayTitle = title
    ? `${title} | 一般社団法人日本CEO協会`
    : '一般社団法人日本CEO協会';
  const displayDescription = description
    ? description.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').substr(0, 80)
    : description;

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{displayTitle}</title>
        <meta name="description" content={displayDescription} />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:url" content="https://jceoa.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={displayTitle} />
        <meta property="og:description" content={displayDescription} />
        <meta property="og:image" content={img} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={alt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@handle" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:title" content={displayTitle} />
        <meta name="twitter:description" content={displayDescription} />
        <meta name="twitter:image" content={img} />
      </Helmet>
    </>
  );
};

export default SEO;
