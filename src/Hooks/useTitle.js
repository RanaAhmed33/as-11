import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | LEARN WITH TOYS `;
  }, [title]);
};

export default useTitle;
