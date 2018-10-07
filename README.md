# friend_finderAlpha

The Friend finder app!
This app allows a user to input relevent data into a survey, and get a comparisson on how closely your input data matches the pre-existing profiles in the api database.
(feature not fully implemented but the array math is there. Should just be a simple matter of exporting modules and requiring)

This app requires the user have node packages : express, and path npm packages.





api/friends route accesses whole list of pre-existing friends
/survey will yield the survey html, but this is also accessible through the root page
new profiles are logged into the console after input, and also visible through api/friends
