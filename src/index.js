import { JSDOM } from "jsdom";
import xray from "x-ray";

import { BASE_URL } from "./constants/index.js";
import {
  convertDateToYYYYMMDD,
  getMoon,
  getPhaseChangeTime,
  writeMoonPhases
} from "./utils/index.js";

const x = xray();

(async () => {
  try {
    const data = [];

    const year = process.argv?.slice(2)?.[0]?.split("year=")?.[1] ?? new Date().getFullYear()

    const body = await x(`${BASE_URL}${year}`, "body@html");
    const dom = new JSDOM(body);

    Array.from(dom.window.document.querySelectorAll(".calendar"))
      .map((calendar) => {
        const calendarDate = calendar.querySelector("caption").textContent;

        Array.from(calendar.querySelectorAll(".day"))
          .map((day) => {
            const calendarData = {};

            const dayNumber = day.querySelector(".num")?.textContent;
            const moon = day.querySelector(".moon")?.textContent;
            const illumination = day.querySelector(".illumination")?.textContent;
            const phase = day.querySelector(".phase_text")?.textContent;

            const date = convertDateToYYYYMMDD(calendarDate, dayNumber);
            calendarData["id"] = date;
            calendarData["moon"] = getMoon(moon);
            calendarData["illumination"] = illumination;
            calendarData["phaseChangeTime"] = getPhaseChangeTime(date, phase);

            data.push(calendarData);
          });
      });

    writeMoonPhases(data, year)
  } catch (error) {
    console.error("Error retrieving moon phases: " + error);
  }
})()
