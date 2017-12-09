This project is an OMG Transit proof-of-concept. It is 100% Javascript and mainly uses React and Redux.

Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup

  1. Clone the repo
  2. Make sure you have node installed
  3. Install yarn `brew install yarn`
  3. Run `yarn install` (or `npm install` if you prefer)
  4. Get a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key) and save it to `.env.local`
      * i.e. `REACT_APP_GOOGLE_MAPS_API_KEY={KEY_GOES_HERE}`
  5. Run `yarn start` to spin up the app (http://localhost:3000)


## About this application

### Stop Info
Bus, light rail, and heavy rail stop info is provided in a [General Transit Feed Specification (GTFS)](https://developers.google.com/transit/gtfs/) format. To update the stop data used by this application, we must manually download and transform it.

These data sources and instructions only apply for Minneapolis/St Paul.

#### Data sources
* [Metro Transit Schedule Data - General Transit Feed Specification (GTFS)](https://gisdata.mn.gov/dataset/us-mn-state-metc-trans-transit-schedule-google-fd) ([Direct download](ftp://ftp.gisdata.mn.gov/pub/gdrs/data/pub/us_mn_state_metc/trans_transit_schedule_google_fd/csv_trans_transit_schedule_google_fd.zip))
 * Used to populate `stops_all.json`
 * Updated weekly
* [Transit Stops Boardings and Alightings (Fall 2015)](https://gisdata.mn.gov/dataset/us-mn-state-metc-trans-stop-boardings-alightings)
 * Used populate `stops_rail.json`
 * Last updated Fall 2015

#### Manual Update instructions
* `stops_all.json`
  1. Download and unzip [csv_trans_transit_schedule_google_fd.zip](ftp://ftp.gisdata.mn.gov/pub/gdrs/data/pub/us_mn_state_metc/trans_transit_schedule_google_fd/csv_trans_transit_schedule_google_fd.zip)
  2. Upload `stops.txt` to [Freeformatter](https://www.freeformatter.com/csv-to-json-converter.html) and Convert CSV to JSON
  3. Save output to `stops_all.json`
* `stops_rail.json`
  1. Download and unzip [csv_trans_stop_boardings_alightings.zip](ftp://ftp.gisdata.mn.gov/pub/gdrs/data/pub/us_mn_state_metc/trans_stop_boardings_alightings/csv_trans_stop_boardings_alightings.zip)
  2. Open `TransitStopsBoardingsAndAlightings.csv` in Excel and delete all routes except for [Blue Line, Green Line, North Star, Red Line]
  3. Rename, add, and delete columns
    * `site_id` => `stop_id`
    * `StopName` => `stop_name`
    * `latitude` => `stop_lat`
    * `longitude` => `stop_lon`
    * `Route` => ['Light Rail','Heavy Rail'] => `stop_type`
  4. Save file as csv, upload to [Freeformatter](https://www.freeformatter.com/csv-to-json-converter.html) and Convert CSV to JSON
  5. Save output to `stops_rail.json`
