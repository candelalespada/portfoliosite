export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const lastUpdated = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="border-t border-accent/30">
      <div className="mx-auto flex max-w-4xl flex-col gap-1 px-6 py-8 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Candela Lespada. All rights reserved.</p>
        <p>Last updated {lastUpdated}</p>
      </div>
    </footer>
  );
}
