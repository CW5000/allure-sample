# allure-sample
A sample implementation of allure reports. 

This demonstrates the following capabilities:
1. Allure is capable of producing a simple report with pass fail and summary.
2. Errors are able to be traced to test cases and even test steps.
3. Bonus: Screenshots can be captured and added to the reports.
4. Bonus: Report history is retained for trend info.

Instructions
1. Clone repo.
2. Run the following:

  npm install (to install the package).
  
  npm run test (to execute the test suite).
  
  allure generate (to generate the allure report; use the --clean argument on subsequent executions).
  
  allure open (to open the allure reports server).
  
Troubleshooting / Known Issues:

If 'allure' is not recognized, you may have to install the allure-commandline package globally. I was eventually able to overcome this, however, and was able revert to saving it as a local dev dependency.

I spent too long on this, trying to make the screenshots work. And even with all the effort, my script is trying to save two attachments to the test record - one is a working screenshot, the other is a non-functional artifact. I'd spend more time on this if we decide to go with Allure.
