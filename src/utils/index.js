import fs from "fs";
import path from "path";

import { MONTHS } from "../constants/index.js";

export const convertDateToYYYYMMDD = (calendarDate, dayNumber) => {
  const [month, year] = calendarDate.split(", ")
  const day = dayNumber < 10 ? `0${dayNumber}` : dayNumber
  return `${year}${MONTHS[month]}${day}`
}

export const getMoon = (moon) => {
  switch (moon) {
    case 'N': case '@': case 'M': case 'L': case 'K': case 'J': case 'I':
      return "fullMoon"
    case 'H': case 'G': case 'F': case 'E': case 'D': case 'B':
      return "waningMoon"
    case 'A': case '0': case 'Z': case 'Y': case 'X': case 'W': case 'V':
      return "newMoon"
    case 'U': case 'T': case 'S': case 'R': case 'Q': case 'P': case 'O':
      return "crescentMoon"
    default:
      return null;
  }
}

export const getPhaseChangeTime = (date, phase) => {
  const hour = phase?.split(" ")?.[2];
  return hour != null ? `${date} ${hour}` : null
}

export const writeMoonPhases = (data, year) => {
  const jsonData = JSON.stringify(data, null, 2);
  const filePath = path.join("./src/data", `moonphases${year}.json`);

  fs.mkdir(path.dirname(filePath), { recursive: true }, (err) => {
    if (err) {
      console.error("Error creating directories:", err);
    } else {
      fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
          console.error("Error writing to JSON file:", err);
        } else {
          console.log(`Data written to ${filePath} file.`);
        }
      });
    }
  });
}