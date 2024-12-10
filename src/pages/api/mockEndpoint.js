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
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img02.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img03.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img04.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img01.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img02.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img03.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
    },
  ];
  res.status(200).json(mockData);
}
