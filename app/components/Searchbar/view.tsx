import Input from "../base/Input";
import MagnifyingGlass from "../icons/MagnifyingGlass";

const SearchbarView = () => {
  return (
    <section className="relative mt-2">
      <div className="relative">
        <div className="absolute">
          <MagnifyingGlass />
        </div>
        <Input placeholder="Search" />
      </div>
    </section>
  );
};

export default SearchbarView;
