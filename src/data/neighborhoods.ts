export const neighborhoods = [
  {
    "slug": "woods-orchard",
    "name": "Woods and Orchard roads",
    "h1": "Hydro Jetting in Woods and Orchard roads, Solvay NY",
    "title": "Hydro Jetting: Woods and Orchard roads, Solvay NY",
    "description": "Drain cleaning in Woods and Orchard roads, Solvay, NY. Read local context and inspection questions. Call to confirm availability.",
    "intro": "The public library history identifies its site at the corner of Woods and Orchard roads and its opening in 1904. That landmark history does not establish the age or condition of nearby private sewer pipes.",
    "sections": [
      {
        "h": "What local context matters in Woods and Orchard roads?",
        "ps": [
          "The <a href=\"https://solvaylibrary.org/about-us/history/\" target=\"_blank\" rel=\"noopener noreferrer\">public library history</a> identifies its site at the corner of Woods and Orchard roads and its opening in 1904. That landmark history does not establish the age or condition of nearby private sewer pipes.",
          "Local history does not identify private pipe material, age or condition. Confirm access and inspect the actual line."
        ]
      },
      {
        "h": "What should you explain before drain cleaning?",
        "ps": [
          "Describe affected fixtures, whether wastewater backed up and how long a previous cleaning helped. Ask whether the blockage is on the private line or needs a public-system report."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does being in Woods and Orchard roads confirm availability?",
        "a": "No. Confirm availability for the exact address and work requested. A request is not an appointment."
      },
      {
        "q": "Does local history establish the age of my sewer?",
        "a": "No. A building may have replacement plumbing. Use property records and inspection rather than place history."
      },
      {
        "q": "Is hydro jetting suitable for every pipe?",
        "a": "No. Ask a qualified professional to assess the line, access and blockage before recommending high-pressure cleaning."
      },
      {
        "q": "Can cleaning repair a broken sewer pipe?",
        "a": "Cleaning removes an obstruction; it does not rebuild a damaged pipe. Ask whether the inspection shows a repair issue as well as a blockage."
      }
    ],
    "sources": [],
    "related": [
      "recurring-clogs-and-slow-drains",
      "tree-root-intrusions"
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]));
