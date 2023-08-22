import { createEffect } from "effector";

export const fetchPositions = createEffect<void, string[], any>(() =>
  fetch("https://myfailemtions.npkn.net/b944ff/").then((req) => req.json())
);
