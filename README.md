# Play Store rating scraper
## Getting started
- Alternative 1:
    - Clone or download this repository.
        - `git clone git@github.com:GoranLilja/playstore-rating-scraper.git`
    - Install node packages.
        - Run `yarn install` (or `npm install`).
    - Create a `.env` file in the root directory
    	- Enter `APPID=<YOUR_APP_ID_HERE>` and save the file.
    - Run `yarn run start` (or `npm start`).
        - Alternatively, run `yarn run start <YOUR_APP_ID_HERE>` (or `yarn run start <YOUR_APP_ID_HERE>`) if you want to set custom values each time you run the script.
    - Done!
- Alternative 2: Install script globally on your machine.
    - Install the node package globally.
        - Run `yarn global add git+ssh://git@github.com/GoranLilja/playstore-rating-scraper.git --prefix /usr/local`
    - Run the script.
        - `playstore-scraper <YOUR_APP_ID_HERE>`