# Open English Report

Basic application in react + vite to generate a report of activities completed on OpenEnglish.

## Get data

- Filter network by `details?personId`
- Cookie and data should be set in config


## POST body

``` ts
interface body = {
  endDate: string
  personId: string
  startDate: string
  token: string
}
```

# Run

Execute `npm run start`

