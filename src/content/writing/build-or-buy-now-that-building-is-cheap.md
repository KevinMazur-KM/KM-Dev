---
title: "Build or Buy, Now That Building Is Cheap"
date: 2026-09-29
description: "Building Helix with AI made building a real option. Here’s what changed in my build-or-buy decision, and what still needs judgment."
topics:
  - "Artificial Intelligence"
  - "IT Management"
  - "Building"
featured: false
draft: false
visual:
  family: building
  image: building-01
---

When I started in my current position, there was no system for running the IT department. Spreadsheets here, docs there, a help desk. Nothing was centralized, so I had to pick something.

The normal move is to buy one of the mature IT management platforms. I've used several over my career, and they work. A few years ago I wouldn't have seriously considered anything else, because building your own was too expensive.

That's what changed. I built Helix with ChatGPT in about ten work days over five weeks, after several hours of planning before any code was written. Based on my experience, I would have expected a project like this to take two or three people several months five years ago. Once building costs that little, it's a real option.

That is the initial build effort, though. It doesn’t settle the cost of maintaining the system, reviewing its security, updating it, or keeping it running when people change. Those are still part of the build-or-buy decision.

And building gave me something buying couldn't: pace. You can integrate AI with the big platforms, but you do it their way, with their functionality, on their schedule. We built an MCP server—a connection that lets AI tools work with Helix—so when we add something, the AI can use it right away.

Change Management is a good example. We tied it into the MCP the day we built it. Staff in our AI pilot can tell the AI what change they made and why, and the record gets created. They can ask about past changes and get an answer backed by the data. It's early and the numbers are small, but people are using it. Next is a chat window on the page itself, so nobody has to fill out a form.

Building also meant I got to decide what to leave out. I borrowed ideas from mature products without trying to reproduce a full ITIL implementation or a formal SLA structure. We kept change records and added vendor and contract tracking. The question for a small department is which practices help us run the work, and how much structure we need around them.

The obvious risk is what happens if I'm not around. AI documents every build and change as it happens, and I walked select staff through the system, the code and the access. Then one of my team built the Vendors and Contracts section on his own, using the docs and AI. It was branched, tested and pushed to production without me.

That was an encouraging test of whether someone else could extend it. It doesn’t yet tell me how well the system will hold up through long-term maintenance or a full handover.

Cheap building changed how I approached the proposal, too. I showed Helix to the Director when it was about 80% built because I wanted something concrete to evaluate. It was not in use before approval. If it hadn’t been approved, I would have shelved it. That made the idea easier to demonstrate, but the time and organizational resources involved still count.

What surprised me most is that Helix exists at all. Before AI, I couldn't follow through on a lot of my ideas. Now I can.

So now the hard question is whether I should build something, not whether I can. I've passed on plenty of ideas because the work, security or infrastructure didn't justify them. You still follow your policies and controls like any other IT project. But within those, I think experimentation is awesome.
