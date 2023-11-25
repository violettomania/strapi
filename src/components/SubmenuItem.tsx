interface SubmenuItemProps {
  page: string;
  links: {
    url: string;
    icon: JSX.Element;
    label: string;
  }[];
  className: string;
}

export default function SubmenuItem({
  links,
  page,
  className,
}: SubmenuItemProps) {
  return (
    <>
      <h4>{page}</h4>
      <div className={className}>
        {links.map(({ url, icon, label }) => {
          return (
            <a href={url} key={label}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </>
  );
}
