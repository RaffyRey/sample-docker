import axios from "axios";

export function fetchCount(amount = 1, token) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
