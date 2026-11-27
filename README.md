# Team Desk

Attendance, leave/WFH, tasks, timesheets, stats and team bonding for the team. It runs as a static website on **GitHub Pages**, with data stored in **Google Firebase** (free Spark plan).

## What it does

| Tab | Who sees it | What it's for |
|---|---|---|
| Calendar | Managers | Month view of who is on leave or WFH, Saturday duty, days over the "max away" limit |
| Today | Everyone | Check in (Office / Home) and check out, live view of who's working, my open tasks |
| Leave & WFH | Everyone | Request leave or WFH; managers approve or decline |
| Tasks | Everyone | Task board; managers assign to anyone, members add their own |
| Timesheet | Everyone (managers: anyone's) | Daily check-in/out, hours, extra hours, overtime work, CSV download |
| Team | Everyone | Team overview; managers set Saturday groups, display names and settings |
| Team bonding | Everyone (managers edit) | One activity per two-month cycle, done / planned / missed |
| Stats | Managers | Tasks, hours, extra hours, office % per person |

### Notifications

The 🔔 button in the top bar shows a red count of new items:

- **Managers:** every new leave or WFH request from the team.
- **Everyone:** tasks someone else gives you, and approvals or declines of your own leave or WFH requests.

Press **Turn on desktop alerts** in the panel to get a pop-up on your computer when something new comes in. Pop-ups only work while Team Desk is open in a browser tab. Alerts with the site closed would need Firebase Cloud Messaging and Cloud Functions, which the free Spark plan doesn't include.

### Team rules built in

- **Hours:** expected 8 hours a day (10:00–18:00), set in Team settings. Time past that, or any time on a day off, counts as **extra hours**. After checking out with extra time, people describe what they worked on.
- **WFH:** 1 day per week. A second WFH day in a week shows a warning on the request form, is flagged red for the manager, and checking in from home a second time shows a reminder.
- **Office attendance:** target 67% = office days ÷ working days so far, not counting approved leave. Shown on each person's Today card, in Team overview and in Stats.
- **Saturdays:** 5 groups of 2 take turns (set in Team overview); everyone else is off. The calendar marks a Saturday in red if its group doesn't have exactly 2 people.
- **Team bonding:** one activity every two months.

### Who can change what

| | Members | Managers |
|---|---|---|
| Own check-in / check-out | ✓ | ✓ |
| Other people's check-ins | — | ✓ |
| Own leave/WFH requests | ✓ (only they and managers can see them) | ✓ |
| Approve / decline requests | — | ✓ |
| Tasks | Update their own; add tasks for themselves | Assign to anyone, edit any |
| Saturday groups, settings, team bonding | — (can view) | ✓ |

These rules are enforced by the database (`firestore.rules`), not only by the page.

## Files

| File | What it is |
|---|---|
| `index.html` | The website |
| `config.js` | Firebase settings, team names and emails, manager list |
| `firestore.rules` | Database security rules, pasted into the Firebase console |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Setup

### 1. Firebase (project "Team Monitor")

1. **Databases & Storage > Firestore > Create database.** Location **asia-south1 (Mumbai)**, **production mode**.
2. Firestore **Rules** tab: replace everything with `firestore.rules` (after fixing the emails, step 3), click **Publish**.
3. **Security > Authentication > Get started > Sign-in method > Email/Password** > enable > **Save**.
4. **Project Overview > `</>` (Web)** > register an app (no Hosting) > copy the six `firebaseConfig` values into `config.js`.

### 2. Fill in the team

In **both** `config.js` and `firestore.rules`:

- Replace the example emails with everyone's real work email (lowercase).
- `admins`: the managers' emails.

The two lists must match. Names in `firestore.rules` are lowercase (`'sumit'` for `"Sumit"`).

### 3. GitHub Pages

1. New repository, e.g. `team-desk`. **Add file > Upload files**, add all four files, **Commit changes**.
2. **Settings > Pages** > Deploy from a branch > **main** / **(root)** > **Save**.
3. Site: `https://<your-username>.github.io/team-desk/`

### 4. Allow the site to sign in

Firebase **Authentication > Settings > Authorized domains > Add domain** > `<your-username>.github.io`.

### 5. First sign-in

Each person opens the site, enters their work email and a password, clicks **Create account**, clicks the link in the verification email, then comes back and clicks **Continue**.

The first time a manager signs in, everyone in `config.js` is added to the board. Then set the Saturday groups (2 people each) and the rota start date in the **Team** tab.

## Data in Firestore

| Path | Contents |
|---|---|
| `people/<name>` | Team roster |
| `people/<name>/attendance/<YYYY-MM-DD>` | `inAt`, `outAt` (ms), `mode` (office/wfh), `otTask` |
| `people/<name>/tasks/<id>` | Tasks |
| `leave/<name>/requests/<id>` | Leave / WFH requests |
| `approvals/<name>/items/<id>` | Manager decisions |
| `holds/<id>` | Anonymous "someone is away" markers for the daily limit |
| `settings/team` | Leave allowance, hours, max away per day, Saturday groups, display names |
| `events/<id>` | Team bonding activities |

Browse or export everything in Firebase console > Firestore Database > Data.

## Adding or removing a person

Add or remove them in `config.js` (commit to GitHub) and in `firestore.rules` (publish in Firebase). To take someone off the board, a manager clicks **Remove** in the Team tab.
