import { useMemo } from "react";
import { colors } from "../constants/Colors";

export function useColors() {
  const systemTheme = useMemo(() => colors, []);
  return systemTheme;
}
