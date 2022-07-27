export interface Toc {
  label: string;
  href: string;
  id: string;
}

export interface Book {
  url: string;
  name: string;
  playlist: Array<LinkedBgm>;
}

export interface Bgm {
  name: string;
  url: string;
}

export interface LinkedBgm extends Bgm {
  chapter: number;
}
