// icons: https://pictogrammers.com/library/mdi/

export interface Training {
  /** The training internal identifier. */
  id: number;
  /** The URL of the training's logo. */
  logo: string;
  /** Accessibility: the alternative description to use in place of the logo for screen readers. */
  alt: string;
  /** The training's title, showing its scope. */
  title: string;
  /** How long the training lasts, in months. */
  months: number;
  /** Where the training will be held. */
  location: 'Bordeaux' | 'Paris' | 'Nantes';
  /** The training price. */
  price: number;
  /** The number of seats still available to receive new trainees. */
  seats: number;
  /** If `true`, the number of seats' display changes to emphasize the small number of seats left. */
  fewSeatsLeft: boolean;
}

export const allTrainingsRaw: Training[] = [
  {
    id: 1,
    logo: 'https://www.frenchtechbordeaux.com/wp-content/uploads/2021/11/Oclock.png',
    alt: "O'clock",
    title: 'Web JS Developer',
    months: 6,
    location: 'Bordeaux',
    price: 7000,
    seats: 23,
    fewSeatsLeft: false,
  },
  {
    id: 2,
    logo: 'https://www.lewagon.com/assets/v4/logo-lewagon-9c19fb39a748cd3b1f49059ce0dc6c0dfc4cc2447d5a9a3e01bd2d5a214faf3c.svg',
    alt: 'Le Wagon',
    title: 'Full-stack Developer',
    months: 3,
    location: 'Paris',
    price: 8300,
    seats: 4,
    fewSeatsLeft: false,
  },
  {
    id: 3,
    logo: 'https://adatechschool.fr/app/uploads/2022/05/icn_logo_ada@2x.png',
    alt: 'Ada Tech School',
    title: 'Web & mobile Developer',
    months: 24,
    location: 'Nantes',
    price: 8000,
    seats: 8,
    fewSeatsLeft: false,
  },
  {
    id: 4,
    logo: 'https://avatars.githubusercontent.com/u/54281267?s=280&v=4',
    alt: 'Ironhack',
    title: 'Web JS Developer',
    months: 4,
    location: 'Paris',
    price: 8500,
    seats: 13,
    fewSeatsLeft: false,
  },
  {
    id: 5,
    logo: 'https://www.lereacteur.io/images/lereacteur_rond_violet.png',
    alt: 'Le Reacteur',
    title: 'React Developer',
    months: 3,
    location: 'Paris',
    price: 7500,
    seats: 16,
    fewSeatsLeft: false,
  },
  {
    id: 6,
    logo: 'https://www.lereacteur.io/images/lereacteur_rond_violet.png',
    alt: 'Le Reacteur',
    title: 'Django Developer',
    months: 3,
    location: 'Paris',
    price: 7500,
    seats: 0,
    fewSeatsLeft: false,
  },
];

// export type Training = typeof allTrainingsRaw[number];

export function clone<T extends Training>(arrayOfObjects: T[]): T[] {
  return arrayOfObjects.map(obj => ({ ...obj }));
}
