import * as XLSX from "xlsx";

const exportArrayToExcel = (arrayData, excelFileName) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(arrayData);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = excelFileName || "algorithm-data.xlsx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export { exportArrayToExcel };
