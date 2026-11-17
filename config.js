// Team Desk settings.
//
// 1. firebase: paste the values from your Firebase project
//    (Firebase console > Project settings > General > Your apps > Web app > Config).
//    These values are not secret; the database is protected by firestore.rules.
//
// 2. owners: the admins. Always managers, can never be removed or locked out, and may sign in
//    with any email (not only allowedEmailDomain).
//    Keep identical to owners() in firestore.rules. This is the only list you edit in code.
//
// 3. Everyone else is managed in the app: Team tab > Add a teammate, and the Role column
//    (Employee / Manager). Managers approve leave/WFH, assign tasks, set Saturday groups,
//    plan team bonding, change settings and add or remove people.
//
// 4. team, saturdayGroups, birthdays: starting values only. They are copied into the app the
//    first time an owner signs in while the team list is still empty, and everyone in team
//    starts as an Employee. After that, changing them here does nothing; use the Team tab.
//
// 5. allowedEmailDomain: only emails at this domain can create an account.
window.TRACKER_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDiVv1X1au1Ma1BXU3JgfapCyRWxbkyG4k",
    authDomain: "team-monitor-2785b.firebaseapp.com",
    projectId: "team-monitor-2785b",
    storageBucket: "team-monitor-2785b.firebasestorage.app",
    messagingSenderId: "640514833879",
    appId: "1:640514833879:web:37ccd63276d815680a9f92"
  },
  owners: ["gagank4911@gmail.com"],
  // Starting team (see note 4)
  team: {
    "Sumit":     "sumit.halder@1cell.ai",
    "Gagan":     "gagan.kumar@1cell.ai",
    "Uzma":      "uzma.farooque@1cell.ai",
    "Shivani":   "shivani.rai@1cell.ai",
    "Ankit":     "ankit.yadav@1cell.ai",
    "Vicky":     "vicky.jha@1cell.ai",
    "Moumita":   "moumita.roy@1cell.ai",
    "Aparna":    "aparna.sornapudi@1cell.ai",
    "Chinmay":   "chinmay.koppal@1cell.ai",
    "Surabhi":   "surabhi.pednekar@1cell.ai"
  },
  // Starting Saturday duty groups. One group works each Saturday, in turn (1, 2, 3, 4, 1, ...).
  saturdayGroups: {
    "Sumit": 1,    "Aparna": 1,
    "Gagan": 2,    "Shivani": 2,
    "Chinmay": 3,  "Ankit": 3,   "Moumita": 3,
    "Uzma": 4,     "Vicky": 4,   "Surabhi": 4
  },
  // Birthdays, shown on the calendar and in "Coming up". Day-month as "DD-MM", e.g. "05-03" for 5 March.
  // Names must match "team" above. A birthday set in the app (Team tab) wins over this list.
  birthdays: {
    "Sumit":   "17-11",
    "Gagan":   "17-11",
    "Uzma":    "17-11",
    "Shivani": "17-11",
    "Ankit":   "17-11",
    "Vicky":   "17-11",
    "Moumita": "17-11",
    "Aparna":  "17-11",
    "Chinmay": "17-11",
    "Surabhi": "17-11"
  },
  allowedEmailDomain: "1cell.ai"
};