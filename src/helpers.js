export const GetVimeoIDFromUrl = (url) => {
  typeof window !== 'undefined' && window.fetch(`https://vimeo.com/api/oembed.json?url=${url}`)
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line
      console.log(`Vimeo ID: ${data.video_id}`);
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error('Problem connecting to Vimeo API:', error);
    });
};

export const slugify = (text) => text
  .toString()
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-')
  .replace(/^-+/, '')
  .replace(/-+$/, '');
