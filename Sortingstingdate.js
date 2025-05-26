// Sorting sting data like 23-apr-2025

      const isValidDateString = (val: any): val is string => {
      return typeof val === 'string' && !isNaN(Date.parse(val));
    };

    const parseDateToTimestamp = (val: string): number => {
      return new Date(val).getTime(); 
    };

  const sortedData = useMemo(() => {  // use Usememo for optimization
    if (!sortKey) return data

    const column = columns.find(col => col.accessorKey === sortKey);
    if (!column) return data;  

    return [...data].sort((a, b) => {
      console.log("***",data,sortKey)
      const aValue = a[sortKey];
      const bValue = b[sortKey];

  if (isValidDateString(aValue) && isValidDateString(bValue)) {
    const aDate = parseDateToTimestamp(aValue);
    const bDate = parseDateToTimestamp(bValue);
    return sortDirection === "asc" ? aDate - bDate : bDate - aDate;
  }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      return sortDirection === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, []);





It will work for:
✅ 1. Standard JavaScript date strings, like:
"25-Apr-2025" ✔️

"2025-04-25" (ISO 8601) ✔️

"April 25, 2025" ✔️

"04/25/2025" ✔️ (in many browsers)

✅ 2. Milliseconds timestamps:
This version will now handle:

"25-Apr-2025" ✅

1714003200000 (milliseconds) ✅

"2025-04-25T12:00:00Z" ✅


