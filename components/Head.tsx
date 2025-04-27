import Head from "next/head";

const FKNGHead = () => {
  const title = "FKNG.SOCIAL | Making social fkng great again";
  const desc = "Making social fkng great again - A new way to connect in web3";
  const image = "https://fkng.pro/fkng.png";
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="description" content={desc} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fkng.social/" />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={desc} />

      <meta name="twitter:site" content="fkng" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={desc} />
    </Head>
  );
};

export default FKNGHead;
