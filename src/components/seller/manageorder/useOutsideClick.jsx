import { useEffect } from "react";

const useOutsideClick = (divComponent, callback) => {
  const handleClick = (e) => {
    if (
      divComponent?.current?.id &&
      !divComponent.current.contains(e.target) &&
      e.target.type !== "button"
    ) {
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
