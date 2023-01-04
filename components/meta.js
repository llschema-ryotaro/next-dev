import Head from "next/head";

import { siteMeta } from "libs/constants";
const {siteTitle, siteDesc, siteUrl, siteLocate, siteType, siteIcon} = siteMeta;

export default function Meta({pageTitle, pageDesc}) {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteTitle;

  return (
    <Head>
      <title>{title} </title>
      <meta property="og:title" content={title} />

      <meta property="description" content={desc} />
      <meta property="og:description" content={desc} />
    </Head>
  )
}