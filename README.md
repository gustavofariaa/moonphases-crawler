
# Moonphases Crawler

The Moonphases Crawler is a web scraping tool specifically designed to collect data from websites and provide information on date, moon phase and illumination. Using scraping techniques, the crawler extracts the necessary data from reliable sources, ensuring lunar cycle updates.

This project works for users looking for reliable information about moon phases. Astronomers and space enthusiasts can rely on the crawler's data to plan celestial observations, monitor lunar events, and enhance their knowledge of lunar science. Photography enthusiasts interested in capturing moonlight photos can benefit from the accurate moon phase and lighting detail provided by the crawler. Furthermore, researchers, students and educators can use the data for academic purposes.


## Lessons Learned

During the development of the Moonphase Crawler, several valuable lessons were learned:

- Web scraping techniques
  
  I acquired knowledge and hands-on experience in HTML parsing, DOM traversal, and data extraction utilizing libraries such as X-ray and JSDOM. This involved understanding the structure of HTML documents and employing suitable methods to extract the desired data accurately.

- Asynchronous programming

  By using async functions and promises, I acquired the ability to handle multiple requests and manage asynchronous tasks. This knowledge has allowed me to ensure a seamless scraping process that didn't block the main execution flow, resulting in an optimized and efficient workflow.
  

## Getting Started

1. Clone the project

    ```bash
      git clone https://link-to-project
    ```

1. Go to the project directory

    ```bash
      cd moonphases-crawler
    ```

1. Install dependencies

    ```bash
      npm install
    ```

1. Start the crawler

    ```bash
      npm run start year=2023
    ```

    > If you don't provide a specific year, the current year is automatically retrieved. However, if you want to specify a different year for data retrieval, you can use the 'year' variable when running the crawler.


## Data Example

```javascript
{
  "id": "20230128",
  "moon": "crescentMoon",
  "illumination": "44%",
  "phaseChangeTime": "20230128 12:20"
}
```

| Parameter         | Type      | Description                                   |
| :-                | :-        | :-                                            |
| `id`              | `string`  | Unique identifier for a specific date.        |
| `moon`            | `string`  | Current moon phase in the lunar cycle.        |
| `illumination`    | `string`  | Percentage of the moon's illuminated surface. |
| `phaseChangeTime` | `string?` | Time when the moon will change phase.         |
