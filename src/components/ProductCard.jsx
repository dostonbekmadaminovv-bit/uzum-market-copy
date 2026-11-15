function ProductCard({ product, onClick, onUpdate, onAddToCart }) {
  const { id, name, brand, image, price, category, description } = product;

  return (
    <article className="relative mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#17181f] text-white shadow-xl">
      {/* Rasm qismi */}
      <div className="relative h-56 overflow-hidden `bg-gradient-to-br` from-violet-950 via-fuchsia-950 to-slate-950">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover opacity-90"
        />

        {/* Neon yoritish effekti */}
        <div className="pointer-events-none absolute inset-0 `bg-gradient-to-t` from-[#17181f] via-transparent to-transparent" />

        {/* Update tugmasi — chap yuqorida */}
        <button
          type="button"
          onClick={() => onUpdate?.(product)}
          aria-label={`${name} mahsulotini yangilash`}
          className="absolute left-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 text-cyan-300 shadow-lg backdrop-blur transition hover:bg-cyan-500/20"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 2.651 2.651M8 16l8.862-8.862a2.1 2.1 0 0 1 2.97 2.97L10.97 18.97 6 20l1.03-4.97L8 16Z"
            />
          </svg>
        </button>

        {/* Delete tugmasi — o‘ng yuqorida */}
        <button
          type="button"
          onClick={() => onClick?.(id)}
          aria-label={`${name} mahsulotini o‘chirish`}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 text-red-400 shadow-lg backdrop-blur transition hover:bg-red-500/20"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7h16M10 11v6m4-6v6M5 7l1 14h12l1-14M9 7V4h6v3"
            />
          </svg>
        </button>

        {/* Narx belgisi */}
        <span className="absolute right-4 top-16 rounded-md bg-cyan-500 px-3 py-1 text-xs font-bold text-black shadow-lg">
          {Number(price).toLocaleString()} so‘m
        </span>
      </div>

      {/* Mahsulot ma’lumotlari */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {brand}
        </p>

        <h2 className="mt-2 line-clamp-2 min-h-14 text-xl font-extrabold uppercase leading-7">
          {name}
        </h2>

        {category && (
          <span className="mt-2 w-fit rounded-md border border-fuchsia-400/40 bg-fuchsia-400/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-300">
            {category}
          </span>
        )}

        <p className="mt-3 line-clamp-2 min-h-10 text-sm leading-5 text-gray-300">
          {description ||
            "Kundalik foydalanish uchun qulay va sifatli mahsulot."}
        </p>

        {/* Neon yulduzlar */}
        <div
          className="mt-3 flex gap-1 text-lg text-cyan-400"
          aria-label="5 yulduz"
        >
          ★ ★ ★ ★ <span className="text-gray-500">★</span>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="mt-5 w-full rounded-full border-2 border-cyan-200 `bg-gradient-to-r` from-cyan-500 to-blue-600 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-cyan-400/30 transition hover:border-white hover:brightness-110"
        >
          Savatga qo‘shish
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
