"use client";

import { Globe } from "lucide-react";
import { LOCALES } from "@/locales/constants";
import {
  useCurrentLocale,
  useChangeLocale,
  useScopedI18n,
} from "@/locales/client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LocaleSelector() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  const t = useScopedI18n("localeSelector");

  return (
    <div data-testid="locale-selector">
      <Select value={locale} onValueChange={changeLocale}>
        <SelectTrigger className="bg-white border-none shadow-none">
          <Globe size={20} className="text-foreground" />
          <SelectValue placeholder={t(`options.${locale}`)} />
        </SelectTrigger>
        <SelectContent>
          {LOCALES.map((locale) => (
            <SelectItem key={locale} value={locale}>
              {t(`options.${locale}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
