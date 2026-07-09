const steps = [
  {
    title: "What is the size of your TV?",
    subtitle: "Select the closest option to your TV diagonal",
    name: "tvSize",
    options: [
      {
        text: "Up to 42″",
        image: "/tv-small.png",
      },
      {
        text: "42″ - 55″",
        image: "/tv-medium.png",
      },
      {
        text: "56″ - 75″",
        image: "/tv-large.png",
      },
      {
        text: "76″+ / Large",
        image: "/tv-xlarge.png",
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
        image: "/drywall.png",
      },
      {
        text: "Brick / Concrete",
        image: "/brick.png",
      },
      {
        text: "Wood / Paneling",
        image: "/wood.png",
      },
      {
        text: "Not Sure / Other",
        image: "/other.png",
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
        image: "/wire.png",
      },
      {
        text: "Soundbar Install",
        image: "/soundbar.png",
      },
      {
        text: "LED Backlight",
        image: "/led.png",
      },
      {
        text: "Smart Home Setup",
        image: "/other.png",
      },
    ],
  },
];

export default steps;
