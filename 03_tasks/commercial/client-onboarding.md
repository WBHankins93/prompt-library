# Client Onboarding

> From first contact to kickoff. The process that determines whether a project succeeds or turns into a nightmare.

---

## Why This Matters

Most project failures are onboarding failures. The client didn't understand what they were buying, you didn't understand what they actually needed, and nobody wrote it down. A tight onboarding process protects both sides.

---

## The Onboarding Pipeline

```
Lead → Discovery Call → Scope Document → Proposal → Contract → Kickoff → Build
```

Each stage has a clear deliverable and a go/no-go decision before proceeding.

---

## Stage 1: Discovery Call (30-45 min)

### Purpose
Determine if there's a real fit. Not every lead is a good project. You're evaluating them as much as they're evaluating you.

### What to Cover

**Their business:**
- What does their business do? Who are their customers?
- What's working for them now? What's not?
- How do they currently get customers? (Referrals, Google, social, walk-ins)

**Their website needs:**
- Do they have an existing site? What's wrong with it?
- What do they want the new site to do? (Generate leads, book appointments, sell products, establish credibility)
- Do they have examples of sites they like? What specifically do they like about them?

**Practical constraints:**
- Timeline — when do they need this live?
- Budget range — are they in the $2K range or the $15K range? (This determines scope dramatically)
- Who makes decisions? Is this person on the call?
- Do they have existing branding, logos, copy, photos? Or do those need to be created?

### Red Flags (Walk Away or Price Accordingly)

- "We need it by next week" (unless they're willing to pay rush rates)
- "Our last three developers couldn't get it right"
- "We don't really have a budget, we just want to see what it costs"
- The decision-maker is never available
- They want a "simple" site but describe 40 features
- "Can you just copy [competitor's site]?"

### Discovery Call Output

A brief written summary sent to the client within 24 hours:

```
Subject: [Business Name] — Website Project Summary

Hi [Name],

Thanks for the conversation today. Here's what I heard:

- Business: [one sentence]
- Current situation: [one sentence]
- Primary goal for the new site: [one sentence]
- Key features discussed: [bulleted list, 3-5 items]
- Timeline: [their stated need]
- Budget range: [if discussed]
- Open questions: [anything unresolved]

Next step: I'll put together a scope document and proposal
within [X] business days. Let me know if I missed anything above.

Best,
[You]
```

This email does two things: confirms you listened and creates a written record of what was discussed. If scope creeps later, you point back to this.

---

## Stage 2: Scope Document

### Purpose
Define exactly what you're building, what you're not building, and what "done" looks like.

### Structure

**Project overview:** One paragraph describing the project and its goals.

**Pages/features included:** Every page and feature, explicitly listed. If it's not on this list, it's not in scope.

Example:
```
Included:
- Home page with hero section, services overview, testimonials, CTA
- About page with team bios and company story
- Services page (up to 6 service descriptions)
- Contact page with form (email notification to client)
- Blog (up to 5 initial posts, client can add more via CMS)
- Mobile-responsive design
- Basic SEO setup (meta tags, sitemap, schema markup)
- Google Analytics integration
- 2 rounds of design revisions
- 1 round of content revisions (if client provides copy)

NOT included:
- Logo design or branding
- Copywriting (client provides all text content)
- Photography
- E-commerce functionality
- Custom integrations beyond listed items
- Ongoing maintenance (quoted separately)
```

**Technology decisions:** What you're building with and why. The client doesn't need to understand Next.js vs. WordPress, but they need to know whether they can update content themselves and what the ongoing costs are (hosting, domain, CMS license).

**Content requirements from client:** Exactly what you need from them, by when. This is the most common bottleneck — make it crystal clear.

```
Content due by [date]:
- Logo files (vector format preferred, PNG minimum)
- Brand colors (hex codes if available)
- Text content for all pages (Google Doc or Word)
- Photos (minimum 1200px wide, professional quality preferred)
- Social media links
- Google Business Profile login (for analytics/search console setup)
```

**Timeline:** Milestones with dates, including dependencies on client deliverables.

```
Week 1-2: Design mockups (depends on content receipt)
Week 2:   Client review and feedback
Week 3:   Development
Week 4:   Client review, revisions, launch prep
Week 5:   Launch
```

**Revision policy:** Define what a "round of revisions" means. "Two rounds of design revisions" means two opportunities to request changes to the design. After that, additional revisions are billed at your hourly rate.

---

## Stage 3: Proposal

See `pricing-proposals.md` for detailed pricing guidance. The proposal is the scope document plus pricing, payment terms, and a clear call to action.

**Key elements:**
- Scope summary (from scope document)
- Price (fixed price for defined scope)
- Payment schedule (e.g., 50% upfront, 50% at launch)
- Timeline
- What happens if scope changes (change order process)
- Expiration date (proposals are valid for 14-30 days)

---

## Stage 4: Contract

Do not start work without a signed contract. This is non-negotiable regardless of how small the project is or how much you trust the client.

### Must-Have Clauses

**Scope of work:** Reference the scope document by name. "The work to be performed is described in the Scope Document dated [date], attached as Exhibit A."

**Payment terms:** Amount, schedule, payment method, late payment penalties. Net-15 or Net-30 for milestone payments. Specific consequences for non-payment (work pauses after 14 days overdue, project terminated after 30 days).

**Intellectual property:** Client owns the final deliverable upon full payment. You retain ownership until final payment is received. You retain the right to use the work in your portfolio.

**Change orders:** Any work outside the defined scope requires a written change order with its own price and timeline. Verbal requests don't count.

**Termination:** Either party can terminate with written notice. Client pays for work completed to date. Define what "work completed" means (percentage of milestones).

**Liability limits:** Your liability is limited to the amount the client has paid you. You are not liable for lost revenue, missed opportunities, or third-party claims related to the site.

**Timeline dependencies:** Delays caused by late client deliverables (content, feedback, approvals) extend the timeline accordingly. You're not responsible for a late launch if they took 3 weeks to send you their logo.

### Contract Options

- **Full custom contract reviewed by a lawyer** — best option, costs $500-1500 one-time for a template you'll reuse
- **Contract template services** — Bonsai, HoneyBook, AND CO have web-specific templates
- **Minimum viable:** A clear scope document + terms signed by both parties. Better than nothing, but get a real contract as soon as you can afford it

---

## Stage 5: Kickoff

### Kickoff Meeting Agenda (30-60 min)

1. **Introductions** (if new people are involved)
2. **Recap scope and timeline** — confirm everyone's aligned
3. **Content handoff** — confirm you have everything or set hard deadlines
4. **Communication plan** — how you'll communicate (email, Slack, project tool), expected response times, who the single point of contact is
5. **Review process** — how you'll share work for review, how they'll provide feedback (one consolidated round, not piecemeal), how long they have to review
6. **Access and accounts** — domain registrar login, hosting login, Google Analytics, existing CMS admin

### Post-Kickoff Checklist

- [ ] Contract signed and deposit received
- [ ] Client content received (or deadlines confirmed)
- [ ] Access credentials received and stored securely
- [ ] Communication channel established
- [ ] Project folder/repo created
- [ ] Timeline shared with client
- [ ] Next milestone and due date confirmed

---

## Communication During the Project

### Weekly Updates

Even for a 4-week project, send a brief weekly status update:

```
Subject: [Project Name] — Week 2 Update

Progress this week:
- Completed home page and about page designs
- Set up development environment and CMS

Up next:
- Services page and contact form
- Waiting on: final team photos from you by Friday

On track for [milestone/launch date].
```

### Managing Feedback

**Set expectations upfront:**
- Feedback is collected once per review round, not continuously
- One person consolidates all feedback before sending it
- Contradictory feedback from multiple stakeholders is the client's problem to resolve before sending to you
- "I'll know it when I see it" is not feedback — ask for specifics

**When scope creeps:**
- Acknowledge the request positively
- Explain it's outside the current scope
- Offer a change order with price and timeline impact
- Document everything in writing

---

## Checklist

- [ ] Discovery call completed and summary sent
- [ ] Scope document written with explicit inclusions and exclusions
- [ ] Proposal sent with fixed price and payment schedule
- [ ] Contract signed by both parties
- [ ] Deposit received before work begins
- [ ] Content requirements communicated with deadlines
- [ ] Kickoff meeting held
- [ ] Communication plan agreed
- [ ] All access credentials received
- [ ] Project repo/environment set up
