function formatDate(date, fullDate = true) {
  const daysOfWeek = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  const day = date.getDate();
  const month = date.getMonth() + 1; // Janeiro é 0, então adicionamos 1
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (fullDate) {
    // Formatar data completa (incluindo o dia da semana)
    return `${daysOfWeek[date.getDay()]}, ${String(day).padStart(
      2,
      "0"
    )}/${String(month).padStart(2, "0")}, ${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}`;
  } else {
    // Formatar apenas a data (sem o dia da semana)
    return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}`;
  }
}

export default formatDate;
