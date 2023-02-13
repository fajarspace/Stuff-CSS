import Head from 'next/head';
import { useRouter } from 'next/router';

export default function CanonicalURL() {
  const siteUrl = 'https://stuffcss.netlify.app';
  const router = useRouter();
  const cleanPath = router.asPath.split('#')[0].split('?')[0];
  const canonicalUrl = `${siteUrl}` + (router.asPath === '/' ? '' : cleanPath);

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};