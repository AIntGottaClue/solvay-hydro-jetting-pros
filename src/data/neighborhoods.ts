export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "woods-orchard",
    "name": "Woods and Orchard roads",
    "h1": "Hydro Jetting in Woods and Orchard roads, Solvay NY",
    "title": "Hydro Jetting in Woods and Orchard roads, Solvay | Solvay Hydro Jetting Pros",
    "description": "Hydro jetting near Woods and Orchard roads, Solvay NY: how a long-standing landmark corner shapes drain questions and cleaning plans. Call (877) 761-0283.",
    "intro": "The public library history places its site at the corner of Woods and Orchard roads and its opening in 1904. That landmark history does not establish the age or condition of nearby private sewer pipes.",
    "heroPs": [
      "Homes near Woods and Orchard roads can develop slow drains from grease, scale or roots, and the age of a nearby landmark tells you nothing about the line under your house. Hydro jetting can clear buildup from a sound lateral when an inspection shows it is the right method. Describe the affected fixtures and when the problem started."
    ],
    "bodyH2": "Hydro Jetting for Woods and Orchard roads Properties",
    "bodyPs": [
      "The public library history identifies its site at the corner of Woods and Orchard roads, and its opening in 1904. A landmark that old anchors the area, which has homes from several eras within a short walk.",
      "Homes of different ages have different plumbing, and a long-settled area usually has laterals that were repaired or replaced at different times. The library's date does not date your pipe. Records and a camera inspection do.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. Inspection comes first, and condition decides whether the method is right and where it should stop."
    ],
    "considerations": [
      "Records of past repairs, replacements or cleanings",
      "Which fixtures are slow and whether the problem is recent",
      "Mature trees near the path of the lateral",
      "Where the cleanout is and whether it is easy to reach",
      "Cooking and disposal habits in the kitchen",
      "Whether the problem sits in the private line or the public system"
    ],
    "svcH2": "Hydro Jetting Services in Woods and Orchard roads",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "A kitchen line used for years can carry a hardened grease layer.",
      "tree-root-intrusions": "Mature yard trees near an older lateral can reach aged joints.",
      "recurring-clogs-and-slow-drains": "A drain that keeps slowing after clearing is holding something the clearing missed.",
      "mineral-and-scale-deposits": "Scale narrows older pipe slowly, especially at bends.",
      "preventative-maintenance": "An inspection and planned cleaning can keep a small buildup from becoming a backup."
    },
    "appsH2": "Hydro Jetting Situations Near a Neighborhood Landmark",
    "apps": [
      {
        "h": "Homes of mixed ages",
        "ps": [
          "Houses near each other can have very different pipe. Describe your home's age and any known repairs so the crew knows what to expect."
        ]
      },
      {
        "h": "Kitchen lines that keep slowing",
        "ps": [
          "Grease and soap residue harden over time. Jetting strips the layer from the pipe wall when the pipe can take it."
        ]
      },
      {
        "h": "Roots from mature yard trees",
        "ps": [
          "Established trees mean established roots. If a line clears and then slows again, roots at a joint are a common reason."
        ]
      },
      {
        "h": "Staying ahead of a repeat",
        "ps": [
          "A line that clogs twice is telling you something. Planned cleaning after an inspection beats an emergency call."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Woods and Orchard roads",
    "implPs": [
      "A long-settled area brings familiar questions about material, history and access. None can be answered from the curb.",
      "These are the points that shape the work near Woods and Orchard roads."
    ],
    "impl": [
      {
        "h": "Landmark age is not pipe age",
        "ps": [
          "The date on a nearby building says nothing about your line."
        ],
        "bullets": [
          "Gather any repair records",
          "Expect inspection before cleaning"
        ]
      },
      {
        "h": "Roots and joints",
        "ps": [
          "Older joints give roots a way in, and clearing roots does not repair the opening."
        ],
        "bullets": [
          "Note trees near the line",
          "Ask whether repair makes sense after clearing"
        ]
      },
      {
        "h": "Private line, public system",
        "ps": [
          "The public sewer is separate from your lateral."
        ],
        "bullets": [
          "Describe whether neighbors have similar symptoms",
          "Ask whether a public-system report is needed"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Woods and Orchard roads",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Locate the cleanout",
        "d": "Find the access point and note trees or additions near the line's path."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Woods and Orchard roads, Solvay NY",
    "mapIntro": "Solvay Hydro Jetting Pros takes requests in Woods and Orchard roads and across Solvay. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Woods Rd & Orchard Rd, Solvay, NY",
    "mapTitle": "Map of Woods and Orchard roads, Solvay, NY",
    "nearbyH2": "Serving Woods and Orchard roads and Nearby Solvay Neighborhoods",
    "nearbyP": "Solvay Hydro Jetting Pros serves Woods and Orchard roads and the rest of Solvay. This page covers the local context that matters for properties here.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Woods and Orchard roads",
    "faqs": [
      {
        "q": "Does the 1904 library history tell me about my pipes?",
        "a": "No. It is local history and not evidence about a private line. Records and an inspection are."
      },
      {
        "q": "Why does my kitchen drain keep slowing?",
        "a": "Residue can harden on the pipe wall over time. If clearing helps only briefly, the layer may still be there."
      },
      {
        "q": "Can roots be the cause?",
        "a": "Yes, if they have entered a joint. A camera can confirm it."
      },
      {
        "q": "Will cleaning fix a cracked pipe?",
        "a": "No. It removes an obstruction. A crack needs a repair assessment."
      },
      {
        "q": "Who handles a public sewer problem?",
        "a": "The municipality. A blockage in the private lateral is the property owner's."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Woods and Orchard roads Hydro Jetting Project With Solvay Hydro Jetting Pros",
    "ctaPs": [
      "A landmark corner tells you about the neighborhood and nothing about the pipe beneath your house. A clear account of the symptoms gets the inspection pointed in the right direction.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
