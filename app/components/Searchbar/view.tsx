import { Form } from "@remix-run/react";
import { useState } from "react";
import Input from "../base/Input";

const SearchbarView = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsActive(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value === "") setIsActive(false);
  };

  return (
    <section className="relative">
      <div className="relative">
        <Form method="post" onSubmit={(e) => console.log(e.currentTarget)}>
          <Input
            placeholder="Search"
            onBlur={(e) => handleBlur(e)}
            onFocus={(e) => handleFocus(e)}
            isActive={isActive}
          />
        </Form>
      </div>
    </section>
  );
};

export default SearchbarView;
