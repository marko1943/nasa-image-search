// Just some weird types I found in response, for better type safeguarding
type Link = {
  href: string;
  rel: string;
  render: string;
};

type Data = {
  center: string;
  date_created: string; //"1998-06-08T15:11:30Z" is it a date?
  description: string;
  description_508: string;
  keywords: [];
  media_type: string; // "image"
  nasa_id: string;
  secondary_creator: string;
  title: string;
  location: string;
};

export type NasaImageType = {
  data: Data[];
  href: string;
  links: Link[];
};
