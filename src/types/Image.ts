interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string | undefined;
  likes: number;
  description: string | undefined;
  user?: {
    name: string;
  };
}

export default Image;
