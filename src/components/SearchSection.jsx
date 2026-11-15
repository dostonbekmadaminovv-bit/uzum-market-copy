//icons
import { IoSearch } from "react-icons/io5";
function SearchSection({ searchProd }) {
  return (
    <>
      <section className="py-10 ">
        <div className="w-full max-w-300 mx-auto">
          <div className="border-2 flex px-5 items-center h-10 max-w-180 mx-auto rounded-2xl border-[#7000ff]">
            <input
              onChange={(e) => searchProd(e.target.value)}
              className="grow h-full outline-0  text-[#cec8d6]"
              type="text"
              placeholder="Search Product"
            />
            <span>
              <IoSearch className="text-gray-500 w-6 h-6" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchSection;
