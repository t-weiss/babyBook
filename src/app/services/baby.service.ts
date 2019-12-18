import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LocalDataBaseService } from "./local-data-base.service";
import { TipGroup } from "../interfaces/TipGroup";

@Injectable({
  providedIn: "root"
})
export class BabyService {
  babyDevTips: TipGroup[] = [
    {
      title: "Baby Developmental Milestones: By 3 Months",
      tips: [
        {
          category: "Language/Communication",
          details: [
            " Begins to develop a social smile",
            " Enjoys playing with other people and may cry when playing stops",
            "Becomes more communicative and expressive with face and body",
            "Imitates some movements and facial expressions"
          ]
        },
        {
          category: "Physical/Cognitive",
          details: [
            "Raises head and chest when lying on stomach",
            "Supports upper body with arms when lying on stomach",
            "Stretches legs out and kicks when lying on stomach or back",
            "Watches faces intently",
            "Recognizes familiar objects and people at a distance",
            "Starts using hands and eyes in coordination",
            "Turns head toward direction of sound",
            "Pushes down on legs when feet are placed on a firm surface"
          ]
        },
        {
          category:
            "Act early by talking to your child’s doctor if your child:",
          details: [
            "Doesn’t seem to respond to loud sound",
            "Doesn’t notice her hands by two months",
            "Doesn’t smile at the sound of your voice by two month",
            "Doesn’t follow moving objects with her eyes by two to three months",
            "Doesn’t grasp and hold objects by three months",
            "Doesn’t smile at people by three months",
            "Cannot support her head well at three months",
            "Doesn’t reach for and grasp toys by three to four months",
            "Doesn’t babble by three to four months",
            "Doesn’t bring objects to her mouth by four months",
            "Begins babbling, but doesn’t try to imitate any of your sounds by four months",
            "Doesn’t push down with her legs when her feet are placed on a firm surface by four months",
            "Has trouble moving one or both eyes in all directions",
            "Crosses her eyes most of the time (Occasional crossing of the eyes is normal in these first months.)",
            "Doesn’t pay attention to new faces, or seems very frightened by new faces or surroundings",
            "Still has the tonic neck reflex at four to five months"
          ]
        }
      ]
    },
    {
      title: "Baby Developmental Milestones: By 6 Months",
      tips: [
        {
          category: "Language/Communication",
          details: [
            "Responds to sounds by making sounds",
            "Strings vowels together when babbling (“ah,” “eh,” “oh”) and likes taking turns with parent whil making sounds",
            "Responds to own name",
            "Makes sounds to show joy and displeasure",
            "Begins to say consonant sounds (jabbering with “m,” “b”)",
            "Responds to other people’s emotions and often seems happy"
          ]
        },
        {
          category: "Physical/Cognitive",
          details: [
            "Rolls over in both directions (front to back, back to front)",
            "Begins to sit without support",
            "When standing, supports weight on legs and might bounce",
            "Rocks back and forth",
            "sometimes crawling backward before moving forward",
            "Looks around at things nearby",
            "Brings things to mouth",
            "Shows curiosity about things and tries to get things that are out of reach",
            "Begins to pass things from one hand to the other"
          ]
        },
        {
          category:
            "Act early by talking to your child’s doctor if your child:",
          details: [
            "Doesn’t try to get things that are in reach",
            "Shows no affection for caregivers",
            "Doesn’t respond to sounds around him",
            "Has difficulty getting things to mouth",
            "Doesn’t make vowel sounds (“ah”, “eh”, “oh”)",
            "Doesn’t roll over in either direction",
            "Doesn’t laugh or make squealing sounds",
            "Seems very stiff, with tight muscles",
            "Seems very floppy, like a rag doll"
          ]
        }
      ]
    },
    {
      title: "Baby Developmental Milestones: By 9 Months",
      tips: [
        {
          category: "Language/Communication",
          details: [
            "Understands “no”, Makes a lot of different sounds like “mamamama” and “bababababa”",
            "Copies sounds and gestures of others",
            "Uses fingers to point at things",
            "Has favorite toys",
            "May be clingy with familiar adults",
            "May be afraid of strangers"
          ]
        },
        {
          category: "Physical/Cognitive",
          details: [
            "Watches the path of something as it falls",
            "Looks for things she sees you hide",
            "Plays peek-a-boo",
            "Stands, holding on",
            "Can get into sitting position",
            "Sits without support",

            "Picks up things like cereal o’s between thumb and index finger",
            "Moves things smoothly from one hand to the other",
            "Puts things in his mouth",
            "Pulls to stand",
            "Crawls"
          ]
        },
        {
          category:
            "Act early by talking to your child’s doctor if your child:",
          details: [
            "Doesn’t bear weight on legs with support",
            "Doesn’t sit with help",
            "Doesn’t babble (“mama”, “baba”, “dada”)",
            "Doesn’t play any games involving back-and-forth play",
            "Doesn’t respond to own name",
            "Doesn’t seem to recognize familiar people",
            "Doesn’t look where you point",
            "Doesn’t transfer toys from one hand to the other"
          ]
        }
      ]
    },
    {
      title: "Baby Developmental Milestones: By 12 Months",
      tips: [
        {
          category: "Language/Communication",
          details: [
            " Responds to simple spoken requests",

            "Uses simple gestures, like shaking head “no” or waving “bye-bye”",
            "Makes sounds with changes in tone (sounds more like speech)",
            "Says “mama” and “dada” and exclamations like “uh-oh!”",
            "Tries to say words you say"
          ]
        },
        {
          category: "Physical/Cognitive",
          details: [
            "Explores things in different ways, like shaking, banging, throwing",
            "Looks at the right picture or thing when it’s named",
            "Gets to a sitting position without help",
            "Pulls up to stand",
            "Walks holding on to furniture (“cruising”)",
            "May take a few steps without holding on",
            "May stand alone",
            "Puts things in a container, takes things out of a container",

            "Starts to use things correctly; for example, drinks from a cup, brushes hair, Pokes with index (pointer) finger",
            "Finds hidden things easily"
          ]
        },
        {
          category:
            "Act early by talking to your child’s doctor if your child:",
          details: [
            "Doesn’t crawl",
            "Can’t stand when supported",
            "Doesn’t search for things that she sees you hide",
            "Doesn’t say single words like “mama” or “dada”",
            "Doesn’t learn gestures like waving or shaking head",
            "Doesn’t point to things",
            "Loses skills he once had"
          ]
        }
      ]
    },
    {
      title: "Baby Developmental Milestones: By 2 years",
      tips: [
        {
          category: "Language/Communication",
          details: [
            "Points to things or pictures when they are named",
            "Knows names of familiar people and body parts",
            "Says sentences with 2 to 4 words",
            "Follows simple instructions",
            "Repeats words overheard in conversation",
            "Points to things in a book"
          ]
        },
        {
          category: "Physical/Cognitive",
          details: [
            "Finds things even when hidden under two or three covers",
            "Begins to sort shapes and colors",
            "Completes sentences and rhymes in familiar books",
            "Plays simple make-believe games",
            "Stands on tiptoe",
            "Kicks a ball",
            "Begins to run",
            "Climbs onto and down from furniture without help",

            "Follows two-step instructions such as “Pick up your shoes and put them in the closet.”",
            "Might use one hand more than the other",
            "Walks up and down stairs holding on",
            "Throws ball overhand",
            "Makes or copies straight lines and circles"
          ]
        },
        {
          category:
            "Act early by talking to your child’s doctor if your child:",
          details: [
            "Doesn’t use 2-word phrases (for example, “drink milk”)",
            "Doesn’t know what to do with common things, like a brush, phone, fork, spoon",
            "Doesn’t copy actions and words",
            "Doesn’t follow simple instructions",
            "Doesn’t walk steadily",
            "Loses skills he/she once had"
          ]
        }
      ]
    },
    {
      title: "Baby Developmental Milestones: By 3 years",
      tips: [
        {
          category: "Language/Communication",
          details: [
            "Follows instructions with 2 or 3 steps",
            "Can name most familiar things",
            "Understands words like “in,” “on,” and “under”",
            "Says first name, age, and sex",
            "Names a friend",
            "Says words like “I,” “me,” “we,” and “you” and some plurals (cars, dogs, cats)",
            "Talks well enough for strangers to understand most of the time",
            "Carries on a conversation using 2 to 3 sentences"
          ]
        },
        {
          category: "Physical/Cognitive",
          details: [
            "Can work toys with buttons, levers, and moving parts",
            "Plays make-believe with dolls, animals, and people",
            "Does puzzles with 3 or 4 pieces",
            "Understands what “two” means",
            "Climbs well",
            "Runs easily",
            "Pedals a tricycle (3-wheel bike)",
            "Screws and unscrews jar lids or turns door handle",
            "Turns book pages one at a time",
            "Walks up and down stairs, one foot on each step",
            "Copies a circle with pencil or crayon "
          ]
        },
        {
          category:
            "Act early by talking to your child’s doctor if your child:",
          details: [
            "Can’t work simple toys (such as peg boards, simple puzzles, turning handle)",
            "Doesn’t speak in sentences",
            "Doesn’t understand simple instructions",
            "Doesn’t play pretend or make-believe",
            "Doesn’t want to play with other children or with toys",
            "Doesn’t make eye contact"
          ]
        }
      ]
    },
    {
      title: "Baby Developmental Milestones: By 4 years",
      tips: [
        {
          category: "Language/Communication",
          details: [
            "Knows some basic rules of grammar, such as correctly using “he” and “she” ",
            "Sings a song or says a poem from memory such as the “Itsy Bitsy Spider” or the “Wheels on the Bus”",
            " Tells stories ",
            " Can say first and last name"
          ]
        },
        {
          category: "Physical/Cognitive",
          details: [
            "Names some colors and some numbers",
            "Understands the idea of counting",
            "Starts to understand time",
            "Hops and stands on one foot up to 2 seconds",
            "Catches a bounced ball most of the time",
            "Pours, cuts with supervision, and mashes own food",
            "Understands the idea of “same” and “different”",
            "Draws a person with 2 to 4 body parts",
            "Uses scissors",
            "Tells you what he thinks is going to happen next in a book",
            "Plays board or card games",
            "Starts to copy some capital letters"
          ]
        },
        {
          category:
            "Act early by talking to your child’s doctor if your child:",
          details: [
            "Ignores other children or doesn’t respond to people outside the family",
            "Resists dressing, sleeping, and using the toilet",
            "Can’t retell a favorite story",
            "Doesn’t follow 3-part commands",
            "Doesn’t understand “same” and “different”",
            "Doesn’t use “me” and “you” correctly",
            "Speaks unclearly",
            "Loses skills he once had"
          ]
        }
      ]
    }
  ];

  events: any[];
  myBirthStart;

  getEvents(): any {
    return this.events;
  }

  addEvent(newEvent: any): void {
    this.events.push(newEvent);
    this.events.sort((a, b) => a.date - b.date);
    this.localDataBase.setEvents(this.events);
  }

  deleteEvent(index) {
    this.events.splice(index, 1);
    this.localDataBase.setEvents(this.events);
  }

  constructor(
    private http: HttpClient,
    private localDataBase: LocalDataBaseService
  ) {
    this.myBirthStart = this.localDataBase.getBirthStart();
    this.events = this.localDataBase.getEvents();
  }

  setBabyName(birthStart): void {
    this.myBirthStart = birthStart;
    this.localDataBase.setBirthStart(birthStart);
    console.log(birthStart);
  }

  getBirthStart(): any {
    return this.myBirthStart;
  }
  getAge() {
    let today = new Date();
    let birthday = new Date(this.myBirthStart.birthday);
    console.log(birthday);
    let age = today.getFullYear() - birthday.getFullYear();
    console.log(age);
    let m = today.getMonth() - birthday.getMonth();
    console.log(m);
    m = age * 12 + m;
    console.log(m);
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      m--;
    }
    return m;
  }

  getTips(): any {
    return this.babyDevTips;
  }
}
