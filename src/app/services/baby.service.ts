import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BabyService {
  babyDevTips: any[] = [
    {
      title: "Baby Developmental Milestones: By 3 Months",
      tip1: "May raise head and chest while on tummy.",
      tip2: "Opens and shuts hands"
    },
    {
      title: "Baby Developmental Milestones: By 6 Months",
      tip1:
        "Makes specific sounds tied to emotions, like happy sound or frustrated sounds.",
      tip2: "Tries to crawl",
      tip3: "Recognizes familiar faces"
    },
    {
      title: "Baby Developmental Milestones: By 9 Months",
      tip1:
        "Makes a lot of different sounds like “mamamama” and “bababababa”!!",
      tip2: "May be clingy with familiar adults",
      tip3: "May be afraid of strangers"
    },
    {
      title: "Baby Developmental Milestones: By 12 Months",
      tip1:
        "Crawls forward on belly by pulling with arms and pushing with legs",
      tip2: "Uses simple gestures, such as shaking head for “no”!!",
      tip3: "Looks at correct picture when the image is named"
    },
    {
      title: "Baby Developmental Milestones: By 2 years",
      tip1: "Climb on and down from furniture without help.",
      tip2:
        "can follow a two-step command (Pick up your toy and put it on the shelf.)",
      tip3: "starts to engage in pretend play, such as feeding a baby doll"
    },
    {
      title: "Baby Developmental Milestones: By 3 years",
      tip1: "Hop and stand on one foot for up to five seconds.",
      tip2:
        "Knows how to use pronouns like “I,” “you,” and “we,” and knows some plural ",
      tip3: "Talks clearly enough that even strangers can usually understand"
    },
    {
      title: "Baby Developmental Milestones: By 4 years",
      tip1: "Increasingly inventive in fantasy play",
      tip2: "Cooperates with other children ",
      tip3:
        "Throws ball overhand and is able to Catches bounced ball most of the time"
    }
  ];

  events: any[] = [
    {
      title: "Meet baby Micheal Scott",
      description:
        "so happy to say that everything went super smooth. He came out smiling with a full head of hair. so blessed to have had a successful birthing!",
      date: new Date("2017-11-04"),
      image: "angular_sample/hocq8hn08ozs2evlnbax.jpg"
    },
    {
      title: "Christmas Tiiimeee!!",
      description:
        "Was a great time with family and friends. Baby Mike was super happy meeting all of his out of town family for the first time. Going from grandmas arms to mine he finally fell asleep at 3 AM -_-",
      date: new Date("2017-12-25"),
      image: "angular_sample/fzjquo0esfkywnvye6oq.jpg"
    },
    {
      title: "Lemon For the First Time",
      description:
        "Mike tried a lemon for the first time, you can tell how much he liked it LOOOL!!",
      date: new Date("2018-01-10"),
      image: "angular_sample/ilogyruyjv9kp2mv3ztd.jpg"
    },
    {
      title: "First Valentines!!",
      description:
        "Our little cupid, So much love from Grandpa and Grandma for getting him his outfit for this Valentine's Day 💕💕❤️❤️",
      date: new Date("2018-02-14"),
      image: "angular_sample/tut1s0qoptufs060f8ow.jpg"
    },
    {
      title: "Saint Patricks Day!🦹🏼‍♂️👯‍♀️",
      description: "Dressed in green, my little man is saint patty ready",
      date: new Date("2018-03-26"),
      image: "angular_sample/lgy0qety0uau8lfariiz.jpg"
    },
    {
      title: "Easter Egg Surprise",
      description: "Lets go easter egg hunting, Mr.Scott is on the hunt!",
      date: new Date("2018-04-12"),
      image: "angular_sample/znuoprwfphlhih5v5l6v.jpg"
    },
    {
      title: "First Tooth",
      description:
        "Hes growing up so fast!!! Already has  getting his first tooth 😩😭😭",
      date: new Date("2018-08-10"),
      image: "angular_sample/wwoij9uirzlfncp9stgm.jpg"
    }
  ];

  sortedEvents;
  myBirthStart;

  //  this.sortedEvents = this.events.sort((a, b) => b.date - a.date);

  getEvents(): any {
    return this.events;
  }

  setEvents(newEvent): void {
    this.events.push(newEvent);
  }

  constructor(private http: HttpClient) {}

  setBabyName(birthStart): void {
    this.myBirthStart = birthStart;
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
