---
author: bobby
publishedAt: 2026-01-13T10:17:19Z
title: How I Built an AI Interview Practice App to Solve a Real Problem
description: I Built an AI Mock Interview Tool Because I Had No One to Practice With
tags:
  - gemini api
  - vibe code
  - firebase
  - angular
  - build in public
isPublish: true
---

# Building Interview Prep AI [MockPilot](https://mockpilot.app)

![MockPilot](https://i.imgur.com/zos5XgD.png)

## The Motivation

As a software engineer preparing for high-stakes interviews, I kept running into the same problem. I knew the material, but I didn’t have anyone to practice with. Friends were busy, and even when I found someone, they usually didn’t have the right background to properly interview me.

That gap pushed me to build **MockPilot Interview Prep AI**. I wanted a tool that could simulate a real interview, ask follow-up questions, and give feedback without relying on another human being.

This wasn’t about building a startup. It was about solving a very personal problem.

## The Vision

The goal was simple and practical:

- Simulate realistic interview conversations
- Help users get used to 1-on-1 pressure
- Provide feedback and suggestions after each session
- Keep the system easy to maintain and cheap to run

No overengineering. No “future unicorn” assumptions.

## How I Built It (Vibe code Workflow)

I didn’t build this entirely by hand. Roughly **40–50% of the work was vibe coded**, and I’m intentionally transparent about that.

### Idea Research

I started by using **Claude** to research the idea:

- What problems people actually have with interview prep
- What features matter most for a mock interview tool
- What existing tools do well and where they fall short

This helped validate that the problem was real and narrow the scope early.

### UI and UX Design

For the UI:

- I used **Stitch (by Google)** to generate an initial mock design
- Then I applied my own ideas on top of it, including theming, UX flow, and interaction details

The goal wasn’t to blindly accept the design, but to use it as a fast starting point and refine it with real user experience in mind.

### Project Scaffolding

To speed things up further:

- I used the **Claude Sonnet model** to scaffold the project structure

This saved time on boilerplate and setup so I could focus on logic, behavior, and iteration instead of wiring everything from scratch.

AI didn’t replace thinking. It reduced friction.

## Technology Choices

### AI-Powered Interview Assistant

I did not try to train my own AI model.

After researching the cost and complexity, it became clear that training and self-hosting a model makes zero sense at this stage. The infrastructure cost, GPU usage, fine-tuning, and ongoing maintenance would far outweigh any benefit, especially with no revenue.

Instead, I chose to use third-party AI models:

- **Google Gemini API**  
  Gemini handles the live interview conversation. It asks questions, reacts to answers, and keeps the flow natural. It’s reliable, fast, and good enough for real interview practice.

- **Gemma via DeepInfra**  
  This model is used for post-interview analysis. It reviews the conversation and generates structured feedback and improvement suggestions.

![Using gemma model to give interview report](https://i.imgur.com/dYYUCUP.png)

This setup is far more cost-efficient than training my own model. If the app ever generates real revenue or reaches a scale where costs justify it, I can revisit that decision. For now, using proven models is the right move.

### Backend: Why Firebase Instead of a “Real” Backend

I intentionally avoided building a full-blown backend.

Right now:

- The user base is small
- The app does not generate profit
- Infrastructure costs matter

Using **Backend as a Service** was the most practical decision.

Firebase gives me:

- **Authentication** without writing auth logic
- **Firestore** for storing sessions, feedback, and metadata
- **Cloud Functions** to securely call AI APIs without exposing keys
- **Scalability by default** without managing servers
- **Zero ops overhead**

Could I build a custom backend with Node, Postgres, queues, and workers? Sure.  
Would that be a waste of time and money right now? Absolutely.

Firebase lets me ship, iterate, and validate the idea without burning cash or maintaining infrastructure. If usage grows or requirements change, migrating later is a solvable problem.

### Frontend: Angular

The frontend is built with **Angular**.

I chose Angular because:

- Strong structure for long-term maintainability
- Reactive forms for interview flows and validation
- Signal-based state management for predictable UI updates
- Built-in support for accessibility and performance

This app is conversation-heavy, so UI clarity and responsiveness matter more than flashy visuals.

## Architecture Overview

- **Frontend**: Angular
- **Backend**: Firebase Authentication, Firestore, Cloud Functions
- **AI Layer**:
  - Gemini for live interview conversations
  - Gemma for feedback and analysis

Cloud Functions act as a controlled gateway between users and AI services, keeping everything secure and manageable.

![interview setting](https://i.imgur.com/AAmXFsX.png)

## Development Story

I was the first user of this app.

Every awkward pause, every unclear question, every bad feedback report was something I personally experienced and fixed. That feedback loop shaped the product far more than any theoretical design.

Firebase allowed me to focus on behavior and UX instead of infrastructure. Using third-party AI models let me move fast without gambling on expensive experiments.

Nothing here is cutting-edge. And that’s intentional.

## Impact & Next Steps

[MockPilot](https://mockpilot.app) exists to help people practice when they don’t have anyone else to practice with.

The free tier is enough for most users. Paid plans only exist to cover AI costs. I’m not trying to squeeze value out of people who are already stressed about jobs.

Next steps:

- Improve feedback quality
- Add more interview styles and roles
- Refine conversation pacing and realism
- Let users upload a resume so the interview questions adapt to their actual experience

If this helps even a few people feel calmer walking into an interview, it’s already worth it.
