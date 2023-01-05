type Props = { copyrightText: string };

export default function Footer(props: Props) {
  return (
    <footer className="py-16 flex flex-col items-center">
      <p className="dark:text-white uppercase mb-3 font-bold opacity-60">
        {props.copyrightText}
      </p>
    </footer>
  );
}
