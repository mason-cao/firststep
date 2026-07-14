export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
}

// The order tells the First Step story: environmental action, research,
// community service, fundraising, culture, recognition, then team life.
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/photos/paddle_cleanup.png",
    alt: "First Step volunteer in a yellow kayak collecting trash from the river",
    caption: "Paddle cleanup on the river",
  },
  {
    src: "/photos/microplastics_sampling_picture.jpg",
    alt: "Students preparing water sampling bottles at a wooded picnic table",
    caption: "Microplastics field sampling",
  },
  {
    src: "/photos/2024_lanier_shore_sweep.png",
    alt: "First Step volunteers gathered with filled cleanup bags at Lake Lanier",
    caption: "2024 Lake Lanier Shore Sweep",
    fit: "contain",
  },
  {
    src: "/photos/chattahoochee_riverside_cleanup.png",
    alt: "Volunteers wearing safety vests after a Chattahoochee riverside cleanup",
    caption: "Chattahoochee riverside cleanup",
  },
  {
    src: "/photos/sweep_the_hooch.jpg",
    alt: "First Step volunteers gathered beside the river for Sweep the Hooch",
    caption: "Sweep the Hooch",
  },
  {
    src: "/photos/west_bank_cleanup.png",
    alt: "A large volunteer group with bags of litter after a West Bank cleanup",
    caption: "West Bank cleanup",
  },
  {
    src: "/photos/cleanup_on_the_river.jpg",
    alt: "First Step volunteers holding a community support check after a river cleanup",
    caption: "Cleanup on the river",
  },
  {
    src: "/photos/earth_day_cleanup.png",
    alt: "Young volunteers holding orange cleanup bags on Earth Day",
    caption: "Earth Day cleanup",
  },
  {
    src: "/photos/first_trash_pick_up.png",
    alt: "Four young volunteers holding filled red litter bags in a park",
    caption: "The team's first trash pickup",
  },
  {
    src: "/photos/pictures_of_trash_bags.png",
    alt: "A filled cleanup bag beside litter collected from a wooded area",
    caption: "What the cleanup removed",
  },
  {
    src: "/photos/2023_lanier_shore_sweep.png",
    alt: "Volunteers gathered in the woods after the 2023 Lake Lanier Shore Sweep",
    caption: "2023 Lake Lanier Shore Sweep",
  },
  {
    src: "/photos/lakelanier_shore_sweep.jpg",
    alt: "First Step volunteers posing with cleanup supplies at Lake Lanier",
    caption: "Lake Lanier Shore Sweep team",
    fit: "contain",
  },
  {
    src: "/photos/tree_planting.jpg",
    alt: "A student volunteer planting a young tree while wearing a safety vest",
    caption: "Tree planting day",
  },
  {
    src: "/photos/greenhouse_help.png",
    alt: "First Step volunteers helping with plants inside a community greenhouse",
    caption: "Helping at the greenhouse",
  },
  {
    src: "/photos/microplastics_research.jpg",
    alt: "Students processing water samples under laboratory extraction equipment",
    caption: "Microplastics lab research",
  },
  {
    src: "/photos/microplasitscs_poster_presentation.jpg",
    alt: "Students presenting microplastics research posters to visitors",
    caption: "Microplastics poster presentation",
  },
  {
    src: "/photos/chattahoochee_riverkeepers.jpg",
    alt: "First Step representative visiting a Chattahoochee Riverkeeper information table",
    caption: "Connecting with Chattahoochee Riverkeeper",
  },
  {
    src: "/photos/food_warehouse.jpg",
    alt: "Volunteers sorting donated food at a warehouse table",
    caption: "Food warehouse volunteer shift",
  },
  {
    src: "/photos/cross_pointe_church_food_bank.png",
    alt: "Four volunteers holding a community food bank recognition check",
    caption: "Cross Pointe Church food bank",
  },
  {
    src: "/photos/food_pantry.png",
    alt: "Two volunteers organizing produce and pantry donations",
    caption: "Food pantry volunteering",
  },
  {
    src: "/photos/medshare.jpg",
    alt: "First Step volunteers gathered after a MedShare service shift",
    caption: "MedShare volunteer day",
  },
  {
    src: "/photos/lemonade_stand.jpg",
    alt: "Children and volunteers standing behind a neighborhood lemonade stand",
    caption: "Lemonade stand fundraiser",
  },
  {
    src: "/photos/garage_sale.png",
    alt: "Volunteers running a community garage sale with tables of donated items",
    caption: "Community garage sale",
  },
  {
    src: "/photos/2023_65_roses_CFF_champs.jpg",
    alt: "First Step team at the 2023 65 Roses Cystic Fibrosis Foundation walk",
    caption: "2023 65 Roses CFF Champions",
    fit: "contain",
  },
  {
    src: "/photos/2024_cff_5k.jpg",
    alt: "First Step volunteers gathered after the 2024 CFF 5K",
    caption: "2024 CFF 5K",
  },
  {
    src: "/photos/CFF_5K.jpg",
    alt: "A large First Step team posing beneath the CFF event arch",
    caption: "CFF 5K team",
    fit: "contain",
  },
  {
    src: "/photos/salvation_bell_ringing.jpg",
    alt: "Young musicians performing outside a store during Salvation Army bell ringing",
    caption: "Salvation Army bell ringing",
    fit: "contain",
  },
  {
    src: "/photos/salvation_army_outside_store.jpg",
    alt: "First Step musicians performing beside a Salvation Army kettle stand",
    caption: "Holiday performance for the Salvation Army",
  },
  {
    src: "/photos/salvation_army_violins.jpg",
    alt: "Student violinists performing together in red holiday clothing",
    caption: "Salvation Army violin performance",
  },
  {
    src: "/photos/one_degree_campaign.jpg",
    alt: "Students sharing climate information at the One Degree Campaign table",
    caption: "One Degree Campaign",
  },
  {
    src: "/photos/senior_home_performance.jpg",
    alt: "Young performers and residents gathered after a senior home performance",
    caption: "Senior home performance",
  },
  {
    src: "/photos/senior_center.jpg",
    alt: "First Step performers posing with senior center residents",
    caption: "Senior center visit",
  },
  {
    src: "/photos/peachtree_corner_daycare.jpg",
    alt: "Children and First Step performers gathered at a daycare program",
    caption: "Peachtree Corners daycare performance",
  },
  {
    src: "/photos/cultural_and_service.jpg",
    alt: "First Step members gathered after a cultural service performance",
    caption: "Culture and service program",
  },
  {
    src: "/photos/crabapp_town_center.jpg",
    alt: "Student performers posing together at Crabapple Town Center",
    caption: "Crabapple Town Center performance",
  },
  {
    src: "/photos/lunar_new_year_gala.png",
    alt: "First Step performers in red costumes at a Lunar New Year gala",
    caption: "Lunar New Year gala",
  },
  {
    src: "/photos/haveagreatsummercharity.png",
    alt: "A large group of youth performers standing across a charity event stage",
    caption: "Have a Great Summer charity event",
    fit: "contain",
  },
  {
    src: "/photos/shine_a_light_ceremony.png",
    alt: "Young volunteers holding certificates at the Shine A Light ceremony",
    caption: "Shine A Light volunteer recognition",
    fit: "contain",
  },
  {
    src: "/photos/PFPA_summit_conference.jpg",
    alt: "First Step students attending the PFPA summit conference",
    caption: "PFPA summit conference",
  },
  {
    src: "/photos/leadership_meeting.png",
    alt: "First Step student leaders gathered after an outdoor meeting",
    caption: "Leadership meeting",
  },
  {
    src: "/photos/leadership_meeting_grad_party.jpg",
    alt: "First Step members gathered with the team banner at a graduation celebration",
    caption: "Leadership graduation celebration",
  },
  {
    src: "/photos/team_bonding_kayak.jpg",
    alt: "Two First Step members kayaking together on a lake",
    caption: "Team bonding by kayak",
  },
  {
    src: "/photos/team_bonding_lake_boat.jpg",
    alt: "First Step members riding together on a lake boat",
    caption: "Team bonding on the lake",
  },
  {
    src: "/photos/team_bonding_rafting.jpg",
    alt: "First Step members rafting together through whitewater",
    caption: "Team bonding by raft",
  },
  {
    src: "/photos/team_bonding_snowboard_skiing.jpg",
    alt: "First Step members together in ski and snowboard gear",
    caption: "Winter team trip",
  },
];
