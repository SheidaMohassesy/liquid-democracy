// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const mockData = [
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img01.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
      days: 20,
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img02.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
      days: 50,
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img03.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
      days: 90,
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img04.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
      days: 50,
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img01.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
      days: 30,
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img02.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
      days: 10,
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img03.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
      days: 65,
    },
  ];
  res.status(200).json(mockData);
}
