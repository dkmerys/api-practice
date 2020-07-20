# **NYT API Calls**

#### Author: **Jessica Hvozdovich and Dan Merys**
#### July 20, 2020

### Description

_This application uses React, Redux, and Thunk to make async API calls using middlware. It displays headlines and descriptions of top articles from the New York Times API._

### Instructions for use:

1. Open Terminal (macOS) or PowerShell (Windows)
2. To download the project Directory to your desktop enter the following commands:
```
cd Desktop
git clone https://github.com/dkmery/api-practice.git
cd api-practice
```
3. To view the downloaded files, open them in a text editor or IDE of your choice.
* if you have VSCode for example, when your terminal is within the main project Directory you can open all of the files with the command:
```
code .
```
5. Download node and node package manager if they are not already installed on your device. You can find further instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript-8d3b52cf-3755-481d-80c5-46f1d3a8ffeb/installing-node-js-14f2721a-61e0-44b3-af1f-73f17348c8f4).
5. Run npm install in your terminal to download the necessary dependencies, plugins, and modules.
```
npm install
```
6. Acquire an API key from the [New York Times Developer Site](https://developer.nytimes.com/get-started).
7. Create a .env file in the top level of your directory and add the code:
```
REACT_APP_API_KEY=[YOUR API KEY HERE]
```
8. The command npm run start will build and open the compiled code in a browser of your choice using a local host.
```
npm run start
```

### Known Bugs

No bugs have been identified at the time of this update.

### Support and Contact Information

Please contact me with any suggestions or questions at jhvozdovich@gmail.com. Thank you for your input!  
_Have a bug or an issue with this application? [Open a new issue](https://github.com/jhvozdovich/react-api/issues) here on GitHub._

### Technologies Used

* JavaScript
* React
* Redux
* Thunk
* JSX
* HTML
* Git and GitHub

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **User can view New York Times top articles** | User Input:"localhost:3000" | Output: “Article List is displayed" |

#### License

This software is licensed under the MIT license.

Copyright © 2020 **_Jessica Hvozdovich and Dan Merys_**