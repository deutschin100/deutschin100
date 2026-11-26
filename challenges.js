/*
  DEUTSCH IN 100 – DAILY CHALLENGES
  =================================
  One block per reel. The order doesn't matter – the app sorts by date.
  A challenge unlocks on its date at 16:30 German time (same moment worldwide), so you can prepare days ahead.
  Different time for one challenge? Add  time: "18:00",  next to date.

  cover: the reel's title frame, saved in assets/covers/ (portrait 9:16, ~430 px wide is plenty)
  reel:  Instagram → reel → Share → Copy link

  Question types:
    "choose" – pick the right answer   → options: [...], answer: "exact text of the right option"
    "gap"    – fill the blank (___)    → sentence: "... ___ ...", options: [...], answer: "..."
    "build"  – tap word tiles in order → answer: "Full sentence.", extra: ["wrong", "words"]
               (tiles = the answer split at spaces + the extra words)
  "tip" is optional – shown as a QUICK TIP after answering.

  TEMPLATE (copy, paste, change):

  {
    id: "2026-11-27",
    date: "2026-11-27",
    title: "Title from the reel",
    subtitle: "10 ways to …",
    cover: "assets/covers/2026-11-27.jpg",
    reel: "https://www.instagram.com/reel/XXXXXXXX/",
    questions: [
      { type: "choose", prompt: "...", options: ["A", "B", "C", "D"], answer: "A", tip: "..." },
      { type: "choose", prompt: "...", options: ["A", "B", "C", "D"], answer: "A" },
      { type: "gap", prompt: "Fill the gap", sentence: "___ geht's?", options: ["Wie", "Was", "Wo"], answer: "Wie" },
      { type: "choose", prompt: "...", options: ["A", "B", "C", "D"], answer: "A" },
      { type: "build", prompt: "Build: “...”", answer: "Full German sentence!", extra: ["wort", "Wort"] }
    ]
  },
*/

window.CHALLENGES = [
  {
    id: "2026-11-27",
    date: "2026-11-27",
    title: "Mit Karte, bitte!",
    subtitle: "8 phrases at the Kasse",
    cover: "assets/covers/2026-11-27.jpg",
    reel: "https://www.instagram.com/deutschin100/",
    questions: [
      {
        type: "choose",
        prompt: "„Brauchen Sie den Bon?“ – you don't want the receipt:",
        options: ["Nein danke.", "Danke schön!", "Mit Karte, bitte!", "Ja, hier!"],
        answer: "Nein danke.",
        tip: "„Bon“ = receipt."
      },
      {
        type: "choose",
        prompt: "Someone in the queue asks „Möchten Sie vor?“ – what do they mean?",
        options: ["You can go first.", "Do you need a bag?", "A second checkout just opened.", "Do you collect points?"],
        answer: "You can go first."
      },
      {
        type: "choose",
        prompt: "The cashier says „Sie können auflegen.“ What do you do?",
        options: ["Tap your card now", "Pack your bag", "Show your receipt", "Go to Kasse 2"],
        answer: "Tap your card now",
        tip: "„Sie können auflegen.“ = You can tap your card now. Then: just tap & smile 😊"
      },
      {
        type: "gap",
        prompt: "Fill the gap – the cashier asks:",
        sentence: "Mit Karte oder ___?",
        options: ["bar", "Bon", "Tüte"],
        answer: "bar",
        tip: "Card or cash? Finally… your moment: „Mit Karte, bitte!“"
      },
      {
        type: "build",
        prompt: "Build what the cashier asks: “Do you need a bag?”",
        answer: "Brauchen Sie eine Tüte?",
        extra: ["einen", "den"],
        tip: "Quick tip: always put the Warentrenner (the little divider bar) behind your items – Germans notice!"
      }
    ]
  },

  /* ---------- 26 Nov – Wo wohnst du? ---------- */
  {
    id: "2026-11-26",
    date: "2026-11-26",
    title: "Wo wohnst du?",
    subtitle: "10 phrases to describe where you live or work",
    cover: "assets/covers/2026-11-26.jpg",
    reel: "https://www.instagram.com/deutschin100/",
    questions: [
      {
        type: "choose",
        prompt: "You live close to the train station. You say…",
        options: ["Ich wohne in der Nähe vom Bahnhof.", "Ich wohne im Bahnhof.", "Ich wohne nach dem Bahnhof.", "Ich wohne den Bahnhof."],
        answer: "Ich wohne in der Nähe vom Bahnhof."
      },
      {
        type: "choose",
        prompt: "What does „Ich wohne am Stadtrand.“ mean?",
        options: ["I live on the outskirts of town.", "I live in the city centre.", "I live on the main road.", "I live on the second floor."],
        answer: "I live on the outskirts of town."
      },
      {
        type: "gap",
        prompt: "Fill the gap",
        sentence: "Mein Haus ist neben ___ Supermarkt.",
        options: ["dem", "der", "den"],
        answer: "dem",
        tip: "Wo? = a fixed location → Dativ! der Supermarkt → neben dem Supermarkt"
      },
      {
        type: "choose",
        prompt: "Which sentence means the same as „Mein Büro ist im Stadtzentrum.“?",
        options: ["Mein Büro liegt im Stadtzentrum.", "Mein Büro wohnt im Stadtzentrum.", "Mein Büro geht im Stadtzentrum.", "Mein Büro hat im Stadtzentrum."],
        answer: "Mein Büro liegt im Stadtzentrum.",
        tip: "You can use both: ist = liegt to describe a location."
      },
      {
        type: "build",
        prompt: "Build: “My office is behind the bank.”",
        answer: "Mein Büro ist hinter der Bank.",
        extra: ["dem", "neben"],
        tip: "die Bank → hinter der Bank (Dativ!)"
      }
    ]
  },
  /* ---------- 16 Nov – Keep a conversation going ---------- */
  {
    id: "2026-11-16",
    date: "2026-11-16",
    title: "Keep the conversation going!",
    subtitle: "7 German phrases",
    cover: "assets/covers/2026-11-16.jpg",
    reel: "https://www.instagram.com/deutschin100/",
    questions: [
      {
        type: "choose",
        prompt: "Your friend says „Ich habe einen neuen Job!“ Show you're surprised:",
        options: ["Echt?", "Wie bitte?", "Danke schön!", "Keine Ursache!"],
        answer: "Echt?",
        tip: "Short reactions + simple questions show you're listening."
      },
      {
        type: "choose",
        prompt: "You didn't hear what someone said. You ask…",
        options: ["Wie bitte?", "Erzähl mal!", "Das ist interessant!", "Und dann?"],
        answer: "Wie bitte?"
      },
      {
        type: "choose",
        prompt: "What does „Ach so!“ mean?",
        options: ["Oh, I see!", "Oh no!", "So what?", "Really?"],
        answer: "Oh, I see!"
      },
      {
        type: "gap",
        prompt: "Fill the gap",
        sentence: "Was ___ du?",
        options: ["meinst", "bist", "hast"],
        answer: "meinst",
        tip: "„Was meinst du?“ = What do you mean?"
      },
      {
        type: "build",
        prompt: "Build: “That's interesting!”",
        answer: "Das ist interessant!",
        extra: ["Ich", "sehr"]
      }
    ]
  },

  /* ---------- 17 Nov – Danke ---------- */
  {
    id: "2026-11-17",
    date: "2026-11-17",
    title: "Ways to reply to „Danke!“",
    subtitle: "7 replies",
    cover: "assets/covers/2026-11-17.jpg",
    reel: "https://www.instagram.com/deutschin100/",
    questions: [
      {
        type: "choose",
        prompt: "Someone says „Danke!“ – reply friendly & polite:",
        options: ["Gern geschehen!", "Entschuldigung!", "Wie bitte?", "Tschüss!"],
        answer: "Gern geschehen!",
        tip: "„Gern geschehen!“ or „Bitte schön!“ sound friendly & polite."
      },
      {
        type: "choose",
        prompt: "With friends, the casual reply to „Danke!“ is…",
        options: ["Kein Problem!", "Wie geht's?", "Ach so!", "Guten Appetit!"],
        answer: "Kein Problem!"
      },
      {
        type: "gap",
        prompt: "Fill the gap",
        sentence: "Keine ___!",
        options: ["Ursache", "Danke", "Bitte"],
        answer: "Ursache",
        tip: "„Keine Ursache!“ = Don't mention it!"
      },
      {
        type: "choose",
        prompt: "What does „Nicht dafür!“ mean?",
        options: ["Don't mention it!", "Not for that one!", "I don't want it.", "Not now!"],
        answer: "Don't mention it!"
      },
      {
        type: "build",
        prompt: "Reply to „Danke für deine Hilfe!“ – build: “No problem, always happy to!”",
        answer: "Kein Problem, immer gerne!",
        extra: ["Keine", "sehr"]
      }
    ]
  },

  /* ---------- 19 Nov – Entschuldigung ---------- */
  {
    id: "2026-11-19",
    date: "2026-11-19",
    title: "Reply to „Entschuldigung!“",
    subtitle: "7 natural ways to respond to „Sorry!“",
    cover: "assets/covers/2026-11-19.jpg",
    reel: "https://www.instagram.com/deutschin100/",
    questions: [
      {
        type: "choose",
        prompt: "Someone bumps into you: „Entschuldigung!“ A relaxed reply:",
        options: ["Alles gut!", "Gern geschehen!", "Wie bitte?", "Echt?"],
        answer: "Alles gut!"
      },
      {
        type: "choose",
        prompt: "Someone says „Entschuldigung!“ to get your attention. You reply…",
        options: ["Ja, bitte?", "Macht nichts!", "Nicht schlimm!", "Keine Sorge!"],
        answer: "Ja, bitte?",
        tip: "„Entschuldigung!“ can mean both: Sorry! and Excuse me!"
      },
      {
        type: "choose",
        prompt: "Perfect reply after a small mistake (e.g. they stepped on your foot):",
        options: ["Macht nichts!", "Bitte schön!", "Und dir?", "Erzähl mal!"],
        answer: "Macht nichts!"
      },
      {
        type: "gap",
        prompt: "Fill the gap",
        sentence: "Keine ___!",
        options: ["Sorge", "Problem", "Danke"],
        answer: "Sorge",
        tip: "„Keine Sorge!“ = Don't worry! (But: KEIN Problem.)"
      },
      {
        type: "build",
        prompt: "Build: “It's okay!”",
        answer: "Ist schon okay!",
        extra: ["nicht", "sehr"]
      }
    ]
  },

  /* ---------- 20 Nov – Bäckerei ---------- */
  {
    id: "2026-11-20",
    date: "2026-11-20",
    title: "Speak German at the Bäckerei",
    subtitle: "10 phrases to order with confidence",
    cover: "assets/covers/2026-11-20.jpg",
    reel: "https://www.instagram.com/deutschin100/",
    questions: [
      {
        type: "choose",
        prompt: "The seller looks at you, but you're still deciding. You say…",
        options: ["Ich bin noch nicht so weit.", "Ich nehme das da.", "Stimmt so, danke!", "Ist das frisch gebacken?"],
        answer: "Ich bin noch nicht so weit."
      },
      {
        type: "choose",
        prompt: "You pay 4,60 € with a 5 € note. The cashier can keep the change:",
        options: ["Stimmt so, danke!", "Können Sie das einpacken?", "Was können Sie empfehlen?", "Ich nehme das da."],
        answer: "Stimmt so, danke!",
        tip: "„Stimmt so!“ tells the cashier: keep the change."
      },
      {
        type: "gap",
        prompt: "Fill the gap",
        sentence: "Haben Sie etwas ohne ___?",
        options: ["Nüsse", "Tüte", "Stück"],
        answer: "Nüsse",
        tip: "ohne = without"
      },
      {
        type: "choose",
        prompt: "The polite way to ask for a piece of cake:",
        options: ["Ich hätte gern ein Stück davon.", "Gib mir ein Stück!", "Ich bin ein Stück davon.", "Ich habe ein Stück davon."],
        answer: "Ich hätte gern ein Stück davon.",
        tip: "Use polite phrases: „Ich hätte gern …“ or „Könnte ich …?“"
      },
      {
        type: "build",
        prompt: "Build: “Could I get a bag?”",
        answer: "Könnte ich eine Tüte bekommen?",
        extra: ["einen", "kann"]
      }
    ]
  },

  /* ---------- 21 Nov – Bus & Bahn tickets ---------- */
  {
    id: "2026-11-21",
    date: "2026-11-21",
    title: "Buying tickets in German",
    subtitle: "5 phrases for Bus & Bahn",
    cover: "assets/covers/2026-11-21.jpg",
    reel: "https://www.instagram.com/deutschin100/",
    questions: [
      {
        type: "choose",
        prompt: "At the counter, you want a ticket to Berlin:",
        options: [
          "Ich hätte gerne eine Fahrkarte nach Berlin.",
          "Ich bin eine Fahrkarte nach Berlin.",
          "Ich habe gerne Berlin.",
          "Fahrkarte Berlin, gehen!"
        ],
        answer: "Ich hätte gerne eine Fahrkarte nach Berlin.",
        tip: "Fahrkarte = Ticket – both are used for bus & train tickets."
      },
      {
        type: "choose",
        prompt: "„Was kostet eine einfache Fahrt?“ asks…",
        options: ["How much is a one-way ticket?", "Is the trip easy?", "When does the train leave?", "Where is the platform?"],
        answer: "How much is a one-way ticket?"
      },
      {
        type: "gap",
        prompt: "Fill the gap",
        sentence: "Ist das Deutschlandticket hier ___?",
        options: ["gültig", "günstig", "pünktlich"],
        answer: "gültig",
        tip: "gültig = valid"
      },
      {
        type: "choose",
        prompt: "The Deutschlandticket is NOT valid on…",
        options: ["IC & ICE trains", "Bus & Tram", "U-Bahn & S-Bahn", "RE & RB trains"],
        answer: "IC & ICE trains",
        tip: "Valid on local & regional transport – but not on long-distance trains."
      },
      {
        type: "build",
        prompt: "Build: “Can I pay by card?”",
        answer: "Kann ich mit Karte bezahlen?",
        extra: ["bei", "Sie"]
      }
    ]
  },

  /* ---------- 24 Nov – Wie geht's? ---------- */
  {
    id: "2026-11-24",
    date: "2026-11-24",
    title: "„Wie geht's?“",
    subtitle: "10 natural ways to answer",
    cover: "assets/covers/2026-11-24.jpg",
    reel: "https://www.instagram.com/deutschin100/",
    questions: [
      {
        type: "choose",
        prompt: "You're feeling great. Someone asks „Wie geht's?“",
        options: ["Mir geht's super!", "Könnte besser sein.", "Geht so.", "Nicht so gut heute."],
        answer: "Mir geht's super!"
      },
      {
        type: "choose",
        prompt: "What does „Geht so.“ mean?",
        options: ["Just okay – not great, not terrible", "Everything's perfect!", "I have to go.", "Really bad."],
        answer: "Just okay – not great, not terrible"
      },
      {
        type: "gap",
        prompt: "Fill the gap",
        sentence: "Kann nicht ___.",
        options: ["klagen", "sagen", "fragen"],
        answer: "klagen",
        tip: "„Kann nicht klagen.“ = Can't complain."
      },
      {
        type: "choose",
        prompt: "After answering, ask back – to your boss (formal):",
        options: ["Und Ihnen?", "Und dir?", "Und selbst?", "Und dann?"],
        answer: "Und Ihnen?",
        tip: "Und dir? → friends · Und Ihnen? → formal · Und selbst? → casual & relaxed"
      },
      {
        type: "build",
        prompt: "Build: “Could be better.”",
        answer: "Könnte besser sein.",
        extra: ["gut", "ist"]
      }
    ]
  },

  /* ---------- 25 Nov – Eiskalt ---------- */
  {
    id: "2026-11-25",
    date: "2026-11-25",
    title: "Eiskalt!",
    subtitle: "10 ways to say it's cold",
    cover: "assets/covers/2026-11-25.jpg",
    reel: "https://www.instagram.com/deutschin100/",
    questions: [
      {
        type: "choose",
        prompt: "You feel cold. The correct way to say it:",
        options: ["Mir ist kalt.", "Ich bin kalt.", "Ich habe kalt.", "Es bin kalt."],
        answer: "Mir ist kalt.",
        tip: "„Ich bin kalt“ means… you're a cold person! 💙"
      },
      {
        type: "choose",
        prompt: "Which one is the COLDEST?",
        options: ["Ich erfriere!", "Es ist frisch.", "Es ist kühl.", "Es ist kalt."],
        answer: "Ich erfriere!",
        tip: "frisch → kühl → kalt → eiskalt → bitterkalt → … → Ich erfriere!"
      },
      {
        type: "choose",
        prompt: "„Wir haben Minusgrade.“ means…",
        options: ["It's below zero.", "We have a fever.", "We're losing points.", "It's getting warmer."],
        answer: "It's below zero."
      },
      {
        type: "gap",
        prompt: "Complete the famous German saying",
        sentence: "Es gibt kein schlechtes Wetter, nur falsche ___.",
        options: ["Kleidung", "Leute", "Tage"],
        answer: "Kleidung",
        tip: "There's no bad weather… only the wrong clothes!"
      },
      {
        type: "build",
        prompt: "Build: “I'm so cold!”",
        answer: "Mir ist so kalt!",
        extra: ["Ich", "bin"]
      }
    ]
  }
];
