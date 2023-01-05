import Head from 'next/head';

type Props = { title: string; description: string };

export default function SEO(props: Props) {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
