"use client";

import { ReactElement } from "react";
import { I18nProviderClient } from "@/locales/client";

export function LocaleProvider({
  locale,
  children,
}: {
  locale: string;
  children: ReactElement;
}) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
