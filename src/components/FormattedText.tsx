export default function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\n)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part === "\n") {
          return <br key={i} />;
        }

        if (part.startsWith("**") && part.endsWith("**")) {
          const label = part.slice(2, -2);

          return (
            <span key={i}>
              {label === "Problem:" && (
                <>
                  <br />
                  <br />
                </>
              )}
              {label === "Impact:" && <br />}
              <span className="underline text-foreground">{label}</span>
            </span>
          );
        }

        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }

        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
