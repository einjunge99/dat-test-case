import { useEvent, useStore } from "effector-react";
import * as model from "./model";
import { useEffect, useRef } from "react";
import { IPluginOptions } from "../../App";
import { Shape } from "../../components/elements/shape";
import styles from "./landing.module.scss";

const POSITIONS: { [key: string]: number } = {
  A: 4,
  B: 5,
  C: 4,
};

const categories = Object.keys(POSITIONS).map((key) =>
  Array.from({ length: POSITIONS[key] }, (_, index) => `${key}${index + 1}`)
);

interface IProps {
  options: IPluginOptions;
}

export const Landing: React.FC<IProps> = ({ options }) => {
  const positions = useStore(model.$positions);
  const handlePageMount = useEvent(model.pageMounted);
  const handleTogglePosition = useEvent(model.togglePosition);
  const prevPositionsRef = useRef<string[] | null>();

  useEffect(() => {
    if (positions == null) {
      return;
    }
    if (!prevPositionsRef.current) {
      prevPositionsRef.current = positions;
      return;
    }
    const { onPositionChange, onComplete } = options;
    const isCompleted = prevPositionsRef.current?.length > positions.length;
    if (isCompleted) {
      onComplete && onComplete(positions);
    }
    onPositionChange && onPositionChange(positions);
    prevPositionsRef.current = positions;
  }, [options, positions]);

  useEffect(() => {
    const { onInit, initializedOptions = [] } = options;
    onInit && onInit();
    handlePageMount(initializedOptions);
  }, [handlePageMount, options]);

  return (
    <div className={styles.container}>
      <img src={"https://i.ibb.co/9VDdHMf/car.png"} />
      <div className={styles.positions}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            {category.map((label) => (
              <div
                className={styles.overlayItem}
                key={label}
                onClick={() => handleTogglePosition(label)}
              >
                <Shape filled={positions?.includes(label) || false} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
