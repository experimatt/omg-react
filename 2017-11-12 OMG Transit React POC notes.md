# 2017-11-12 OMG Transit React Proof-of-concept notes

------------

# MVP User experience
  1) Get user location
  2) Show list of stops to user based on their location
    * Get list of stops based on user location
    * Get real-time arrivals for each stop
  3) User clicks on a stop
  4) Show real-time arrivals for that stop
    * Refresh real-time arrivals every 30 seconds

# TODOs
  * Get react up and running
  * Get redux up and running
  * Style front-end list/map/favorites pages
  * Add google map
  * Figure out how to do reverse geo-lookup
  * Store stop data as json
  * Use json as back-end
    - this might work: https://github.com/typicode/json-server
  * Use cookies for storing user favorites


# Back-end needed for
  1) GTFS stop data
  2) User profiles
  3) User favorite stops

# Data sources
  * Real-time arrivals: http://svc.metrotransit.org/NexTrip/`${stopID}`?format=json
    * i.e. http://svc.metrotransit.org/NexTrip/56006?format=json
    * Source: http://svc.metrotransit.org/
  * GTFS Stop data
    * Direct download (`stops.txt`) ftp://ftp.gisdata.mn.gov/pub/gdrs/data/pub/us_mn_state_metc/trans_transit_schedule_google_fd/csv_trans_transit_schedule_google_fd.zip
    * Source: https://gisdata.mn.gov/dataset/us-mn-state-metc-trans-transit-schedule-google-fd
