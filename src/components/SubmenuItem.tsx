interface SubmenuItemProps {
  page: string;
  links: {
    url: string;
    icon: JSX.Element;
    label: string;
  }[];
  className: string;
  isMobileView?: boolean;
}

export default function SubmenuItem({
  links,
  page,
  className,
  isMobileView = false,
}: SubmenuItemProps) {
  const setColumnsClass = () => {
    return isMobileView || `col-${links.length}`;
  };

  return (
    <>
      <h4>{page}</h4>
      <div className={`${className} ${setColumnsClass()}`}>
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
