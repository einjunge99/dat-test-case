import { createEvent, createStore, sample } from "effector";
import { positionsApi } from "../../shared/api";

export const $positions = createStore<string[]>([]);

export const pageMounted = createEvent();

sample({
  clock: pageMounted,
  target: [positionsApi.fetchPositions],
});

$positions.on(
  positionsApi.fetchPositions.doneData,
  (_, positions) => positions
);
