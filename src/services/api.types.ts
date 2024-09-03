export interface Response {
  total: number;
  total_pages: number;
  results: Photo[];
}

export interface Photo {
  id: string;
  description: string;
  urls: Urls;
  likes: number;
  user: User;
}

export interface Urls {
  small: string;
  regular: string;
}

export interface User {
  name: string;
  profile_image: { small: string };
}
