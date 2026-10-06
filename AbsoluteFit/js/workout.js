/* ── Workout Plan Data ─────────────────────────────────────────────
   Keys: "sex-goal-experience"
   sex: male | female
   goal: fitness | fat-loss | weight-gain
   experience: beginner | intermediate
──────────────────────────────────────────────────────────────────── */
const PLANS = {

  /* ── Plan 1: Male | Fitness | Beginner ─────────────────────────── */
  "male-fitness-beginner": {
    label: "Male — Fitness — Beginner",
    split: "5-Day Strength & Conditioning",
    tips: [
      "Focus on learning movement patterns — form first, load second",
      "Aim for progressive overload: add 2.5–5 kg when reps feel easy",
      "Rest 90–120 sec between compound sets, 60–90 sec isolation"
    ],
    days: [
      {
        name: "Day 1", focus: "Chest & Triceps",
        exercises: [
          { name: "Flat Barbell Bench Press",    sets: "3", reps: "10–12", rest: "90s", notes: "Control the descent" },
          { name: "Incline Dumbbell Press",      sets: "3", reps: "10–12", rest: "90s", notes: "" },
          { name: "Cable Chest Fly",             sets: "3", reps: "12–15", rest: "60s", notes: "" },
          { name: "Tricep Rope Pushdown",        sets: "3", reps: "12–15", rest: "60s", notes: "" },
          { name: "Overhead Dumbbell Extension", sets: "3", reps: "12–15", rest: "60s", notes: "" },
          { name: "Push-Ups (finisher)",         sets: "2", reps: "To failure", rest: "45s", notes: "" }
        ]
      },
      {
        name: "Day 2", focus: "Back & Biceps",
        exercises: [
          { name: "Lat Pulldown",              sets: "3", reps: "10–12", rest: "90s", notes: "Pull elbows to hips" },
          { name: "Seated Cable Row",          sets: "3", reps: "10–12", rest: "90s", notes: "" },
          { name: "Single-Arm Dumbbell Row",   sets: "3", reps: "12 each", rest: "60s", notes: "" },
          { name: "Face Pull",                 sets: "3", reps: "15",     rest: "60s", notes: "Rear delt health" },
          { name: "Barbell Curl",              sets: "3", reps: "12–15", rest: "60s", notes: "" },
          { name: "Hammer Curl",               sets: "3", reps: "12–15", rest: "60s", notes: "" }
        ]
      },
      {
        name: "Day 3", focus: "Legs",
        exercises: [
          { name: "Barbell Back Squat",        sets: "4", reps: "8–10",  rest: "2min", notes: "Depth at least parallel" },
          { name: "Romanian Deadlift",         sets: "3", reps: "10–12", rest: "90s",  notes: "Hinge at hip" },
          { name: "Leg Press",                 sets: "3", reps: "12–15", rest: "90s",  notes: "" },
          { name: "Leg Curl",                  sets: "3", reps: "12–15", rest: "60s",  notes: "" },
          { name: "Leg Extension",             sets: "3", reps: "12–15", rest: "60s",  notes: "" },
          { name: "Standing Calf Raise",       sets: "4", reps: "15–20", rest: "45s",  notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Shoulders & Core",
        exercises: [
          { name: "Seated Dumbbell Press",     sets: "4", reps: "10–12", rest: "90s", notes: "" },
          { name: "Lateral Raise",             sets: "3", reps: "15",    rest: "60s", notes: "Slight lean forward" },
          { name: "Front Raise",               sets: "3", reps: "12",    rest: "60s", notes: "" },
          { name: "Reverse Pec Deck (Rear Delt)", sets: "3", reps: "15", rest: "60s", notes: "" },
          { name: "Plank",                     sets: "3", reps: "45s",   rest: "45s", notes: "" },
          { name: "Hanging Knee Raise",        sets: "3", reps: "15",    rest: "45s", notes: "" },
          { name: "Russian Twist",             sets: "3", reps: "20",    rest: "45s", notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "Full Body & Cardio",
        exercises: [
          { name: "Deadlift",                  sets: "3", reps: "6–8",   rest: "2min", notes: "Focus on hip hinge" },
          { name: "Pull-Ups / Assisted",       sets: "3", reps: "8–10",  rest: "90s",  notes: "" },
          { name: "Dumbbell Lunges",           sets: "3", reps: "12 each", rest: "60s", notes: "" },
          { name: "Arnold Press",              sets: "3", reps: "10–12", rest: "60s",  notes: "" },
          { name: "Incline Treadmill Walk",    sets: "1", reps: "20 min", rest: "—",   notes: "Incline 8–10, pace 5.5" }
        ]
      }
    ]
  },

  /* ── Plan 2: Male | Fitness | Intermediate ─────────────────────── */
  "male-fitness-intermediate": {
    label: "Male — Fitness — Intermediate",
    split: "5-Day PPL + Shoulders/HIIT",
    tips: [
      "Push intensity — aim for last rep to be challenging",
      "Track weekly PRs on main compound lifts",
      "HIIT on Day 5 should keep HR above 75% max"
    ],
    days: [
      {
        name: "Day 1", focus: "Push (Chest & Triceps)",
        exercises: [
          { name: "Barbell Bench Press",           sets: "4", reps: "8–10",  rest: "90s", notes: "Pause at bottom" },
          { name: "Incline Dumbbell Press",        sets: "4", reps: "10–12", rest: "90s", notes: "" },
          { name: "Cable Fly (Low to High)",       sets: "3", reps: "12–15", rest: "60s", notes: "" },
          { name: "Dips",                          sets: "3", reps: "To failure", rest: "90s", notes: "Add weight if >15" },
          { name: "Skull Crusher",                 sets: "3", reps: "10–12", rest: "60s", notes: "" },
          { name: "Tricep Pushdown (superset)",    sets: "3", reps: "15",    rest: "45s", notes: "Superset w/ above" }
        ]
      },
      {
        name: "Day 2", focus: "Pull (Back & Biceps)",
        exercises: [
          { name: "Barbell Row",                   sets: "4", reps: "8–10",  rest: "90s", notes: "Squeeze scapula" },
          { name: "Weighted Pull-Up",              sets: "4", reps: "6–8",   rest: "2min", notes: "Full ROM" },
          { name: "Chest-Supported Row",           sets: "3", reps: "12–15", rest: "60s", notes: "" },
          { name: "Straight-Arm Pulldown",         sets: "3", reps: "15",    rest: "60s", notes: "" },
          { name: "Barbell Curl",                  sets: "3", reps: "8–10",  rest: "60s", notes: "" },
          { name: "Incline Dumbbell Curl",         sets: "3", reps: "12",    rest: "60s", notes: "" },
          { name: "Face Pull",                     sets: "3", reps: "20",    rest: "45s", notes: "External rotation" }
        ]
      },
      {
        name: "Day 3", focus: "Legs",
        exercises: [
          { name: "Barbell Back Squat",            sets: "4", reps: "6–8",   rest: "2min", notes: "Below parallel" },
          { name: "Leg Press (wide stance)",       sets: "4", reps: "12",    rest: "90s", notes: "" },
          { name: "Bulgarian Split Squat",         sets: "3", reps: "10 each", rest: "90s", notes: "Hold dumbbells" },
          { name: "Romanian Deadlift",             sets: "4", reps: "10–12", rest: "90s", notes: "" },
          { name: "Leg Curl",                      sets: "3", reps: "15",    rest: "60s", notes: "" },
          { name: "Seated Calf Raise",             sets: "4", reps: "20",    rest: "45s", notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Shoulders & Core",
        exercises: [
          { name: "Seated Barbell Press",          sets: "4", reps: "8",     rest: "2min", notes: "" },
          { name: "Lateral Raise (3/4 drop set)",  sets: "3", reps: "15+8",  rest: "75s", notes: "Drop weight mid set" },
          { name: "Bent-Over Lateral Raise",       sets: "4", reps: "15",    rest: "60s", notes: "" },
          { name: "Cable Lateral Raise",           sets: "3", reps: "15 each", rest: "45s", notes: "" },
          { name: "Weighted Hanging Leg Raise",    sets: "4", reps: "12",    rest: "60s", notes: "" },
          { name: "Cable Crunch",                  sets: "3", reps: "20",    rest: "45s", notes: "" },
          { name: "Pallof Press",                  sets: "3", reps: "12 each", rest: "45s", notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "Full Body HIIT",
        exercises: [
          { name: "Deadlift",                      sets: "4", reps: "5",     rest: "2min", notes: "85% 1RM" },
          { name: "HIIT Circuit (5 rounds)",       sets: "5", reps: "40s on / 20s off", rest: "—", notes: "Burpees → Box Jumps → Battle Rope" },
          { name: "Treadmill Sprint Intervals",    sets: "8", reps: "30s sprint / 90s walk", rest: "—", notes: "" },
          { name: "Plank Variations",              sets: "3", reps: "45s each", rest: "30s", notes: "" }
        ]
      }
    ]
  },

  /* ── Plan 3: Male | Fat Loss | Beginner ────────────────────────── */
  "male-fat-loss-beginner": {
    label: "Male — Fat Loss — Beginner",
    split: "5-Day Metabolic Strength",
    tips: [
      "Keep rest short — 30–45s between sets to elevate heart rate",
      "Add 20–30 min cardio after every session",
      "Calorie deficit of 300–500 kcal/day is ideal alongside this plan"
    ],
    days: [
      {
        name: "Day 1", focus: "Upper Body Metabolic",
        exercises: [
          { name: "Push-Up",                   sets: "4", reps: "15",    rest: "30s", notes: "" },
          { name: "Dumbbell Row",              sets: "4", reps: "15 each", rest: "30s", notes: "" },
          { name: "Dumbbell Shoulder Press",   sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Lat Pulldown",              sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Bicep Curl",                sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Tricep Pushdown",           sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Incline Treadmill Walk",    sets: "1", reps: "25 min", rest: "—",  notes: "Post-workout cardio" }
        ]
      },
      {
        name: "Day 2", focus: "Lower Body Metabolic",
        exercises: [
          { name: "Goblet Squat",              sets: "4", reps: "15",    rest: "30s", notes: "" },
          { name: "Dumbbell Lunge",            sets: "4", reps: "12 each", rest: "30s", notes: "" },
          { name: "Romanian Deadlift",         sets: "3", reps: "15",    rest: "45s", notes: "" },
          { name: "Leg Press",                 sets: "3", reps: "20",    rest: "30s", notes: "" },
          { name: "Leg Curl",                  sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Calf Raise",                sets: "4", reps: "20",    rest: "30s", notes: "" },
          { name: "Stationary Bike",           sets: "1", reps: "20 min", rest: "—",  notes: "Moderate intensity" }
        ]
      },
      {
        name: "Day 3", focus: "Cardio & Core",
        exercises: [
          { name: "Treadmill Run / Brisk Walk", sets: "1", reps: "30–40 min", rest: "—", notes: "Zone 2 cardio" },
          { name: "Plank",                      sets: "3", reps: "40s", rest: "30s", notes: "" },
          { name: "Bicycle Crunch",             sets: "3", reps: "20",  rest: "30s", notes: "" },
          { name: "Leg Raise",                  sets: "3", reps: "15",  rest: "30s", notes: "" },
          { name: "Mountain Climbers",          sets: "3", reps: "30s", rest: "30s", notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Full Body Circuit",
        exercises: [
          { name: "Barbell Squat",             sets: "3", reps: "12",    rest: "45s", notes: "" },
          { name: "Push-Up",                   sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Cable Row",                 sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Dumbbell Shoulder Press",   sets: "3", reps: "12",    rest: "30s", notes: "" },
          { name: "Goblet Squat",              sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Jump Rope",                 sets: "5", reps: "1 min", rest: "30s", notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "HIIT + Cardio",
        exercises: [
          { name: "HIIT Treadmill Sprints",    sets: "10", reps: "30s sprint / 60s walk", rest: "—", notes: "" },
          { name: "Burpees",                   sets: "4",  reps: "10",    rest: "45s", notes: "" },
          { name: "Jumping Jacks",             sets: "4",  reps: "30s",   rest: "15s", notes: "" },
          { name: "Squat Jumps",               sets: "4",  reps: "10",    rest: "30s", notes: "" },
          { name: "Cool Down Walk",            sets: "1",  reps: "10 min", rest: "—",  notes: "" }
        ]
      }
    ]
  },

  /* ── Plan 4: Male | Fat Loss | Intermediate ────────────────────── */
  "male-fat-loss-intermediate": {
    label: "Male — Fat Loss — Intermediate",
    split: "5-Day Superset & HIIT Program",
    tips: [
      "All sets are supersets — go A then B with minimal rest",
      "Finish every session with a 15–20 min HIIT block",
      "High volume + caloric deficit = maximum fat burn"
    ],
    days: [
      {
        name: "Day 1", focus: "Chest & Back (Supersets)",
        exercises: [
          { name: "A: Bench Press",            sets: "4", reps: "12",    rest: "—",   notes: "Go straight to B" },
          { name: "B: Lat Pulldown",           sets: "4", reps: "12",    rest: "45s", notes: "Superset with A" },
          { name: "A: Incline DB Press",       sets: "4", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Cable Row",              sets: "4", reps: "12",    rest: "45s", notes: "" },
          { name: "A: Cable Fly",              sets: "3", reps: "15",    rest: "—",   notes: "" },
          { name: "B: Face Pull",              sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "HIIT Finisher",             sets: "1", reps: "15 min", rest: "—",  notes: "Sprint intervals" }
        ]
      },
      {
        name: "Day 2", focus: "Legs (Supersets)",
        exercises: [
          { name: "A: Barbell Squat",          sets: "4", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Leg Curl",               sets: "4", reps: "15",    rest: "45s", notes: "" },
          { name: "A: Leg Press",              sets: "4", reps: "15",    rest: "—",   notes: "" },
          { name: "B: Romanian Deadlift",      sets: "4", reps: "12",    rest: "45s", notes: "" },
          { name: "A: Lunge",                  sets: "3", reps: "12 each", rest: "—", notes: "" },
          { name: "B: Calf Raise",             sets: "3", reps: "20",    rest: "30s", notes: "" },
          { name: "HIIT Finisher",             sets: "1", reps: "15 min", rest: "—",  notes: "Bike sprints" }
        ]
      },
      {
        name: "Day 3", focus: "HIIT & Core",
        exercises: [
          { name: "Treadmill Sprint Intervals", sets: "12", reps: "30s sprint / 60s walk", rest: "—", notes: "" },
          { name: "A: Hanging Leg Raise",       sets: "4", reps: "15",    rest: "—",   notes: "" },
          { name: "B: Cable Crunch",            sets: "4", reps: "20",    rest: "30s", notes: "" },
          { name: "A: Plank",                   sets: "3", reps: "60s",   rest: "—",   notes: "" },
          { name: "B: Russian Twist",           sets: "3", reps: "25",    rest: "30s", notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Shoulders & Arms (Supersets)",
        exercises: [
          { name: "A: Seated DB Press",         sets: "4", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Lateral Raise",           sets: "4", reps: "15",    rest: "30s", notes: "" },
          { name: "A: Barbell Curl",            sets: "4", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Skull Crusher",           sets: "4", reps: "12",    rest: "30s", notes: "" },
          { name: "A: Hammer Curl",             sets: "3", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Tricep Pushdown",         sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "HIIT Finisher",              sets: "1", reps: "15 min", rest: "—",  notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "Full Body Metabolic",
        exercises: [
          { name: "Clean & Press",              sets: "5", reps: "8",     rest: "60s", notes: "" },
          { name: "Kettlebell Swing",           sets: "5", reps: "20",    rest: "30s", notes: "" },
          { name: "Box Jump",                   sets: "4", reps: "10",    rest: "45s", notes: "" },
          { name: "Battle Rope",                sets: "5", reps: "30s",   rest: "30s", notes: "" },
          { name: "Sled Push",                  sets: "4", reps: "20m",   rest: "60s", notes: "If available" },
          { name: "Jump Rope",                  sets: "3", reps: "2 min", rest: "45s", notes: "" }
        ]
      }
    ]
  },

  /* ── Plan 5: Male | Weight Gain | Beginner ─────────────────────── */
  "male-weight-gain-beginner": {
    label: "Male — Weight Gain — Beginner",
    split: "5-Day Push/Pull/Legs + Heavy Compounds",
    tips: [
      "Eat in a 300–500 kcal surplus daily — protein ≥ 1.6g/kg BW",
      "Focus on progressive overload every single week",
      "Longer rest (2–3 min) preserves strength for next set"
    ],
    days: [
      {
        name: "Day 1", focus: "Push — Chest, Shoulders, Triceps",
        exercises: [
          { name: "Flat Bench Press",           sets: "4", reps: "8–10",  rest: "2min", notes: "Add weight weekly" },
          { name: "Overhead Press",             sets: "4", reps: "8–10",  rest: "2min", notes: "" },
          { name: "Incline DB Press",           sets: "3", reps: "10–12", rest: "90s",  notes: "" },
          { name: "Lateral Raise",              sets: "3", reps: "12–15", rest: "60s",  notes: "" },
          { name: "Tricep Pushdown",            sets: "3", reps: "12",    rest: "60s",  notes: "" },
          { name: "Overhead Extension",         sets: "3", reps: "12",    rest: "60s",  notes: "" }
        ]
      },
      {
        name: "Day 2", focus: "Pull — Back & Biceps",
        exercises: [
          { name: "Deadlift",                   sets: "4", reps: "5",     rest: "3min", notes: "King of mass builders" },
          { name: "Bent-Over Row",              sets: "4", reps: "8–10",  rest: "2min", notes: "" },
          { name: "Lat Pulldown",               sets: "3", reps: "10–12", rest: "90s",  notes: "" },
          { name: "Cable Row",                  sets: "3", reps: "10–12", rest: "90s",  notes: "" },
          { name: "Barbell Curl",               sets: "3", reps: "10",    rest: "60s",  notes: "" },
          { name: "Hammer Curl",                sets: "3", reps: "12",    rest: "60s",  notes: "" }
        ]
      },
      {
        name: "Day 3", focus: "Legs",
        exercises: [
          { name: "Back Squat",                 sets: "4", reps: "8",     rest: "3min", notes: "Drive through heels" },
          { name: "Romanian Deadlift",          sets: "4", reps: "10",    rest: "2min", notes: "" },
          { name: "Leg Press",                  sets: "3", reps: "12",    rest: "90s",  notes: "" },
          { name: "Leg Curl",                   sets: "3", reps: "12",    rest: "60s",  notes: "" },
          { name: "Leg Extension",              sets: "3", reps: "12",    rest: "60s",  notes: "" },
          { name: "Standing Calf Raise",        sets: "4", reps: "15",    rest: "45s",  notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Push (Volume)",
        exercises: [
          { name: "Dumbbell Press",             sets: "4", reps: "10–12", rest: "90s", notes: "" },
          { name: "Cable Chest Fly",            sets: "4", reps: "12–15", rest: "60s", notes: "" },
          { name: "Arnold Press",               sets: "4", reps: "12",    rest: "90s", notes: "" },
          { name: "Dips",                       sets: "3", reps: "10–12", rest: "90s", notes: "" },
          { name: "Skull Crusher",              sets: "3", reps: "12",    rest: "60s", notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "Pull + Accessory",
        exercises: [
          { name: "Pull-Up / Assisted",         sets: "4", reps: "6–8",   rest: "2min", notes: "Add weight as able" },
          { name: "T-Bar Row",                  sets: "4", reps: "10",    rest: "90s",  notes: "" },
          { name: "Incline DB Curl",            sets: "3", reps: "10–12", rest: "60s",  notes: "" },
          { name: "Reverse Curl",               sets: "3", reps: "12",    rest: "60s",  notes: "" },
          { name: "Face Pull",                  sets: "3", reps: "20",    rest: "45s",  notes: "" },
          { name: "Shrugs",                     sets: "4", reps: "15",    rest: "60s",  notes: "" }
        ]
      }
    ]
  },

  /* ── Plan 6: Male | Weight Gain | Intermediate ─────────────────── */
  "male-weight-gain-intermediate": {
    label: "Male — Weight Gain — Intermediate",
    split: "5-Day PPL + 5×5 Heavy Strength",
    tips: [
      "Main lifts: aim for 5-rep PRs monthly",
      "Eat 500+ kcal surplus; track every meal for 4 weeks",
      "Sleep 8+ hours — growth happens at rest"
    ],
    days: [
      {
        name: "Day 1", focus: "Heavy Push (Strength)",
        exercises: [
          { name: "Bench Press (5×5)",          sets: "5", reps: "5",     rest: "3min", notes: "85–90% 1RM" },
          { name: "Overhead Press (5×5)",       sets: "5", reps: "5",     rest: "3min", notes: "" },
          { name: "Incline DB Press",           sets: "3", reps: "8–10",  rest: "2min", notes: "" },
          { name: "Weighted Dip",               sets: "4", reps: "8",     rest: "2min", notes: "" },
          { name: "Tricep Skull Crusher",       sets: "4", reps: "10",    rest: "90s",  notes: "" },
          { name: "Cable Lateral Raise",        sets: "4", reps: "15",    rest: "60s",  notes: "" }
        ]
      },
      {
        name: "Day 2", focus: "Heavy Pull (Strength)",
        exercises: [
          { name: "Deadlift (5×5)",             sets: "5", reps: "5",     rest: "3min", notes: "85% 1RM — belt ok" },
          { name: "Weighted Pull-Up",           sets: "4", reps: "5–6",   rest: "3min", notes: "" },
          { name: "Barbell Row (5×5)",          sets: "5", reps: "5",     rest: "2min", notes: "" },
          { name: "Chest-Supported Row",        sets: "3", reps: "10",    rest: "90s",  notes: "" },
          { name: "Barbell Curl",               sets: "4", reps: "8",     rest: "90s",  notes: "" },
          { name: "Incline DB Curl",            sets: "3", reps: "10",    rest: "60s",  notes: "" }
        ]
      },
      {
        name: "Day 3", focus: "Heavy Legs (Strength)",
        exercises: [
          { name: "Back Squat (5×5)",           sets: "5", reps: "5",     rest: "3min", notes: "90% 1RM" },
          { name: "Romanian Deadlift",          sets: "4", reps: "8",     rest: "2min", notes: "" },
          { name: "Leg Press (heavy)",          sets: "4", reps: "10",    rest: "2min", notes: "" },
          { name: "Nordic Hamstring Curl",      sets: "3", reps: "6–8",   rest: "2min", notes: "Eccentric focus" },
          { name: "Leg Extension",              sets: "3", reps: "15",    rest: "60s",  notes: "" },
          { name: "Standing Calf Raise",        sets: "5", reps: "12",    rest: "60s",  notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Push (Volume / Hypertrophy)",
        exercises: [
          { name: "Paused Bench Press",         sets: "4", reps: "6–8",   rest: "2min", notes: "2s pause at chest" },
          { name: "Low-to-High Cable Fly",      sets: "4", reps: "12–15", rest: "60s",  notes: "" },
          { name: "Arnold Press",               sets: "4", reps: "10–12", rest: "90s",  notes: "" },
          { name: "Lateral Raise 3-Drop Set",   sets: "3", reps: "15+10+8", rest: "90s", notes: "" },
          { name: "JM Press",                   sets: "4", reps: "10",    rest: "90s",  notes: "Tricep mass" }
        ]
      },
      {
        name: "Day 5", focus: "Pull (Volume / Hypertrophy)",
        exercises: [
          { name: "Rack Pull",                  sets: "4", reps: "6–8",   rest: "2min", notes: "Trap & upper back" },
          { name: "Meadows Row",                sets: "4", reps: "10 each", rest: "90s", notes: "" },
          { name: "High-to-Low Cable Fly Row",  sets: "3", reps: "15",    rest: "60s",  notes: "" },
          { name: "Spider Curl",                sets: "4", reps: "12",    rest: "60s",  notes: "Peak bicep" },
          { name: "Cable Curl",                 sets: "3", reps: "15",    rest: "45s",  notes: "" },
          { name: "Shrugs",                     sets: "4", reps: "15",    rest: "60s",  notes: "" }
        ]
      }
    ]
  },

  /* ── Plan 7: Female | Fitness | Beginner ───────────────────────── */
  "female-fitness-beginner": {
    label: "Female — Fitness — Beginner",
    split: "5-Day Full Body Functional",
    tips: [
      "Prioritise glute engagement on all lower body movements",
      "Core work every session builds posture and stability",
      "Light cardio (20 min walk/cycle) on off days recommended"
    ],
    days: [
      {
        name: "Day 1", focus: "Full Body (Lower Emphasis)",
        exercises: [
          { name: "Goblet Squat",               sets: "4", reps: "12",    rest: "60s", notes: "Heels wide" },
          { name: "Romanian Deadlift",          sets: "3", reps: "12",    rest: "60s", notes: "Feel hamstring stretch" },
          { name: "Glute Bridge",               sets: "4", reps: "15",    rest: "45s", notes: "Squeeze at top" },
          { name: "Push-Up (modified ok)",      sets: "3", reps: "10–12", rest: "45s", notes: "" },
          { name: "Lat Pulldown",               sets: "3", reps: "12",    rest: "60s", notes: "" },
          { name: "Plank",                      sets: "3", reps: "30s",   rest: "30s", notes: "" }
        ]
      },
      {
        name: "Day 2", focus: "Upper Body",
        exercises: [
          { name: "DB Shoulder Press",          sets: "3", reps: "12",    rest: "60s", notes: "" },
          { name: "Cable Row",                  sets: "3", reps: "12",    rest: "60s", notes: "" },
          { name: "DB Chest Press",             sets: "3", reps: "12",    rest: "60s", notes: "" },
          { name: "Lateral Raise",              sets: "3", reps: "15",    rest: "45s", notes: "Light weight, control" },
          { name: "Bicep Curl",                 sets: "3", reps: "12",    rest: "45s", notes: "" },
          { name: "Tricep Pushdown",            sets: "3", reps: "12",    rest: "45s", notes: "" },
          { name: "Dead Bug",                   sets: "3", reps: "10",    rest: "30s", notes: "Core stability" }
        ]
      },
      {
        name: "Day 3", focus: "Glutes & Core",
        exercises: [
          { name: "Hip Thrust",                 sets: "4", reps: "15",    rest: "60s", notes: "Add band above knees" },
          { name: "Cable Kickback",             sets: "3", reps: "15 each", rest: "30s", notes: "" },
          { name: "Sumo Squat",                 sets: "3", reps: "15",    rest: "45s", notes: "" },
          { name: "Side-Lying Clam",            sets: "3", reps: "20 each", rest: "30s", notes: "Band around thighs" },
          { name: "Plank to Hip Dip",           sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Leg Raise",                  sets: "3", reps: "12",    rest: "30s", notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Full Body Cardio",
        exercises: [
          { name: "Step-Ups",                   sets: "3", reps: "12 each", rest: "45s", notes: "" },
          { name: "Push-Up",                    sets: "3", reps: "12",    rest: "45s", notes: "" },
          { name: "Dumbbell Row",               sets: "3", reps: "12 each", rest: "45s", notes: "" },
          { name: "Jumping Jacks",              sets: "3", reps: "30s",   rest: "15s", notes: "" },
          { name: "Squat Jumps",                sets: "3", reps: "10",    rest: "30s", notes: "" },
          { name: "Treadmill Walk / Light Jog", sets: "1", reps: "20 min", rest: "—",  notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "Glutes, Legs & Flexibility",
        exercises: [
          { name: "Leg Press (feet high)",      sets: "4", reps: "15",    rest: "60s", notes: "Glute focus" },
          { name: "Walking Lunge",              sets: "3", reps: "12 each", rest: "60s", notes: "" },
          { name: "Lying Leg Curl",             sets: "3", reps: "15",    rest: "45s", notes: "" },
          { name: "Seated Calf Raise",          sets: "3", reps: "20",    rest: "30s", notes: "" },
          { name: "Yoga Stretching",            sets: "1", reps: "10 min", rest: "—",  notes: "Hip flexors priority" }
        ]
      }
    ]
  },

  /* ── Plan 8: Female | Fitness | Intermediate ───────────────────── */
  "female-fitness-intermediate": {
    label: "Female — Fitness — Intermediate",
    split: "5-Day PPL + Glute Emphasis",
    tips: [
      "Add 2.5 kg/week on compounds as long as form is solid",
      "Mind-muscle connection on glute work is more important than load",
      "Track weekly measurements — the scale doesn't tell the whole story"
    ],
    days: [
      {
        name: "Day 1", focus: "Push (Chest, Shoulders, Triceps)",
        exercises: [
          { name: "Barbell Bench Press",        sets: "4", reps: "8–10",  rest: "90s", notes: "" },
          { name: "Incline DB Press",           sets: "3", reps: "10–12", rest: "90s", notes: "" },
          { name: "Seated DB Press",            sets: "4", reps: "10–12", rest: "90s", notes: "" },
          { name: "Lateral Raise",              sets: "4", reps: "15",    rest: "45s", notes: "" },
          { name: "Rope Pushdown",              sets: "3", reps: "15",    rest: "45s", notes: "" },
          { name: "Cable Chest Fly",            sets: "3", reps: "15",    rest: "45s", notes: "" }
        ]
      },
      {
        name: "Day 2", focus: "Pull (Back & Biceps)",
        exercises: [
          { name: "Deadlift",                   sets: "4", reps: "8",     rest: "2min", notes: "" },
          { name: "Lat Pulldown",               sets: "4", reps: "10–12", rest: "90s",  notes: "" },
          { name: "Cable Row",                  sets: "4", reps: "12",    rest: "90s",  notes: "" },
          { name: "Face Pull",                  sets: "3", reps: "20",    rest: "45s",  notes: "" },
          { name: "Barbell Curl",               sets: "3", reps: "12",    rest: "60s",  notes: "" },
          { name: "Hammer Curl",                sets: "3", reps: "12",    rest: "60s",  notes: "" }
        ]
      },
      {
        name: "Day 3", focus: "Legs (Quad Emphasis)",
        exercises: [
          { name: "Barbell Squat",              sets: "4", reps: "8–10",  rest: "2min", notes: "" },
          { name: "Leg Press",                  sets: "4", reps: "12",    rest: "90s",  notes: "" },
          { name: "Bulgarian Split Squat",      sets: "3", reps: "10 each", rest: "90s", notes: "" },
          { name: "Leg Extension",              sets: "3", reps: "15",    rest: "60s",  notes: "" },
          { name: "Standing Calf Raise",        sets: "4", reps: "20",    rest: "30s",  notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Glute Day",
        exercises: [
          { name: "Barbell Hip Thrust",         sets: "5", reps: "10",    rest: "90s", notes: "Full lockout at top" },
          { name: "Romanian Deadlift",          sets: "4", reps: "12",    rest: "90s", notes: "" },
          { name: "Cable Kickback",             sets: "4", reps: "15 each", rest: "30s", notes: "" },
          { name: "Sumo Squat (DB)",            sets: "3", reps: "15",    rest: "60s", notes: "" },
          { name: "Abductor Machine",           sets: "4", reps: "20",    rest: "30s", notes: "" },
          { name: "Glute Hyperextension",       sets: "3", reps: "15",    rest: "45s", notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "Full Body HIIT",
        exercises: [
          { name: "Clean & Press (light)",      sets: "3", reps: "10",    rest: "60s", notes: "" },
          { name: "Kettlebell Swing",           sets: "4", reps: "20",    rest: "30s", notes: "" },
          { name: "HIIT Bike Sprints",          sets: "8", reps: "30s hard / 90s easy", rest: "—", notes: "" },
          { name: "Plank Variations",           sets: "3", reps: "45s each", rest: "30s", notes: "" },
          { name: "Bicycle Crunch",             sets: "3", reps: "20",    rest: "30s", notes: "" }
        ]
      }
    ]
  },

  /* ── Plan 9: Female | Fat Loss | Beginner ──────────────────────── */
  "female-fat-loss-beginner": {
    label: "Female — Fat Loss — Beginner",
    split: "5-Day Metabolic Circuit",
    tips: [
      "Keep rest at 30–45s to maintain elevated heart rate",
      "20–30 min brisk walk post-session for extra calorie burn",
      "Prioritise protein: ≥ 1.6g per kg of body weight"
    ],
    days: [
      {
        name: "Day 1", focus: "Upper Body Circuit",
        exercises: [
          { name: "Push-Up",                    sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "DB Shoulder Press",          sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Lat Pulldown",               sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Cable Row",                  sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Bicep Curl",                 sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Tricep Pushdown",            sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Incline Walk",               sets: "1", reps: "20 min", rest: "—",  notes: "Post-workout" }
        ]
      },
      {
        name: "Day 2", focus: "Lower Body Circuit",
        exercises: [
          { name: "Goblet Squat",               sets: "4", reps: "15",    rest: "30s", notes: "" },
          { name: "Glute Bridge",               sets: "4", reps: "20",    rest: "30s", notes: "" },
          { name: "Walking Lunge",              sets: "3", reps: "12 each", rest: "30s", notes: "" },
          { name: "Leg Curl",                   sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "Calf Raise",                 sets: "4", reps: "20",    rest: "30s", notes: "" },
          { name: "Stationary Bike",            sets: "1", reps: "20 min", rest: "—",  notes: "Moderate" }
        ]
      },
      {
        name: "Day 3", focus: "Cardio & Core",
        exercises: [
          { name: "Treadmill Brisk Walk",       sets: "1", reps: "35 min", rest: "—",  notes: "Incline 6–8" },
          { name: "Plank",                      sets: "3", reps: "40s",   rest: "20s", notes: "" },
          { name: "Bicycle Crunch",             sets: "3", reps: "20",    rest: "20s", notes: "" },
          { name: "Leg Raise",                  sets: "3", reps: "15",    rest: "20s", notes: "" },
          { name: "Side Plank",                 sets: "3", reps: "30s each", rest: "20s", notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Glute & Core Circuit",
        exercises: [
          { name: "Hip Thrust",                 sets: "4", reps: "15",    rest: "30s", notes: "" },
          { name: "Sumo Squat",                 sets: "4", reps: "15",    rest: "30s", notes: "" },
          { name: "Cable Kickback",             sets: "3", reps: "15 each", rest: "20s", notes: "" },
          { name: "Donkey Kick",                sets: "3", reps: "15 each", rest: "20s", notes: "" },
          { name: "Mountain Climbers",          sets: "3", reps: "30s",   rest: "20s", notes: "" },
          { name: "Squat Jumps",                sets: "3", reps: "10",    rest: "30s", notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "HIIT",
        exercises: [
          { name: "Treadmill Sprints",          sets: "10", reps: "30s sprint / 60s walk", rest: "—", notes: "" },
          { name: "Burpees",                    sets: "3",  reps: "10",    rest: "45s", notes: "" },
          { name: "Jumping Jacks",              sets: "3",  reps: "30s",   rest: "15s", notes: "" },
          { name: "High Knees",                 sets: "3",  reps: "30s",   rest: "15s", notes: "" },
          { name: "Cool-Down Stretch",          sets: "1",  reps: "10 min", rest: "—",  notes: "" }
        ]
      }
    ]
  },

  /* ── Plan 10: Female | Fat Loss | Intermediate ─────────────────── */
  "female-fat-loss-intermediate": {
    label: "Female — Fat Loss — Intermediate",
    split: "5-Day Supersets, HIIT & High-Volume Glutes",
    tips: [
      "Supersets double work density — 0 rest between A & B",
      "HIIT finisher every session (15–20 min)",
      "High-volume glute work burns calories and reshapes simultaneously"
    ],
    days: [
      {
        name: "Day 1", focus: "Upper Body Supersets",
        exercises: [
          { name: "A: Bench Press",             sets: "4", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Lat Pulldown",            sets: "4", reps: "12",    rest: "30s", notes: "" },
          { name: "A: DB Shoulder Press",       sets: "3", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Cable Row",               sets: "3", reps: "12",    rest: "30s", notes: "" },
          { name: "A: Bicep Curl",              sets: "3", reps: "15",    rest: "—",   notes: "" },
          { name: "B: Tricep Pushdown",         sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "HIIT Finisher",              sets: "1", reps: "15 min", rest: "—",  notes: "Bike sprints" }
        ]
      },
      {
        name: "Day 2", focus: "Legs Supersets",
        exercises: [
          { name: "A: Barbell Squat",           sets: "4", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Leg Curl",                sets: "4", reps: "15",    rest: "30s", notes: "" },
          { name: "A: Bulgarian Split Squat",   sets: "3", reps: "12 each", rest: "—", notes: "" },
          { name: "B: Hip Thrust",              sets: "3", reps: "15",    rest: "30s", notes: "" },
          { name: "A: Leg Extension",           sets: "3", reps: "15",    rest: "—",   notes: "" },
          { name: "B: Calf Raise",              sets: "3", reps: "20",    rest: "30s", notes: "" },
          { name: "HIIT Finisher",              sets: "1", reps: "15 min", rest: "—",  notes: "" }
        ]
      },
      {
        name: "Day 3", focus: "HIIT & Core",
        exercises: [
          { name: "Treadmill Sprints",          sets: "12", reps: "30s sprint / 60s walk", rest: "—", notes: "" },
          { name: "A: Hanging Leg Raise",       sets: "4", reps: "15",    rest: "—",   notes: "" },
          { name: "B: Cable Crunch",            sets: "4", reps: "20",    rest: "20s", notes: "" },
          { name: "A: Plank",                   sets: "3", reps: "60s",   rest: "—",   notes: "" },
          { name: "B: Russian Twist",           sets: "3", reps: "25",    rest: "20s", notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Glute Focus Supersets",
        exercises: [
          { name: "A: Barbell Hip Thrust",      sets: "5", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Sumo Squat",              sets: "5", reps: "15",    rest: "30s", notes: "" },
          { name: "A: Cable Kickback",          sets: "4", reps: "15 each", rest: "—", notes: "" },
          { name: "B: Abductor Machine",        sets: "4", reps: "20",    rest: "20s", notes: "" },
          { name: "A: Romanian Deadlift",       sets: "4", reps: "12",    rest: "—",   notes: "" },
          { name: "B: Donkey Kick",             sets: "4", reps: "15 each", rest: "20s", notes: "" },
          { name: "HIIT Finisher",              sets: "1", reps: "15 min", rest: "—",  notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "Full Body Metabolic",
        exercises: [
          { name: "Kettlebell Swing",           sets: "5", reps: "20",    rest: "30s", notes: "" },
          { name: "Box Jump",                   sets: "4", reps: "10",    rest: "30s", notes: "" },
          { name: "Battle Rope",                sets: "5", reps: "30s",   rest: "20s", notes: "" },
          { name: "Jump Rope",                  sets: "3", reps: "2 min", rest: "45s", notes: "" },
          { name: "Squat Jumps",                sets: "4", reps: "10",    rest: "30s", notes: "" }
        ]
      }
    ]
  },

  /* ── Plan 11: Female | Weight Gain | Beginner ──────────────────── */
  "female-weight-gain-beginner": {
    label: "Female — Weight Gain — Beginner",
    split: "5-Day Progressive Compound + Glute Development",
    tips: [
      "Calorie surplus of 200–300 kcal/day — avoid aggressive bulking",
      "Protein ≥ 1.6 g/kg BW — most important nutritional variable",
      "Rest 2–3 min on compounds to maintain power output"
    ],
    days: [
      {
        name: "Day 1", focus: "Lower Body — Quad Dominant",
        exercises: [
          { name: "Back Squat",                 sets: "4", reps: "8–10",  rest: "2min", notes: "Log weights weekly" },
          { name: "Leg Press",                  sets: "3", reps: "12",    rest: "90s",  notes: "" },
          { name: "Walking Lunge",              sets: "3", reps: "10 each", rest: "90s", notes: "" },
          { name: "Leg Extension",              sets: "3", reps: "15",    rest: "60s",  notes: "" },
          { name: "Glute Bridge",               sets: "4", reps: "15",    rest: "60s",  notes: "" },
          { name: "Calf Raise",                 sets: "4", reps: "20",    rest: "30s",  notes: "" }
        ]
      },
      {
        name: "Day 2", focus: "Upper Body Push",
        exercises: [
          { name: "DB Bench Press",             sets: "4", reps: "8–10",  rest: "90s", notes: "" },
          { name: "Overhead DB Press",          sets: "4", reps: "10",    rest: "90s", notes: "" },
          { name: "Incline DB Press",           sets: "3", reps: "12",    rest: "90s", notes: "" },
          { name: "Lateral Raise",              sets: "3", reps: "15",    rest: "45s", notes: "" },
          { name: "Tricep Pushdown",            sets: "3", reps: "12",    rest: "45s", notes: "" }
        ]
      },
      {
        name: "Day 3", focus: "Glute & Hamstring",
        exercises: [
          { name: "Barbell Hip Thrust",         sets: "5", reps: "10",    rest: "90s", notes: "Glute squeeze" },
          { name: "Romanian Deadlift",          sets: "4", reps: "10",    rest: "90s", notes: "" },
          { name: "Sumo Squat",                 sets: "3", reps: "15",    rest: "60s", notes: "" },
          { name: "Leg Curl",                   sets: "3", reps: "15",    rest: "60s", notes: "" },
          { name: "Cable Kickback",             sets: "4", reps: "12 each", rest: "30s", notes: "" },
          { name: "Abductor Machine",           sets: "3", reps: "20",    rest: "30s", notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Upper Body Pull",
        exercises: [
          { name: "Deadlift",                   sets: "4", reps: "6–8",   rest: "2min", notes: "" },
          { name: "Lat Pulldown",               sets: "4", reps: "10–12", rest: "90s",  notes: "" },
          { name: "Cable Row",                  sets: "4", reps: "12",    rest: "90s",  notes: "" },
          { name: "Face Pull",                  sets: "3", reps: "20",    rest: "45s",  notes: "" },
          { name: "Bicep Curl",                 sets: "3", reps: "12",    rest: "45s",  notes: "" },
          { name: "Hammer Curl",                sets: "3", reps: "12",    rest: "45s",  notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "Full Body + Accessory",
        exercises: [
          { name: "Front Squat",                sets: "3", reps: "8",     rest: "90s", notes: "Core + quad" },
          { name: "DB Row",                     sets: "3", reps: "12 each", rest: "60s", notes: "" },
          { name: "DB Arnold Press",            sets: "3", reps: "10",    rest: "60s", notes: "" },
          { name: "Hip Thrust",                 sets: "3", reps: "15",    rest: "60s", notes: "" },
          { name: "Plank",                      sets: "3", reps: "45s",   rest: "30s", notes: "" },
          { name: "Bicycle Crunch",             sets: "3", reps: "20",    rest: "30s", notes: "" }
        ]
      }
    ]
  },

  /* ── Plan 12: Female | Weight Gain | Intermediate ──────────────── */
  "female-weight-gain-intermediate": {
    label: "Female — Weight Gain — Intermediate",
    split: "5-Day PPL + Glute Specialisation & 5×5",
    tips: [
      "Heavy 5×5 lifts build the hormonal environment for muscle growth",
      "Eat 300–500 kcal surplus; time carbs around workouts",
      "Glute specialisation sessions: prioritise mind-muscle over load"
    ],
    days: [
      {
        name: "Day 1", focus: "Heavy Lower — Squat Focused",
        exercises: [
          { name: "Back Squat (5×5)",           sets: "5", reps: "5",     rest: "3min", notes: "85–90% 1RM" },
          { name: "Romanian Deadlift",          sets: "4", reps: "8",     rest: "2min", notes: "" },
          { name: "Leg Press",                  sets: "4", reps: "10",    rest: "2min", notes: "" },
          { name: "Leg Extension",              sets: "3", reps: "15",    rest: "60s",  notes: "" },
          { name: "Standing Calf Raise",        sets: "5", reps: "12",    rest: "60s",  notes: "" }
        ]
      },
      {
        name: "Day 2", focus: "Upper Body Push",
        exercises: [
          { name: "Barbell Bench Press (5×5)",  sets: "5", reps: "5",     rest: "3min", notes: "" },
          { name: "Seated DB Press",            sets: "4", reps: "8–10",  rest: "2min", notes: "" },
          { name: "Incline DB Press",           sets: "3", reps: "10–12", rest: "90s",  notes: "" },
          { name: "Lateral Raise (3-drop)",     sets: "3", reps: "15+10+8", rest: "90s", notes: "" },
          { name: "Weighted Dip",               sets: "3", reps: "8",     rest: "90s",  notes: "" },
          { name: "Skull Crusher",              sets: "3", reps: "10",    rest: "60s",  notes: "" }
        ]
      },
      {
        name: "Day 3", focus: "Upper Body Pull",
        exercises: [
          { name: "Deadlift (5×5)",             sets: "5", reps: "5",     rest: "3min", notes: "" },
          { name: "Weighted Pull-Up",           sets: "4", reps: "5–6",   rest: "2min", notes: "" },
          { name: "Barbell Row",                sets: "4", reps: "8",     rest: "2min", notes: "" },
          { name: "Face Pull",                  sets: "3", reps: "20",    rest: "45s",  notes: "" },
          { name: "Barbell Curl",               sets: "4", reps: "8",     rest: "60s",  notes: "" },
          { name: "Incline DB Curl",            sets: "3", reps: "12",    rest: "60s",  notes: "" }
        ]
      },
      {
        name: "Day 4", focus: "Glute Specialisation",
        exercises: [
          { name: "Barbell Hip Thrust",         sets: "5", reps: "10",    rest: "90s", notes: "Focus on squeeze" },
          { name: "Bulgarian Split Squat",      sets: "4", reps: "10 each", rest: "90s", notes: "" },
          { name: "Cable Kickback",             sets: "4", reps: "15 each", rest: "30s", notes: "" },
          { name: "Abductor Machine",           sets: "4", reps: "20",    rest: "30s", notes: "" },
          { name: "Glute Hyperextension",       sets: "4", reps: "15",    rest: "45s", notes: "" },
          { name: "Donkey Kick",                sets: "3", reps: "20 each", rest: "20s", notes: "" }
        ]
      },
      {
        name: "Day 5", focus: "Full Body Volume",
        exercises: [
          { name: "Paused Squat",               sets: "4", reps: "6",     rest: "2min", notes: "2s pause at bottom" },
          { name: "Rack Pull",                  sets: "4", reps: "8",     rest: "2min", notes: "Upper back emphasis" },
          { name: "Cable Fly",                  sets: "4", reps: "12",    rest: "60s",  notes: "" },
          { name: "Hip Thrust",                 sets: "4", reps: "12",    rest: "60s",  notes: "" },
          { name: "Plank",                      sets: "3", reps: "60s",   rest: "30s",  notes: "" },
          { name: "Cable Crunch",               sets: "3", reps: "20",    rest: "30s",  notes: "" }
        ]
      }
    ]
  }

};

/* ── State ────────────────────────────────────────────────────────── */
const state = { sex: null, goal: null, experience: null };

/* ── DOM refs ─────────────────────────────────────────────────────── */
const planOutput    = document.getElementById('planOutput');
const planContainer = document.getElementById('planContainer');
const selectorCta   = document.getElementById('selectorCta');

/* ── Selector logic ───────────────────────────────────────────────── */
document.querySelectorAll('.selector-group').forEach(group => {
  const key = group.dataset.group;
  group.querySelectorAll('.sel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.sel-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      group.classList.add('has-selection');
      state[key] = btn.dataset.value;
      checkReady();
    });
  });
});

function checkReady() {
  if (state.sex && state.goal && state.experience) {
    const key = `${state.sex}-${state.goal}-${state.experience}`;
    const plan = PLANS[key];
    if (plan) renderPlan(plan);
  }
}

/* ── Render ───────────────────────────────────────────────────────── */
function renderPlan(plan) {
  /* hide pending message */
  selectorCta.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;padding:14px 20px;background:rgba(245,200,0,0.06);border-radius:10px;border:1px solid rgba(245,200,0,0.2);">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="flex-shrink:0"><path d="M10 2l1.8 5.4H18l-4.9 3.6 1.9 5.6L10 13.3l-5 3.3 1.9-5.6L2 7.4h6.2z" fill="#F5C800"/></svg>
      <span style="font-size:.82rem;color:rgba(255,255,255,.55);">Plan selected — scroll down to view your programme</span>
    </div>`;

  /* build plan HTML */
  const tabs = plan.days.map((d, i) =>
    `<button class="day-tab${i === 0 ? ' active' : ''}" data-index="${i}" type="button">${d.name}<br/><span style="font-size:.65rem;opacity:.7">${d.focus}</span></button>`
  ).join('');

  const panels = plan.days.map((d, i) => {
    const rows = d.exercises.map((ex, j) => `
      <tr>
        <td class="ex-num">${j + 1}</td>
        <td class="ex-name">${ex.name}</td>
        <td class="ex-sets">${ex.sets}</td>
        <td class="ex-reps">${ex.reps}</td>
        <td class="ex-rest">${ex.rest}</td>
        <td class="ex-notes">${ex.notes || '—'}</td>
      </tr>`).join('');
    return `
      <div class="day-panel${i === 0 ? ' visible' : ''}" data-index="${i}">
        <div class="day-panel-header">
          <h3 class="day-name">${d.name}</h3>
          <div class="day-focus">${d.focus}</div>
        </div>
        <div class="exercise-table-wrap">
          <table class="exercise-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps / Duration</th>
                <th>Rest</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  }).join('');

  const tips = plan.tips.map(t => `<li>${t}</li>`).join('');

  planContainer.innerHTML = `
    <div class="plan-reveal">
      <div class="plan-header">
        <div class="plan-badge">Your Plan</div>
        <h2 class="plan-title">${getPlanTitle(state.sex, state.goal, state.experience)}</h2>
        <div class="plan-meta-row">
          <span class="plan-meta-item"><strong>${state.sex === 'male' ? 'Male' : 'Female'}</strong></span>
          <span class="plan-meta-item" style="color:rgba(255,255,255,.2)">|</span>
          <span class="plan-meta-item"><strong>${getGoalLabel(state.goal)}</strong></span>
          <span class="plan-meta-item" style="color:rgba(255,255,255,.2)">|</span>
          <span class="plan-meta-item"><strong>${state.experience === 'beginner' ? 'Beginner' : 'Intermediate'}</strong></span>
          <span class="plan-meta-item" style="color:rgba(255,255,255,.2)">|</span>
          <span class="plan-meta-item">${plan.split}</span>
        </div>
      </div>
      <div class="plan-days-nav">${tabs}</div>
      <div class="day-panels">${panels}</div>
      <div class="plan-tips">
        <h4>Coach's Notes</h4>
        <ul>${tips}</ul>
      </div>
    </div>`;

  /* tab switching */
  planContainer.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      planContainer.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
      planContainer.querySelectorAll('.day-panel').forEach(p => p.classList.remove('visible'));
      tab.classList.add('active');
      planContainer.querySelector(`.day-panel[data-index="${tab.dataset.index}"]`).classList.add('visible');
    });
  });

  planOutput.classList.add('has-plan');

  /* smooth scroll to plan */
  setTimeout(() => {
    planOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

function getPlanTitle(sex, goal, exp) {
  const goalMap = { 'fitness': 'General Fitness', 'fat-loss': 'Fat Loss', 'weight-gain': 'Weight Gain' };
  const expMap  = { 'beginner': 'Starter', 'intermediate': 'Advanced' };
  return `<em>${expMap[exp]}</em> ${goalMap[goal]}<br/>Programme`;
}

function getGoalLabel(goal) {
  return { 'fitness': 'Fitness', 'fat-loss': 'Fat Loss', 'weight-gain': 'Weight Gain' }[goal] || goal;
}
