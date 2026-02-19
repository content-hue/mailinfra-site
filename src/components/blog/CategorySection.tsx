import type { WordPressCategory } from '../../lib/wordpress';

interface CategorySectionProps {
  categories: WordPressCategory[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  if (categories.length === 0) return null;

  return (
    <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore by Category</h2>
      <div className="flex items-center gap-4 flex-wrap">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`/category/${category.slug}`}
            className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-semibold rounded-full transition-colors"
          >
            {category.name}
          </a>
        ))}
      </div>
    </section>
  );
}
