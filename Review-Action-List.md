# Famous People Game — Review Action List

*Based on external fact-check review, cross-referenced against current game data (people.js + reference text). Dated: 1 April 2026.*

---

## Summary

The reviewer found the dataset strong overall but identified issues in four areas. After cross-referencing with the actual game files, several concerns have **already been addressed** in the current version. This document lists only the changes that **still need to be made**, organized by priority.

**Good news:** The reviewer's highest concerns — Jean-Pierre Sauvage (weak Luxembourg connection) and many superlative claims — are either already removed or already softened in the current data. The Sigefroi entry already says "traditionally regarded as the founding." The Marie-Adélaïde entry already says "perceived closeness."

---

## HIGH PRIORITY — Fix Now

### 1. Remaining Subjective / Absolute Claims

These entries still use "most" or "greatest" as absolute statements rather than hedged claims. Each needs softening.

| # | Person | Level | Current Wording | Suggested Fix | File Location |
|---|--------|-------|----------------|---------------|---------------|
| 20 | Christine Majerus | L1 | Hint: "She is Luxembourg's **most decorated** female cyclist" | "She is one of Luxembourg's most decorated female cyclists" | people.js line ~201 |
| 16 | Paulette Lenert | L1 | Hint: "She became the **most popular** politician in Luxembourg during COVID-19" | "She became one of Luxembourg's most recognized politicians during COVID-19" | people.js line ~165 |
| 64 | Charly Gaul | L3 | Hint: "one of Luxembourg's **greatest** cyclists" | "one of Luxembourg's most celebrated cyclists" | people.js line ~625 |
| 75 | Nicolas Frantz | L3 | Hint: "one of the **greatest** cyclists of the 1920s" | "one of the most successful cyclists of the 1920s" | people.js line ~734 |
| 80 | Lucien Wercollier | L4 | Hint: "Luxembourg's **most renowned** sculptor" (absolute) but explanation says "one of Luxembourg's most renowned" | Align hint to match: "He was one of Luxembourg's most renowned sculptors" | people.js line ~786 |
| 104 | Marc Girardelli | L5 | Hint: "one of the **greatest** alpine skiers" and explanation: "**legendary**" | "one of the most successful alpine skiers" / "highly accomplished" | people.js line ~1017 |

### 2. Time-Sensitive Phrasing (Active Roles)

These entries describe people in roles that could change after elections, reshuffles, retirements, or career changes. The fix is to anchor statements to dates rather than using present-tense "is/serves."

| # | Person | Level | Current Phrasing | Suggested Fix |
|---|--------|-------|-----------------|---------------|
| 42 | Luc Holtz | L2 | "He **is** the long-serving head coach" / "**has been** the head coach since 2010" | "He became head coach of the Luxembourg national football team in 2010" |
| 52 | Yuriko Backes | L3 | "She **went on to serve** as Minister for Gender Equality and Diversity in the Frieden government from 2023" | "She was appointed Minister for Gender Equality and Diversity in the Frieden government in 2023" |
| 28 | Charel Grethen | L2 | "**is** Luxembourg's top middle-distance runner" | "became one of Luxembourg's leading middle-distance runners" |
| 77 | Jeff Strasser | L4 | "**is now** manager of the Luxembourg national team" | Good — already says "became manager...in 2025." But hint says "is now" — change hint to: "He played in the French Ligue 1 and German Bundesliga, and became manager of the Luxembourg national team in 2025" |
| 32 | Sarah De Nutte | L2 | "**is** a Luxembourgish table tennis player" / "**continues** the tradition" | "has been national champion multiple times and became a leading figure in Luxembourg table tennis" |
| 35 | Bob Jungels | L2 | "**is** one of the country's top modern riders" | "became one of the country's top modern riders" |
| 54 | Marc Angel | L3 | "**is** a prominent voice on social affairs" | "became a prominent voice on social affairs and equality" |
| 88 | Vicky Krieps | L4 | "**is** a talented Luxembourgish-Swiss actress" | Fine to keep present tense (career description, not a title) — LOW RISK |

### 3. "Legendary" Overuse

The word "legendary" appears in several explanations. While less risky than absolute superlatives, it's editorial rather than factual.

| # | Person | Current | Suggested |
|---|--------|---------|-----------|
| 64 | Charly Gaul | "a **legendary** Luxembourgish cyclist" | "a celebrated Luxembourgish cyclist" |
| 68 | Fernand Bentgen | "a **legendary** Luxembourgish broadcaster" | "a pioneering Luxembourgish broadcaster" (hint already says "pioneering") |
| 107 | Fausti | "a **legendary** Luxembourgish musician" | "a beloved Luxembourgish musician" |
| 104 | Marc Girardelli | "a **legendary** Luxembourgish alpine skier" | "a highly decorated Luxembourgish alpine skier" |

---

## MEDIUM PRIORITY — Fix Before Next Release

### 4. Difficulty Level Rebalancing

The reviewer noted some entries are misplaced in the difficulty curve.

**Entries that may be too hard for Level 1 (Newcomer):**

These are valid for Luxembourg residents but could stump international newcomers. Consider whether your target audience is Luxembourg-based or international.

| # | Person | Current Level | Issue |
|---|--------|--------------|-------|
| 5 | Désirée Nosbusch | L1 | Well-known in Europe but less so globally |
| 8 | Edward Steichen | L1 | Famous in photography circles, less mainstream |
| 9 | Gabriel Lippmann | L1 | Obscure outside science — Nobel Prize is the hook |

**Action:** If targeting Luxembourg residents, these are fine at L1. If targeting international audience, consider swapping some to L2.

**Entries that may be too easy for their level:**

| # | Person | Current Level | Suggested Level | Reason |
|---|--------|--------------|----------------|--------|
| 117 | Prince Charles | L5 (Ambassador) | L3-L4 | Easy fact — young child of reigning Grand Duke, widely covered in media |
| 96 | Prince Sébastien | L4 (Citizen) | L3 | Simple royal family member, easier than many L3 historical figures |

### 5. Robert Schuman — Clarify Nationality Context

Current phrasing is already good ("Born in Luxembourg...became a founding father of the EU"), but the reviewer suggests adding clarity for players who know him as French.

**Current explanation:** "Robert Schuman (1886–1963) was born in Clausen, Luxembourg City. As French Foreign Minister, his 1950 Schuman Declaration launched European integration."

**Suggested enhancement:** Add to explanation: "Born in Luxembourg but later a French citizen, he served as French Foreign Minister."

This is a minor tweak — the current version already handles this reasonably well.

---

## LOW PRIORITY — Nice to Have

### 6. Minor Wording Consistency

| # | Person | Issue | Suggested Fix |
|---|--------|-------|---------------|
| 18 | Gilles Muller | Hint says "Luxembourg's top tennis player" (absolute) | "one of Luxembourg's top tennis players" — but explanation already says "one of the most successful," so mainly fix the hint |
| 17 | Francesco Tristano | Hint says "world-famous" | Consider "internationally acclaimed" (less absolute) |
| 45 | Andy Bausch | Explanation: "driving force behind Luxembourg's film industry" | "a driving force" |

### 7. Jean-Pierre Sauvage — Already Removed

The reviewer flagged this entry as the weakest in the dataset due to tenuous Luxembourg connection. **This person does not appear in the current game data** — either already replaced or never included in the code. No action needed.

---

## Already Handled (No Action Needed)

These items from the review are **already correct** in the current data:

- **Grand Duke Guillaume succession** — correctly states "became reigning Grand Duke on 3 October 2025"
- **Luc Frieden** — uses date-anchored "became Prime Minister in November 2023"
- **Claude Wiseler** — uses "became President...in 2023"
- **Joseph Kutter** — already says "one of Luxembourg's most important" (not "greatest")
- **Anise Koltz** — already says "one of Luxembourg's most celebrated poets"
- **Thierry van Werveke** — already says "one of Luxembourg's most celebrated actors" (not "most beloved")
- **Marie-Adélaïde** — already says "perceived closeness"
- **Sigefroi** — already says "traditionally regarded as the founding of Luxembourg City"
- **Paul Eyschen** — correctly phrased as "longest-serving PM before Juncker"
- **Jean-Pierre Sauvage** — not in dataset

---

## Recommended Process

1. **Apply HIGH PRIORITY fixes** (sections 1-3) — these protect game credibility
2. **Decide on difficulty rebalancing** (section 4) — depends on target audience
3. **Apply LOW PRIORITY tweaks** (section 6) — polish pass
4. **Update both files:** `people.js` (the live code) AND `Famous People Game - All Questions.txt` (the reference doc) — they must stay in sync
