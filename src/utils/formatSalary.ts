export function formatSalary(min: number, max: number) {
  const str_min = min.toLocaleString();
  const str_max = max.toLocaleString();

  if (!min && !max) return "TBD";
  if (min && max) return `${str_min} - ${str_max}`;

  if (min == 0 && max > min) return str_max;

  return str_min;
}
