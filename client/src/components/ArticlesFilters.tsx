export default function ArticlesFilters({
  categories,
  setCurrentCategory,
}: {
  categories: string[];
  setCurrentCategory: (v: string) => void;
}) {
  const handleClick = (value: string) => setCurrentCategory(value);

  return (
    <>
      <section className="flex justify-center gap-4 ">
        <button
          type="button"
          onClick={() => handleClick("")}
          className="text-white bg-blue-800  p-4 w-fit rounded-xl"
        >
          Tous les articles
        </button>
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            onClick={() => handleClick(c)}
            className="text-white bg-blue-800 p-4 w-fit rounded-xl"
          >
            {c}
          </button>
        ))}
      </section>
    </>
  );
}
