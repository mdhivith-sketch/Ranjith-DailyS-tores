import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data";

function Home() {
  return (
    <>
      <Hero />

      <Categories />

      <section className="products-section">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;