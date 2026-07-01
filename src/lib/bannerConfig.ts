// Central config for all page hero banner images.
// Update any value with a new imported asset to change that page's banner.

import banner3 from '../assets/Home_Banner copy copy.png';
import banner2 from '../assets/Home_Banner copy.png';
import { default as banner1, default as homeBannerImg } from '../assets/Home_Banner.png';

export const banners = {
  home: homeBannerImg,
  team: banner1,
  services: banner2,
  clients: banner3,
  serviceDetail: banner2,
  login: banner1,
  contact: banner1
};
