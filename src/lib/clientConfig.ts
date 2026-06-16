// ─────────────────────────────────────────────────────────────────────────────
// CLIENT LOGO CONFIG
// ─────────────────────────────────────────────────────────────────────────────

// Import all 16 logos
import logo1 from '../assets/logo1.png';
import logo10 from '../assets/logo10.png';
import logo11 from '../assets/logo11.png';
import logo12 from '../assets/logo12.png';
import logo13 from '../assets/logo13.png';
import logo14 from '../assets/logo14.png';
import logo15 from '../assets/logo15.png';
import logo16 from '../assets/logo16.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';

export interface ClientLogo {
  name: string;
  src: string;
}

export interface ClientCard extends ClientLogo {
  industry: string;
  detail: string;
}

// ── Marquee logos (scrolling rows) ──────────────────────────────────────────
export const marqueeLogos: ClientLogo[] = [
  { name: 'Shoppers Drug Mart', src: logo1 },
  { name: 'Tim Hortons', src: logo2 },
  { name: 'CIBC', src: logo3 },
  { name: 'Scotiabank', src: logo4 },
  { name: 'Rogers', src: logo5 },
  { name: 'Loblaw', src: logo6 },
  { name: 'BMO', src: logo7 },
  { name: 'RBC', src: logo8 },
  { name: 'Bell', src: logo9 },
  { name: 'TD Bank', src: logo10 },
  { name: 'Molson Coors', src: logo11 },
  { name: 'Heineken', src: logo12 },
  { name: 'Coca-Cola', src: logo13 },
  { name: 'Pepsi', src: logo14 },
  { name: 'Nike', src: logo15 },
  { name: 'Adidas', src: logo16 },
];

// ── Client cards (grid section) ─────────────────────────────────────────────
export const clientCards: ClientCard[] = [
  {
    name: 'Scotiabank',
    industry: 'Banking & Finance',
    detail: 'Branded merch & promotional programs across 1,300+ locations.',
    src: logo1,
  },
  {
    name: 'Spotify',
    industry: 'Music',
    detail: 'Custom apparel, kitting & sampling events for national campaigns.',
    src: logo2,
  },
  {
    name: 'Google',
    industry: 'Leading Company',
    detail: 'Corporate awards, uniforms & large-format signage.',
    src: logo3,
  },
  {
    name: 'Youtube',
    industry: 'Music & Entertainment',
    detail: 'Branded merch, trade show displays & co-packing solutions.',
    src: logo4,
  },
  {
    name: 'Manulife',
    industry: 'Benefits & Insurance',
    detail: 'Event signage, branded uniforms & promotional merchandise.',
    src: logo5,
  },
  {
    name: 'Timberland',
    industry: 'Clothing & Apparels',
    detail: 'Sampling events, kitting & in-store branded materials.',
    src: logo6,
  },
  {
    name: 'Fido',
    industry: 'Communication',
    detail: 'Custom awards programs, apparel & print collateral.',
    src: logo7,
  },
  {
    name: 'DHL',
    industry: 'Transport',
    detail: 'Corporate events, branded merchandise & signage.',
    src: logo8,
  },
  {
    name: 'Milkbone',
    industry: 'Pet Company',
    detail: 'Branded merch, demo events & custom display solutions.',
    src: logo9,
  },
  {
    name: 'York University',
    industry: 'Education',
    detail: 'Corporate apparel, signage & promotional programs.',
    src: logo10,
  },
  {
    name: 'Hoka',
    industry: 'Shoes & Apparels',
    detail: 'Event branding, sampling activations & merch.',
    src: logo11,
  },
  {
    name: 'Redbull',
    industry: 'Beverage',
    detail: 'Co-packing, sampling activations & experiential event materials.',
    src: logo12,
  },
  {
    name: 'Heins',
    industry: 'Food',
    detail: 'Branded merchandise & national promotional campaigns.',
    src: logo13,
  },
  {
    name: 'Microsft',
    industry: 'Ledaing Software Company',
    detail: 'Sampling events, branded apparel & signage.',
    src: logo14,
  },
  {
    name: 'Ugg',
    industry: 'Apparel',
    detail: 'Custom apparel, event branding & promotional products.',
    src: logo15,
  },
  {
    name: 'Kijiji',
    industry: 'Marketplace',
    detail: 'Branded merchandise, uniforms & event displays.',
    src: logo16,
  },
];
