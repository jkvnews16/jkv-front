import { useEffect, useState } from "react";

export default function scrollEffect() {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      (e) => {
        setPos(e.path[1].scrollY);
        // setPos(e.path[1].scrollY % 50 == 0 ? e.path[1].scrollY : pos);
      },
      false
    );
  }, []);
  return pos;
}
