export const abbreviate = (st: string) => {
  try {
    return st.split(" ").map((item) => item[0].toUpperCase());
  } catch {
    return "";
  }
};
