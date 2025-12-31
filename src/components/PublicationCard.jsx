export default function PublicationCard({
  title,
  authors,
  venue,
  year,
  link,
}) {
  return (
    <article className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:shadow-sm transition">
      
      <h3 className="text-lg font-semibold mb-2">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
        {authors}
      </p>

      <p className="text-sm text-neutral-500">
        {venue} · {year}
      </p>

    </article>
  );
}
