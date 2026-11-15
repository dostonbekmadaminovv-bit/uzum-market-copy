function UpdateForm({ product, onClose, onUpdate }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const updatedProduct = {
      ...product,
      name: formData.get("name").trim(),
      price: Number(formData.get("price")),
      category: formData.get("category"),
      brand: formData.get("brand").trim(),
      image: formData.get("image").trim(),
    };

    onUpdate(updatedProduct);
    onClose?.();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <div className="max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-2xl border border-violet-400/30 bg-[#17181f] p-5 text-white shadow-2xl shadow-violet-950/50">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              Mahsulotni yangilash
            </h2>
            <p className="mt-1 text-xs text-gray-400">
              Mahsulot ma’lumotlarini tahrirlang
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Modalni yopish"
            className="grid h-8 w-8 place-items-center rounded-full text-xl text-gray-400 transition hover:bg-white/10 hover:text-white"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-300">
              Mahsulot nomi
            </span>
            <input
              required
              type="text"
              name="name"
              defaultValue={product.name}
              placeholder="Mahsulot nomi"
              className="w-full rounded-lg border border-white/15 bg-[#22232d] px-3 py-2 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-300">
              Narxi (so‘m)
            </span>
            <input
              required
              min="0"
              type="number"
              name="price"
              defaultValue={product.price}
              placeholder="Narxini kiriting"
              className="w-full rounded-lg border border-white/15 bg-[#22232d] px-3 py-2 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-300">
              Kategoriya
            </span>
            <select
              name="category"
              defaultValue={product.category}
              className="w-full rounded-lg border border-white/15 bg-[#22232d] px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            >
              <option value="Smartphone">Smartphone</option>
              <option value="Headphones">Headphones</option>
              <option value="Laptop">Laptop</option>
              <option value="Tablet">Tablet</option>
              <option value="Smartwatch">Smartwatch</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-300">
              Brend
            </span>
            <input
              required
              type="text"
              name="brand"
              defaultValue={product.brand}
              placeholder="Brend nomi"
              className="w-full rounded-lg border border-white/15 bg-[#22232d] px-3 py-2 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-300">
              Rasm havolasi
            </span>
            <input
              required
              type="url"
              name="image"
              defaultValue={product.image}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-white/15 bg-[#22232d] px-3 py-2 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </label>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg border border-white/20 px-3 py-2.5 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
            >
              Bekor qilish
            </button>

            <button
              type="submit"
              className="w-full rounded-lg border border-cyan-200/70 `bg-gradient-to-r` from-cyan-500 to-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30 transition hover:brightness-110"
            >
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
