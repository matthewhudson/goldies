---
'goldies': minor
---

New color utilities: `hexToRgb`, `getContrastRatio` (the WCAG contrast ratio between two colors), `calculateRelativeLuminance`, `generateRandomHexColor` and `generateRandomHexColorInRange`, at `goldies/color/<name>` and on `goldies.color`. They take 3- or 6-digit hex colors, with or without the `#`, and throw an error for anything else.
