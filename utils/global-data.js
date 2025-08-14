export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Algebra 2 with Mr. Tolentin';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Wolfpack, welcome';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'San Ramon Valley High School\nB205 07:30-16:00 M-F\nMake It Happen';

  return {
    name,
    blogTitle,
    footerText,
  };
};
