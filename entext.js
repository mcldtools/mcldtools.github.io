const basics={
    figure1:"Figure ",
    figure2:" of 5. Click the arrows for more results.",
    h1:"Basic Program Information",
    program:"Program Name",
    organization:"Organization Name",
    orgtype:"Type of organization:",
    country:"Programming Country(s)",
    region:"Provinces/Region (if applicable)",
    name:"Name(s) completing this assessment",
    date:"Date Completed",
    stage:"Stage",
    save:"Save data",
    more:"More Functions",
    full:"Full Report",
    clear:"Clear Data",
    load:"Upload Data",
    comment:"Comment"
};

const downbutton="Click here to download file.";
const sendmail="To send by email, attach the downloaded file.";
const stages=['pilot','new','midterm','mature','complete'];
const orgtypes=["Local Government/government affiliate","non-profit/ civil society organization"];
const clickto="Click to save comment";
const comment="Comment";

const dimensions=[
"A: Participation, Inclusion, and Voice",
"B: Local Resources and Knowledge",
"C: Sustainability and Transition Strategy",
"D: Accountability Mechanisms.",
"E: Responsiveness to Context",
"F: Collaboration",
"G: Working with local government/ civil society organizations",
"H: Monitoring and Evaluation Practices",
"I: Facilitation"];

const rubric={
p2:["A1. The program ensures the inclusion of all groups of people in the community (like old and young, men and women, better-off and poor, from different clans, castes, religions, etc.)",
"Don\'t know/ insufficient information",
"The program does not consider the different groups of people that live in a village.",
"The program considers some excluded groups (not all) and ensures their participation in meetings/collective activities.",
"The program considers most groups of people and ensures their participation in meetings/ collective activities.",
"The program considers all groups of people, ensures their active participation in meetings/ collective activities."],
p3:["A2. Community members decide the priorities of the CLD program BEFORE the actual design of the program.",
"Don\'t know/ insufficient information",
"Community members are not involved in deciding the program priorities.",
"Select community members (e.g. traditional leaders, landowners, etc.) or groups are involved in deciding the program priorities.",
"Most community groups are involved in deciding the program priorities.",
"All community groups are involved in deciding the program priorities and have an equal voice in it."],
p4:["A3. Community members play an active role in CLD program planning in their community.",
"Don\'t know/ insufficient information",
"Community members do not participate in the planning process.",
"Select community members (e.g. traditional leaders, landowners, etc.) or groups participate in the planning process.",
"Most community groups participate in the planning process.",
"All community groups participate in the planning process and have an equal voice in it."],
p5:["A4. Community bodies representing all groups and neighborhoods implement the program.",
"Don\'t know/ insufficient information",
"NGOs or existing local leaders implement the program.",
"NGOs and/or local leaders create a body that will implement the program or work with an existing body that may not include members from all groups.",
"Bodies with self-nominated members representing all groups and neighborhoods implement the program.",
"Elected bodies representing all groups and neighborhoods implement the program."],
p6:["A5. The program builds the voice and confidence of community representatives to influence/shape decision-making.",
"Don\'t know/ insufficient information",
"The program makes no effort to build the voice or confidence of community representatives.",
"The program builds the voice and confidence among some community representatives, but not those from excluded groups.",
"The program builds the voice and confidence among many community representatives including those from some excluded groups.",
"The program builds the voice and confidence among all community representatives including those from all excluded groups."],
p7:["A6. The program raises awareness of rights (social, economic and political) and builds skills among local representatives to ask for those rights.",
"Don\'t know/ insufficient information",
"The program does not raise awareness and build skills to ask for rights.",
"The program raises awareness about rights, but does not build any skills to ask for them.",
"The program raises awareness about rights, and builds skills for a few people to ask for them.",
"The program raises awareness about rights, and focuses on building skills among local representatives from all groups to ask for them."],
p8:["B1. The CLD program builds on Local Resources and Knowledge.",
"Don\'t know/ insufficient information",
"The program does not consider local resources and knowledge.",
"The program explores local resources, but outside knowledge is transmitted by the front-line staff.",
"The program uses local resources and is aware of local knowledge.",
"The program uses and respects local knowledge and resources."],
p9:["B2. Community contributes their resources (e.g. time, cash, labor, land, materials, etc.)",
"Don\'t know/ insufficient information",
"Community members do not contribute towards program implementation in cash or kind or labor.",
"Community members contribute time/labor or resources (land, cash, materials) because it is mandatory.",
"Community members contribute time/labor or resources (land, cash, materials), when encouraged.",
"Community members decide what is needed, willingly identify additional resources (time/labor, land, cash, materials) and volunteer them."],
p10:["C1. Communities are central to planning how and when the program should be completed and handed over to them.",
"Don\'t know/ insufficient information",
"There is no plan for program completion and handover.",
"The plan for program completion and handover is created by the implementing organization and community leaders or community members are informed about it.",
"The plan for program completion and handover is created in consultation with local leaders and community members.",
"The plan for program completion and handover is led by community members and local leaders."],
p11:["C2. Communities work with the implementing organizations to constantly review and adapt the planning for handover of programs and transition",
"Don\'t know/ insufficient information",
"There is no plan or strategy for your organization to handover the programs to the community",
"Plans to handover the program to community are only made when the program is coming to an end (or no funding is left)",
"Plans to handover the program to the community are made at the start of the program and revised at the end of the program or if there is a major setback",
"Plans to handover the program to the community are made at the start of the program and are regularly reviewed with community members to reflect the current situation in the community"],
p12:["C3. The program ensures that community structures (like community based organizations, groups implementing programs) have the capacities to continue working after handover",
"Don\'t know/ insufficient information",
"The program makes no effort to ensure the capacity of community structures to continue working after handover.",
"There is a plan for program handover but no strategy to ensure that community structures can continue working after handover and have the capacities to get funding/resources (as needed).",
"There is a strategy to ensure that community structures can continue working after handover but there are no activities to develop capacities to get funding/resources (as needed).",
"The program is implementing activities to build capacity to ensure that community structures can continue working after handover and get funding/resources (as needed)."],
p13:["C4. After completion, the program\'s impact is measured with local participation.",
"Don\'t know/ insufficient information",
"There are no plans to measure program impact after completion or the community does not know if there are any plans.",
"There are plans to measure program impact (or it is measured) after completion. Community members are informed about the exercise and provide information as requested.",
"Impact is measured (or planned to be measured) after program completion and community members are consulted in the exercise.",
"Impact is measured (or planned to be measured) after program completion and community members are active participants in all the stages of the exercise."],
p14:["C5. After the program has been handed over to community/local government structures, community members belonging to all groups (eg women, youth, elderly, poor, people with disabilities, minorities) are still benefiting from community-led activities.",
"Don\'t know/ insufficient information",
"No one gets any benefits after program handover or only the privileged groups continue to benefit.",
"The program continues to benefit some groups even after handover.",
"The program continues to benefit most groups even after handover.",
"The program continues to benefit all groups even after handover."],
p15:["D1. The program and community structures share important information for example what they are doing, why, how, and how funds were used.",
"Don\'t know/ insufficient information",
"The program does not share any information about what is being done, how and why with the community.",
"The program or the community bodies sometimes share basic information around the program but most of the details are not available.",
"The program or the community bodies often share information around the program (most but not all information is available).",
"Program and community bodies regularly share information about funds, processes, and activities with community members and invite feedback."],
p16:["D2. The program addresses community grievances/ complaints.",
"Don\'t know/ insufficient information",
"The program does not have any way for community members to raise grievances or complaints.",
"The program has a way for community members to raise grievances/complaints, but it is not accessible or trustworthy.",
"The program has an accessible and trustworthy way for community members to raise grievances/complaints, but the complaints are not addressed.",
"The program has an accessible and trustworthy way for community members to raise grievance/complaints, complaints are addressed."],
p17:["D3. The results of monitoring and evaluation are regularly shared with community members.",
"Don\'t know/ insufficient information",
"The results from Monitoring and evaluation are never shared with the community members.",
"The results from Monitoring and evaluation may be shared with community members by people involved in the program when they feel like it.",
"The results from Monitoring and evaluation are shared with community members only when problems arise.",
"The results from Monitoring and evaluation are regularly shared with community members."],
p18:["E1. The program is responsive to changing community needs and contexts.",
"Don\'t know/ insufficient information",
"The program does not respond to changing community needs (e.g. floods, droughts, seasonal hunger, the arrival of new technologies, changes in political systems, etc.)",
"The program is able to make some changes.",
"The program is able to adapt as needed to changing community needs including those brought about by crises or disasters.",
"The program is able to adapt to changing community needs including those brought about by crises or disasters and builds mechanisms/ structures to address similar situations in the future."],
p19:["E2. The pace of the CLD Program (ie, timing, frequency, and length of engagement with the community) is determined with community members.",
"Don\'t know/ insufficient information",
"The community is not involved in deciding the pace of the program.",
"The community is informed of the pace of the program.",
"Some members of the community are consulted in deciding the pace of the program.",
"All members of the community, including representatives of marginalized groups, are consulted in deciding the pace of the program."],
p20:["F1. The program builds positive relationships between rich and poor; poor and poor.",
"Don\'t know/ insufficient information",
"The program does not consider economic differences.",
"The program builds relationships between poor and poor.",
"The program engages rich and poor in discussions and dialogue.",
"The program engages rich and poor working together to achieve a common goal."],
p21:["F2. The program builds positive relations within the same groups and across different ethnic, caste, religious groups, etc.",
"Don\'t know/ insufficient information",
"The program does not consider caste/ethnic/religious differences.",
"The program builds relations between people from the same caste/ethnicity/religion to work together for social change.",
"The program engages people from different castes/ethnicities/religions in discussions and dialogue.",
"The program builds relations across people from different castes/ethnicities/religions to work together for social change."],
p22:["F3. The program builds positive relations between women and women and, between men and women.",
"Don\'t know/ insufficient information",
"The program does not work with women.",
"The program builds relationships between women from the same group.",
"The program builds relationships between all groups of women OR between women and men.",
"The program builds relationships between all groups of women AND between women and men."],
p23:["F4. The program links local communities or their leaders to other villages and their leaders across districts, provinces, or states.",
"Don\'t know/ insufficient information",
"The program does not build community networks and linkages.",
"The program builds links between communities/local leaders from the same district.",
"The program builds links between communities/ local leaders across district/ state/province/country.",
"The program builds linkages between communities across state/regional/national spaces for collective action."],
p24:["G1. The program\'s community groups work together with local government structures and actors.",
"Don\'t know/ insufficient information",
"The program or its community groups and the existing relevant local government structures and actors give contradictory information/messages.",
"The program or its community groups and existing relevant local government structures and actors do not work together at all (even when they are working towards the same objectives).",
"The program or its community groups and existing relevant local government structures and actors work together sometimes on some issues.",
"The program and its community groups and local government structures/actors regularly work together and complement each other."],
p25:["H1. Community members monitor the key activities and progress of the program.",
"Don\'t know/ insufficient information",
"There is no community participatory monitoring.",
"Community monitoring happens sometimes.",
"Community monitoring happens regularly, but is facilitated by frontline staff.",
"Community monitoring happens regularly and is facilitated by community members or structures."],
p26:["H2. Participatory evaluation is carried out.",
"Don\'t know/ insufficient information",
"There is no community participatory evaluation.",
"Community members are involved in ONE or TWO of these activities: 1) Planning; 2) Data Collection; 3) Analysis; 4) Validation; 5) Conclusions and Recommendations; 6) Action planning.",
"Community members are involved in many (THREE or FOUR) of these activities: 1) Planning; 2) Data Collection; 3) Analysis; 4) Validation; 5) Conclusions and Recommendation; 6) Action planning.",
"Community members are central in ALL the activities: 1) Planning; 2) Data Collection; 3) Analysis; 4) Validation; 5) Conclusions and Recommendation; 6) Action planning."],
p27:["H3. Monitoring and evaluation activities look at how the program works with and benefits different groups of people including women, people with disabilities, the elderly, people from minorities.",
"Don\'t know/ insufficient information",
"Community members do not know because they are not involved in monitoring and evaluation (M&E) OR the community members are involved but the M&E systems do not consider the different groups of people while collecting or analyzing the information.",
"Monitoring and evaluation collects and analyzes information to understand how the program works with and benefits some of the groups in the community (E.g. men and women, but not people with disabilities).",
"Monitoring and evaluation collects and analyzes information to understand how the program works with and benefits most of the groups in the community.",
"Monitoring and evaluation collects and analyzes information to understand how and why the program works with and benefits all the different groups of people."],
p28:["I1. Facilitators decide the time, place, and setting of the meetings such that everyone is able to participate in them.",
"Don\'t know/ insufficient information",
"Facilitators decide the time, place, and setting of the meetings based on their own convenience or that of a select few in the community.",
"Facilitators meet at least one of the following: arrange meetings at a time, place, or setting that allows all people to participate and speak freely.",
"Facilitators meet at least two of the following: arrange meetings in a time, place, and setting that allows all people to participate and speak freely.",
"Facilitators meet all three of the following: arrange meetings at a time, place, and setting that allows all the people to participate and speak freely."],
p29:["I2. Project Facilitators are respectful and encourage dialogue.",
"Don\'t know/ insufficient information",
"Facilitators lecture and tell people what to do, do not listen, and are disrespectful.",
"Facilitators listen and treat people with respect.",
"Facilitators listen to their ideas, treat people with respect, and encourage all participants to speak.",
"Facilitators listen, treat people with respect, and encourage people to speak with each other."],
p30:["I3. After attending meetings with the facilitators, we feel:",
"Don\'t know/ insufficient information",
"It was a waste of time; we only attend because we have to.",
"We are hearing new ideas but are not sure what to do with them.",
"We hear new ideas and the facilitators tell us how to act on them.",
"We hear new ideas and learnings and collectively decide how to act on them."],
p31:["I4. (For facilitators only) We feel supported (receive regular trainings, understand what we are doing and why, have flexibility and budgets) by the implementing organization/government agency to do our work",
"Don\'t know/ insufficient information",
"The implementing organization/government agency makes no effort to support our work",
"We receive support in two of these areas a) we receive training regularly (not one time) in our local language, b) we know what we are doing and why it matters, c) we can change the number of meetings we facilitate and their timing to suit local needs, d) we are provided with meeting spaces and all materials to run the meetings by the implementing organization, e) our workload is reasonable (not expected to cover too many villages or very long distances or do too many meetings)",
"We receive support in three of these areas a) we receive training regularly (not one time) in our local language, b) we know what we are doing and why it matters, c) we can change the number of meetings we facilitate and their timing to suit local needs, d) we are provided with meeting spaces and all materials to run the meetings by the implementing organization, e) our workload is reasonable (not expected to cover too many villages or very long distances or do too many meetings)",
"We receive support in ALL of these areas a) we receive training regularly (not one time) in our local language, b) we know what we are doing and why it matters, c) we can change the number of meetings we facilitate and their timing to suit local needs, d) we are provided with meeting spaces and all materials to run the meetings by the implementing organization, e) our workload is reasonable (not expected to cover too many villages or very long distances or do too many meetings)"]
}