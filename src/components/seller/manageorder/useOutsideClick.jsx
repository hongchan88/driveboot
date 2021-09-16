import { useEffect } from "react";

const useOutsideClick = (divComponent, id, callback) => {
  const handleClick = (e) => {
    console.log(e.target.id, "target id");

    if (
      divComponent.current.id &&
      !divComponent.current.contains(e.target) &&
      e.target.type != "button"
    ) {
      console.log("through");

      callback(divComponent.current.id);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
