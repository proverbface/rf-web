const thumb = {
  methods: {
    getThumb: (image: string) => {
      let extension: any;
      if (image) {
        extension = image.split('.').pop();
      }
      return (
        image.substring(0, image.length - extension.length - 1) +
        '@thumb_128' +
        '.' +
        extension
      );
    },
  },
};

export default thumb;
