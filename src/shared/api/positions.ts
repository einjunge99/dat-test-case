import { createEffect } from "effector";

export const fetchPositions = createEffect<void, string[], unknown>(() =>
  fetch("https://myfailemtions.npkn.net/b944ff/").then((req) => req.json())
);

export const updateActivePositions = createEffect<void, string[], unknown>(
  (params) =>
    fetch("https://myfailemtions.npkn.net/b944ff/", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((req) => req.json())
);
