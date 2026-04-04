export const assetPath = (src: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
