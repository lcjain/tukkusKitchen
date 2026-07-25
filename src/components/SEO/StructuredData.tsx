interface StructuredDataProps {
  schema: Record<string, unknown>;
}

export function StructuredData({ schema }: StructuredDataProps) {
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
