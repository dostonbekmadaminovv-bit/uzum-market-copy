//components
import ProductCard from "./ProductCard.jsx";
{
  /* product list mapping */
}
function ProductList({ data, deleteProduct, onUpdate }) {
  return (
    <>
      <section className="py-10">
        <div className="w-full max-w-300 mx-auto flex gap-4  flex-wrap justify-between">
          {data &&
            data.map((prod) => {
              return (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onClick={deleteProduct}
                  onUpdate={() => onUpdate(prod)}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}

export default ProductList;
