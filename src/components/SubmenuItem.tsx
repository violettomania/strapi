interface SubmenuItemProps {
  page: string;
  links: {
    url: string;
    icon: JSX.Element;
    label: string;
  }[];
}

export default function SubmenuItem({ links, page }: SubmenuItemProps) {
  return (
    <>
      <h4>{page}</h4>
      <div className='submenu-center col-4'>
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
