export default function SnackList() {
  // Least favorite → most favorite
  const snacks = [
    { name: 'Pretzels', rank: 5 },
    { name: 'Popcorn', rank: 4 },
    { name: 'Chips', rank: 3 },
    { name: 'Chocolate', rank: 2 },
    { name: 'Ice Cream', rank: 1 },
  ];

  // Sort most favorite (rank 1) → least favorite
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <section>
      <h2>Snack Rankings</h2>
      <ol>
        {sortedSnacks.map((snack) => (
          <li key={snack.name}>
            {snack.name} (Rank: {snack.rank})
          </li>
        ))}
      </ol>
    </section>
  );
}
