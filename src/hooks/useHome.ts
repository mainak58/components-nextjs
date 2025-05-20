export default function useHome() {
  const home = [
    {
      id: 1,
      name: " Home Section1",
    },
    {
      id: 2,
      name: "Home Section2",
      subsection: [
        {
          id: 4,
          name: "Home Sub Section2_1",
        },
        {
          id: 5,
          name: "Home Sub Section2_2",
        },
      ],
    },
    {
      id: 3,
      name: "Home Section1",
    },
  ];

  return home;
}
