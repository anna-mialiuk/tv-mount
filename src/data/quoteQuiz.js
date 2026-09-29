export const sizeStep = {
  title: "What is the size of your TV?",
  subtitle: "Select the closest option to your TV diagonal",
  sizes: [
    { text: "31″ or less", price: 65 },
    { text: "32″ - 59″", price: 119 },
    { text: "60″ - 69″", price: 129, needsTechnicians: true },
    { text: "70″ - 85″", price: 145, needsTechnicians: true },
    { text: "86″ - 100″", price: 199, needsTechnicians: true },
    {
      text: "100″+ or combining several TVs into one screen",
      price: 259,
      needsTechnicians: true,
    },
    { text: "Frame TV", price: 179 },
  ],
  removeOldTv: { text: "Include removing old TV", price: 49 },
  quantityLabel: "Select quantity of TVs*",
  quantities: ["1 TV", "2 TVs", "3 TVs", "4 TVs", "5+ TVs"],
  techniciansTitle: "Select number of technicians for 60″+",
  technicians: [
    { text: "60″+ (1 tech + your help)", price: 0 },
    { text: "60″+ (2 techs, full service)", price: 39 },
  ],
};

export const QUIZ_DISCOUNT = 33;

const steps = [
  {
    title: "What type of wall do you have?",
    subtitle: "This helps us prepare the right tools",
    name: "wallType",
    options: [
      {
        value: "Drywall",
        title: "Drywall",
        caption: "(Standard)",
        image: "/quiz/drywall.webp",
      },
      {
        value: "Brick / Concrete",
        title: "Brick /",
        caption: "Concrete",
        image: "/quiz/brick.webp",
      },
      {
        value: "Wood / Paneling",
        title: "Wood /",
        caption: "Paneling",
        image: "/quiz/wood.webp",
      },
      {
        value: "Not sure / Other",
        title: "Not Sure /",
        caption: "Other",
      },
    ],
  },
  {
    title: "Any additional services needed?",
    subtitle: "Select all that apply (optional)",
    name: "services",
    multiple: true,
    noneOption: "No additional services needed — just the mount",
    options: [
      {
        value: "Wire Concealment",
        title: "Wire",
        caption: "Concealment",
        image: "/quiz/wire.webp",
      },
      {
        value: "Soundbar Install",
        title: "Soundbar",
        caption: "Install",
        image: "/quiz/soundbar.webp",
      },
      {
        value: "LED Backlight",
        title: "LED",
        caption: "Backlight",
        image: "/quiz/led.webp",
      },
    ],
  },
];

export default steps;
