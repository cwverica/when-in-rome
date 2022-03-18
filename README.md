# Roman Numeral Conversion Take-Home Assessment

## Overview

This is a project built on NextJS/React that allows a user to enter a Roman Numeral and have it converted to an Arabic Numeral (our number system) and vice versa.
Numberals must be greater than `0`, but less than `4000`



## Installation

For installation instructions navigate to the [wir-next](./wir-next/) folder, run 
```bash
npm install
```
then see the [README](./wir-next/README.md) file in the `wir-next` folder.

---

## Post Assignment Questions

1. #### Roman Math   
 The easiest way to implement this is to use the conversion method I just implemented, let the computer do the math itself, and then convert back to roman numerals. It would just require creating a few more methods (one for each operation), and creating a few more fields on the front end for:
 - two inputs for the roman numerals
 - a selector of which operation to perform
 - a trigger button (using the state updating like I did to trigger the conversion is also possible, but I feel like it's cleaner when doing operations to lay out the parameters first)

 You could also make the operations api-endpoints, if you wanted to. But since these are simple operations, you're not saving much processing/time to have the back-end perform them.

2. #### Testing   
 I would create unit tests for every component, api-endpoint, and method. I would use intergration tests to handle the DOM in it's entirety. You could use E2E tests for this, but imagining it scaling, the original MVP and future versions would be so different it might not be an effective use of time.

3. #### Logging   
 Perfomance logs for the "server" might be useful, but I would just have error logs output to a file. Maybe a new file for each day could be created. I believe Vercel itself has multiple logging capabilites.

4. #### Validation   
 I did implement validaton, although I probably gave the user too much information. I live (and will probably die by) the thought: "If a user is invovled, validate their input". I implemented the validation on both the frontend and the backend. Implementing validation on the frontend allows the portal/website to let the user know that there is an issue without ever having to query the api (a performance perk). Impmenting validation on the backend is the most important (especially because there's no authentication), so that anyone directly querying the api does not cause issues.

5. #### Continuous Integration   
 Vercel offers continous integration automatically. I don't have a lot of experience with it, but I would figure out how to set up the CI pipeline to run through the tests before integration completes. If any tests fail, it should abort the integration (roll back to the last stable version).