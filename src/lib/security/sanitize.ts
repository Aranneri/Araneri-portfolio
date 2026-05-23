export function sanitizePlainText(value: string): string {
  const trimmed = value.trim();
  const withoutTags = trimmed.replace(/<[^>]*>/g, "");
  const withoutControls = withoutTags.replace(/[\u0000-\u001F\u007F]/g, "");
  return withoutControls.replace(/[<>]/g, "");
}
