const steps = [
  {
    title: "What is the size of your TV?",
    subtitle: "Select the closest option to your TV diagonal",
    name: "tvSize",
    options: [
      {
        text: "Up to 42″",
        image: "/quiz/tv-small.webp",
      },
      {
        text: "42″ - 55″",
        image: "/quiz/tv-medium.webp",
      },
      {
        text: "56″ - 75″",
        image: "/quiz/tv-large.webp",
      },
      {
        text: "76″+ / Large",
        image: "/quiz/tv-xlarge.webp",
      },
    ],
  },
  {
    title: "What type of wall do you have?",
    subtitle: "This helps us prepare the right tools",
    name: "wallType",
    options: [
      {
        text: "Drywall",
        image: "/quiz/drywall.webp",
      },
      {
        text: "Brick / Concrete",
        image: "/quiz/brick.webp",
      },
      {
        text: "Wood / Paneling",
        image: "/quiz/wood.webp",
      },
      {
        text: "Not Sure / Other",
        image: "/quiz/other.webp",
      },
    ],
  },
  {
    title: "Any additional services needed?",
    subtitle: "Select one option or skip additional services",
    name: "services",
    required: true,
    options: [
      {
        text: "Wire Concealment",
        image: "/quiz/wire.webp",
      },
      {
        text: "Soundbar Install",
        image: "/quiz/soundbar.webp",
      },
      {
        text: "LED Backlight",
        image: "/quiz/led.webp",
      },
      {
        text: "Smart Home Setup",
        image: "/quiz/other.webp",
      },
    ],
  },
];

export default steps;
