import { useEvent, useStore } from "effector-react";
import * as model from "./model";
import { useEffect } from "react";

const POSITIONS: { [key: string]: number } = {
  A: 4,
  B: 5,
  C: 4,
};

const categories = Object.keys(POSITIONS).map((key) =>
  Array.from({ length: POSITIONS[key] }, (_, index) => `${key}${index + 1}`)
);

export const Landing = () => {
  const positions = useStore(model.$positions);
  const handlePageMount = useEvent(model.pageMounted);

  useEffect(() => {
    handlePageMount();
  }, [handlePageMount]);

  return (
    <div>
      {categories.map((category) => (
        <div>
          {category.map((position) => (
            <div
              style={{
                color: positions.includes(position) ? "red" : "",
              }}
            >
              {position}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
