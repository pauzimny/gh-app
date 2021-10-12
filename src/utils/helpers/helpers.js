export const filterEntries = (type, issues) => {
  switch (type) {
    case "Open":
      return issues.filter((i) => i.open);
    case "Closed":
      return issues.filter((i) => !i.open);
    case "All":
      return issues;
    default:
      return issues;
  }
};
export const countEntries = (type, issues) => {
  return filterEntries(type, issues).length;
};
