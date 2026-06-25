import { categories } from "../data";

function Categories() {
  return (
    <section className="categories">
      <h2>Shop By Category</h2>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;