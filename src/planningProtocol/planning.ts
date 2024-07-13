/*
Example:
- User's machine has timezone "Europe/Copenhagen".
- User has two activity types:
  - "Set of push-ups" of repetitions
  - "Running" of distance and minutes
  - User has run twice and done one set of push-ups

// Example JSON:

// data/userConfig.json: 
  `{"timezone":"Europe/Copenhagen"}`

// data/setOfPushUps/activityType.json:
{
  name: "Set of push-ups",
  fields: [
    { name: "Repetitions", inputType: "number" }
  ]
}

// data/setOfPushUps/entries.json:
[
  {
    date: "2021-07-13 13:53",
    repetitions: 10
  }
]

// data/running/activityType.json:
{
  name: "Running",
  fields: [
    { name: "Distance", inputType: "number" },
    { name: "Minutes", inputType: "number" }
  ]
}

// data/running/entries.json:
[
  {
    date: "2024-07-13 13:53",
    distance: 5,
    minutes: 30
  },
  {
    date: "2024-07-14 10:32",
    distance: 6,
    minutes: 35
  }
]

// To create a new entry (pseudocode, high-level):
const activityType = "Set of push-ups";
const entry = await createEntry(activityType);
saveEntry(activityType, entry);

// To create a new activity type (pseudocode, high-level):
const activityType = await createActivityType();
saveActivityType(activityType);

*/
