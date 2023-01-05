import Link from 'next/link';
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import { Url } from 'url';

type Props = {
  as: Url;
  href: Url;
  otherProps: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
};

export default function CustomLink(props: Props) {
  const { as, href, otherProps } = props;

  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
    </>
  );
}
