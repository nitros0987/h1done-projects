window.H1_PACKS = window.H1_PACKS || {};

window.H1_PACKS.biology = {
  subject: "Leaving Certificate Biology",
  aacName: "Biology in Practice Investigation",
  weighting: "40% of the final grade",
  brief: {
    label: "Recreation of the live LC 2027 brief for demo \u2014 swap in the official PDF when available",
    pdf: "assets/biology-brief.pdf",
    title: "Leaving Certificate Biology \u2013 Investigation Brief 2027",
    subtitle: "Biology in Practice Investigation \u00b7 issued by the State Examinations Commission, January 2026 (recreated for this demo)",
    sections: [
      {
        h: "1. To the candidate",
        p: [
          "The State Examinations Commission (SEC) publishes a brief each year for the Biology in Practice Investigation, the 40% Additional Assessment Component of Leaving Certificate Biology. This brief is for candidates examining in 2027 and was issued in January 2026, in Term 2 of Year 1.",
          "The brief gives the context and stimulus for your investigation. You will complete scientific research on an issue related to the brief, design and conduct an experiment to generate your own primary data, and develop an evidence-based argument in response to the brief. The investigation takes approximately 20 hours across the course, and it is designed to be part of your ordinary biology classwork, not separate from it."
        ]
      },
      {
        h: "2. The stimulus: three investigation topics",
        p: [
          "Choose ONE of the three topics below as the starting point for your research and experiment. Each is open-ended: you decide the particular issue, the research question and the experiment."
        ],
        sub: [
          {
            h: "Topic 1 \u2013 Membranes",
            p: [
              "Every cell is enclosed by a membrane \u2013 a partially permeable barrier that controls what enters and leaves. Membranes are made of molecules that are sensitive to their surroundings: heat, alcohol and acids can disrupt them, changing how permeable they become.",
              "Everyday starting points: why beetroot stains the cooking water when it is boiled; why alcohol stings on a cut; how the inside of an egg models a cell; what happens to thawed frozen strawberries; why some plants wilt in heat but recover when watered."
            ]
          },
          {
            h: "Topic 2 \u2013 Osmosis",
            p: [
              "Water moves across partially permeable membranes from where water is more concentrated to where it is less concentrated. This movement \u2013 osmosis \u2013 matters to every living thing, all the time.",
              "Everyday starting points: why salting or brining draws water out of food; why salad wilts and crisp lettuce revives in water; what sports drinks are designed to do; why concentrating sugar preserves jam; how plant cells become firm or limp."
            ]
          },
          {
            h: "Topic 3 \u2013 Food preservation",
            p: [
              "Food spoils when microorganisms grow on it and enzymes inside it keep working. Preservation methods \u2013 cold, heat, salt, sugar, acid, drying, vacuum and sealing \u2013 all work by slowing or stopping that growth and activity.",
              "Everyday starting points: why milk lasts longer in the fridge than on the counter; what brine does to bacon or cabbage; why jam keeps once opened only if refrigerated; how yeast behaves in bread-making and why salt is measured carefully; why frozen peas taste fresh months later."
            ]
          }
        ]
      },
      {
        h: "3. The task",
        p: [
          "Having chosen a topic, complete two connected pieces of work:"
        ],
        list: [
          "Scientific research on an issue related to your chosen topic: draw on secondary sources, develop a research question, review and summarise evidence from different viewpoints, and keep a record of findings, download dates and references in your investigative log.",
          "An experiment related to your chosen topic: pose a testable hypothesis, plan and design the experiment, conduct it under your teacher's supervision in the laboratory or a field setting, gather primary data, analyse it, and form justifiable conclusions."
        ]
      },
      {
        h: "4. Requirements",
        p: [
          "Keep an investigative log throughout \u2013 a personal record of your approach, decisions, data and reflections. The log is not submitted to the SEC, but it is where your report comes from. The investigation is your own individual work; you may get help from peers only to handle equipment safely, and the data you use must be your own.",
          "Students should reflect on difficulties experienced during planning, record how they overcame them, and treat unanticipated outcomes as a valid and important part of the scientific process."
        ],
        list: [
          "Approximately 20 hours in total across the stages: initial response (1-2 hours), background research (2-3 hours), designing and planning (2-3 hours), conducting (depends on the brief), analysis and conclusions (1-2 hours), finalising the report (up to 4 hours).",
          "Reference every source that is not your own \u2013 including any AI tools: the tool's name, the date, how it was used, and the shareable chat URL or the prompt used.",
          "The report is submitted in Year 2 in a digital format prescribed by the SEC; the accompanying instructions set the word count, number of images, required structure and section headings."
        ]
      },
      {
        h: "5. Timeline",
        p: [
          "This brief issued in January 2026 (Term 2 of Year 1). Stages are completed when they best fit teaching and learning across 5th year \u2013 they do not need to run in one continuous block. All work must be concluded by the date set by the SEC, and the report is submitted for marking in Year 2."
        ]
      },
      {
        h: "6. Authenticity and the use of AI",
        p: [
          "All work submitted for assessment must be your own. Submitting work not entirely completed by you is a significant breach of regulations and may lead to penalties, up to and including the withholding of results. Material generated by AI software must be acknowledged in your references. Direct copying from any source, including AI-generated material, is not permitted."
        ]
      }
    ]
  },
  stages: [
    {
      name: "Initial response to the investigation brief",
      blurb: "Open the brief, pick your topic \u2013 membranes, osmosis or food preservation \u2013 and sketch first directions.",
      time: "1-2 hours",
      promptQuestions: [
        "What do I already know about the topic and/or issue in the Investigation Brief?",
        "What research and experimental activities in biology connect to the topic and/or issue in the Investigation Brief?",
        "What experiment am I interested in completing?"
      ],
      definitionOfDone: [
        "I can explain the context and biological phenomenon in the brief in my own words",
        "I have chosen one of the three topics \u2013 membranes, osmosis or food preservation \u2013 and listed the areas I could explore within it",
        "I have connected the brief to my own interests, experiences and prior learning",
        "I have started an investigative log to record my approach and gather resources"
      ],
      questions: [
        "Read the three investigations on the brief \u2013 membranes, osmosis or food preservation. Which one are you choosing, and why?",
        "In your own words, what is the biological phenomenon behind your chosen topic? What is actually going on?",
        "What experiment could you run within your topic \u2013 an extension of one you have already done in class, or an original approach?"
      ],
      demoReview: {
        strengths: [
          "You have chosen your topic from the brief and found a genuinely personal angle on it \u2013 that motivation will carry a twenty-hour investigation.",
          "You connected the topic to prior learning from the course, which anchors the work in the specification."
        ],
        prompts: [
          "Before you move on: open your investigative log and record your initial research and experimental areas, with the reasons for choosing them.",
          "Where could your first idea hit a practical limitation \u2013 equipment, time, safety? Name it now."
        ]
      }
    },
    {
      name: "Background research",
      blurb: "Research your topic from different viewpoints and land a research question of your own.",
      time: "2-3 hours",
      promptQuestions: [
        "What research question will I pursue, and how does it arise from the brief?",
        "Have I reviewed, summarised and evaluated evidence from different viewpoints?",
        "Am I recording findings, download dates and references in my investigative log?"
      ],
      definitionOfDone: [
        "I have a clear research question on a particular issue in response to the brief",
        "I have reviewed, summarised and evaluated evidence from different viewpoints",
        "My investigative log records extracts, secondary data, reflections, download dates and references",
        "I can say how the research will inform my experimental work"
      ],
      questions: [
        "State your research question for your chosen topic, and trace how it grew out of the brief and your background reading.",
        "Summarise one source that takes a different viewpoint from yours, or explains the theory behind your topic. What did it add?",
        "What have you recorded in your investigative log so far \u2013 findings, dates and references?"
      ],
      demoReview: {
        strengths: [
          "Your research question is specific and clearly linked to the topic you chose from the brief.",
          "You have weighed more than one viewpoint, which is what good research practice looks like."
        ],
        prompts: [
          "Before you move on: check your log has download dates and full references for every source you used.",
          "Where does your reading connect to the cross-cutting themes of the course?"
        ]
      }
    },
    {
      name: "Designing and planning the experiment",
      blurb: "Turn your research into a testable hypothesis and a method you can actually run.",
      time: "2-3 hours",
      promptQuestions: [
        "What testable hypothesis will my experiment investigate?",
        "How will I address reliability, validity, accuracy, precision, error, fairness, safety and integrity in my design?",
        "What materials and equipment will I need, and how will I make sure they are available when I need them?"
      ],
      definitionOfDone: [
        "I have posed a testable hypothesis and can state what I will measure",
        "My method is written step by step, with fair testing and controlled variables identified",
        "Materials and equipment are listed, with a plan to have them available",
        "Health and safety considerations are addressed",
        "Limitations, compromises and key decisions are recorded with justifications in my investigative log"
      ],
      questions: [
        "State your hypothesis and your variables: what will you change, what will you measure, and what will you keep the same?",
        "Walk me through your method step by step. Where is error most likely to creep in?",
        "What materials and equipment does your setup need, and what is your plan for having them ready?"
      ],
      demoReview: {
        strengths: [
          "Your hypothesis is testable and underpinned by biological theory, not just a hunch.",
          "You have identified your control variables and justified them \u2013 that is real experimental design."
        ],
        prompts: [
          "Before you move on: record in your log any compromises you had to make because of equipment or time limits, and why.",
          "How will you handle results you did not anticipate? Plan for them now, not after."
        ]
      }
    },
    {
      name: "Conducting the experiment",
      blurb: "Run your own experiment under supervision, and record everything \u2013 expected or not.",
      time: "Depends on the brief; often 1-2 hour lab sessions",
      promptQuestions: [
        "Have I recorded all relevant observations and data, qualitative and quantitative, in my investigative log?",
        "Have I recorded the arrangement of apparatus and any results, whether anticipated or not?",
        "Is my experiment running in line with the plan I shared with my teacher?"
      ],
      definitionOfDone: [
        "I carried out my own experiment under teacher supervision in the laboratory or field setting",
        "All observations and data, anticipated or not, are recorded in my investigative log",
        "The arrangement of apparatus and results are recorded, with photographs where appropriate",
        "Any support from peers with equipment is recorded, and the evidence remains my own"
      ],
      questions: [
        "Tell me what happened when you ran your experiment: what did you observe, and did anything behave unexpectedly?",
        "How are you capturing your data as it comes \u2013 tables, photographs, notes? What goes in the log tonight?",
        "Did anything about the apparatus or materials force you to adapt on the spot? Explain."
      ],
      demoReview: {
        strengths: [
          "You recorded the unexpected observations instead of discarding them \u2013 that is exactly how scientists work.",
          "Your data capture is systematic: qualitative and quantitative, with the apparatus arrangement logged."
        ],
        prompts: [
          "Before you move on: note in your log one difficulty you met during the experiment and how you dealt with it.",
          "If you ran the experiment again, what one change would improve the quality of your primary data?"
        ]
      }
    },
    {
      name: "Data analysis and conclusions",
      blurb: "Interrogate your data, explain the anomalies, and land a conclusion your data can defend.",
      time: "1-2 hours",
      promptQuestions: [
        "Have I evaluated my data in terms of accuracy, precision, repeatability and reproducibility?",
        "Do my data and conclusions support the hypothesis I posed?",
        "Can I identify and explain any anomalous results or observations?"
      ],
      definitionOfDone: [
        "My analysis includes calculations and/or graphs that identify patterns and relationships",
        "Anomalous results or observations are identified and explained, not ignored",
        "My conclusion is justified by the data and reflects on whether it supports my hypothesis",
        "My analysis has been shared with my teacher as part of the authentication process"
      ],
      questions: [
        "What pattern do your data show? Quote the numbers or observations that demonstrate it.",
        "Does your conclusion support your hypothesis? Say why, or why not, in your own words.",
        "Explain one anomalous result: what might have caused it, and how did you handle it?"
      ],
      demoReview: {
        strengths: [
          "Your conclusion is justified by the data rather than by what you hoped to find.",
          "You have accounted for your anomalous result with a reasoned explanation tied to equipment and design."
        ],
        prompts: [
          "Before you move on: check that any graph you present is justified by the data and clearly labelled.",
          "Reflect in your log: how confident are you in the repeatability of your result, and what would settle it?"
        ]
      }
    },
    {
      name: "Finalising the investigation report",
      blurb: "Draw on your investigative log to write one authentic, coherent account for the SEC.",
      time: "Up to 4 hours",
      promptQuestions: [
        "Have I given an authentic account of all aspects of the investigative process, including refinements and decisions?",
        "Are my conclusions and judgements linked to the hypotheses and research questions I posed?",
        "Have I referenced every source that is not my own, including any AI tools I used?"
      ],
      definitionOfDone: [
        "My report draws on my investigative log to give an authentic account of the whole process",
        "Data is presented clearly and linked to my research questions and hypotheses",
        "Limitations in research and experimental design, and reflections on refinements, are described",
        "References are complete, including any AI use, in the format the SEC brief requires"
      ],
      questions: [
        "Which part of your investigation was hardest to explain, and how will you account for it honestly in the report?",
        "Check your draft against the SEC instructions: word count, images, structure. What needs to change before submission?",
        "Where in your report do you show how reflections on the process shaped your decisions?"
      ],
      demoReview: {
        strengths: [
          "Your report reads as one coherent account: research, experiment, analysis and reflection all point the same way.",
          "You have shown your decisions and refinements, which strengthens the authenticity of the work."
        ],
        prompts: [
          "Before you submit: confirm every reference is in place, including the AI use reference with tool, date, how used and shareable URL or prompt.",
          "Your teacher cannot correct the report for redrafting \u2013 read it once more as an examiner would. What stands out?"
        ]
      }
    }
  ],
  reportHeadings: [
    "Introduction: the brief and my issue",
    "Background research",
    "Designing and planning the experiment",
    "Conducting the experiment",
    "Data analysis and conclusions",
    "Final report and references"
  ],
  linksPolicy: "Referencing note (NCCA Biology in Practice Investigation guidelines, Appendix 1): acknowledge any AI tool you use \u2013 the name of the tool, the date the content was generated, and a brief explanation of how it was used. Where the tool generates a shareable URL of the chat, include it in your list of research sources; where it does not, include the name of the tool and the prompt used. Plagiarism, including the use of AI-generated material without acknowledgement, may incur penalties up to and including the withholding of results."
};
