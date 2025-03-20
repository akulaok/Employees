import {parse, format, isValid} from "date-fns";
import {ru} from "date-fns/locale";

export function formatDate(inputDate: string | undefined): string {
  if (!inputDate) {
    return "Некорректная дата";
  }

  const date = parse(inputDate, "dd MMMM yyyy", new Date(), {locale: ru});

  if (!isValid(date)) {
    return "Некорректная дата";
  }

  return format(date, "dd.MM.yyyy");
}
