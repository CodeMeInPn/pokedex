import { Form } from "@remix-run/react";
import { useState } from "react";
import Input from "../base/Input";
import MagnifyingGlass from "../icons/MagnifyingGlass";
import SortingVariant from "../SortingVariant";

const SearchbarView = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsActive(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value === "") setIsActive(false);
  };

  return (
    <section className="relative mx-3 mb-6 flex justify-between">
      <div className="relative h-8 flex-1">
        <div className="absolute top-2 left-3 w-4 h-4 p-[2px] text-primary">
          <MagnifyingGlass className="w-full h-full" />
        </div>
        <Form
          method="post"
          onSubmit={(e) => console.log(e.currentTarget)}
          className="h-full"
        >
          <Input
            placeholder="Search"
            onBlur={(e) => handleBlur(e)}
            onFocus={(e) => handleFocus(e)}
            isActive={isActive}
            className="h-full"
          />
        </Form>
      </div>
      <div className="ml-4">
        <SortingVariant />
      </div>
    </section>
  );
};

export default SearchbarView;
