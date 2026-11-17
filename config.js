// Team Desk settings.
//
// 1. firebase: paste the values from your Firebase project
//    (Firebase console > Project settings > General > Your apps > Web app > Config).
//    These values are not secret; the database is protected by firestore.rules.
//
// 2. team: each person's name and the work email they sign in with.
//    Emails must be lowercase.
//    Keep this list identical to team() in firestore.rules.
//
// 3. admins: emails of managers. Managers see the Calendar and Stats tabs, approve
//    leave/WFH, assign tasks, set Saturday groups, plan team bonding and change settings.
//    Keep identical to admins() in firestore.rules.
//
// 4. allowedEmailDomain: only emails at this domain can create an account.
window.TRACKER_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDiVv1X1au1Ma1BXU3JgfapCyRWxbkyG4k",
    authDomain: "team-monitor-2785b.firebaseapp.com",
    projectId: "team-monitor-2785b",
    storageBucket: "team-monitor-2785b.firebasestorage.app",
    messagingSenderId: "640514833879",
    appId: "1:640514833879:web:37ccd63276d815680a9f92"
  },
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
  admins: ["gagan.kumar@1cell.ai", "sumit.halder@1cell.ai"],
  // Saturday duty groups. One group works each Saturday, in turn (1, 2, 3, 4, 1, ...).
  // Applied the first time a manager signs in; after that, change groups in the Team tab.
  saturdayGroups: {
    "Sumit": 1,    "Aparna": 1,
    "Gagan": 2,    "Shivani": 2,
    "Chinmay": 3,  "Ankit": 3,   "Moumita": 3,
    "Uzma": 4,     "Vicky": 4,   "Surabhi": 4
  },
  // Birthdays, shown on the calendar and in "Coming up". Day-month as "DD-MM", e.g. "05-03" for 5 March.
  // Names must match "team" above. Leave a date empty ("") to hide that person's birthday.
  // Managers can also set or change birthdays in the app (Team tab); a birthday set there wins over this list.
  birthdays: {
    "Sumit":   "",
    "Gagan":   "",
    "Uzma":    "",
    "Shivani": "",
    "Ankit":   "",
    "Vicky":   "",
    "Moumita": "",
    "Aparna":  "",
    "Chinmay": "",
    "Surabhi": ""
  },
  allowedEmailDomain: "1cell.ai"
};