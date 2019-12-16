import { Component } from "@angular/core";
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("routerAnimations", [
      transition("*<=>*", [
        query(
          ":enter",
          style({
            position: "fixed",
            width: "100%",
            transform: "translateY(-100%)"
          }),
          { optional: true }
        ),
        query(
          ":leave",
          animate(
            "300ms ease",
            style({
              position: "fixed",
              width: "100%",
              transform: "translateY(100%)"
            })
          ),
          { optional: true }
        ),
        query(
          ":enter",
          animate(
            "300ms ease",
            style({
              opacity: 1,
              transform: "translateY(0%)"
            })
          ),
          { optional: true }
        )
      ])
    ])
  ]
})
// prepareRoute(outlet: RouterOutlet){
//   return outlet && OutletContext.activatedRouteData && OutletContext.activatedRouteData['animation']
// }
export class AppComponent {
  title = "babyBook";

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
