interface PublicationCardProps {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

export default function PublicationCard({ title, authors, venue, year, link }: PublicationCardProps) {
  return (
    <article className="rounded-lg border border-neutral-200 p-6 transition hover:shadow-sm dark:border-neutral-800">
      <h3 className="mb-2 text-lg font-semibold">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>

      <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-400">{authors}</p>

      <p className="text-sm text-neutral-500">
        {venue} | {year}
      </p>
    </article>
  );
}


