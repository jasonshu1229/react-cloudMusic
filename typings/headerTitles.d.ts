interface HeaderTitle {
  title: string;
  type: string;
  link: string;
}

declare module '@/assets/header-titles.json' {
  const headerTitles: HeaderTitle[];
  export default headerTitles;
}
