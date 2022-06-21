$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PersonalInformation.feature");
formatter.feature({
  "line": 1,
  "name": "Add new primary skill",
  "description": "",
  "id": "add-new-primary-skill",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6266771700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Adding new primary skill",
  "description": "",
  "id": "add-new-primary-skill;adding-new-primary-skill",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Type3"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is logged into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User clicks the edit skill button, type new skills and hit save button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "New skill is added in primary skills",
  "keyword": "Then "
});
formatter.match({
  "location": "PersonalInformationSteps.user_is_logged_into_the_application()"
});
formatter.result({
  "duration": 10907996000,
  "status": "passed"
});
formatter.match({
  "location": "PersonalInformationSteps.user_is_on_personal_information_page()"
});
formatter.result({
  "duration": 15413967600,
  "status": "passed"
});
formatter.match({
  "location": "PersonalInformationSteps.user_clicks_the_edit_skill_button_type_new_skills_and_hit_save_button()"
});
formatter.result({
  "duration": 9969580400,
  "status": "passed"
});
formatter.match({
  "location": "PersonalInformationSteps.new_skill_is_added_in_primary_skills()"
});
formatter.result({
  "duration": 231574900,
  "status": "passed"
});
formatter.after({
  "duration": 117200,
  "status": "passed"
});
formatter.after({
  "duration": 745488800,
  "status": "passed"
});
formatter.before({
  "duration": 6297834500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "#Feature: Clicking on personal information page"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "id": "add-new-primary-skill;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Type1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User has logged into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User is on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on personal information tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "He should be redirected to personal information page",
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardSteps.userHasLoggedIntoTheApplication()"
});
formatter.result({
  "duration": 1917200,
  "status": "passed"
});
formatter.match({
  "location": "DashboardSteps.userIsOnDashboard()"
});
formatter.result({
  "duration": 14268800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]\u003e but was:\u003c[Login]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.qa.stepDefinition.DashboardSteps.userIsOnDashboard(DashboardSteps.java:29)\r\n\tat ✽.And User is on Dashboard(PersonalInformation.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DashboardSteps.userClicksOnPersonalInformationTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DashboardSteps.heShouldBeRedirectedToPersonalInformationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3276054200,
  "status": "passed"
});
formatter.after({
  "duration": 671635100,
  "status": "passed"
});
formatter.before({
  "duration": 12377027100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#"
    },
    {
      "line": 18,
      "value": "#Feature: ESS Plus login feature"
    }
  ],
  "line": 20,
  "name": "Check login successful with valid credentials",
  "description": "",
  "id": "add-new-primary-skill;check-login-successful-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Type2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User opens the browser and open url",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of login page is Login",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User types the valid username and password and hit login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user should be redirected to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.userOpensTheBrowserAndOpenUrl()"
});
formatter.result({
  "duration": 1955800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.titleOfLoginPageIsLogin()"
});
formatter.result({
  "duration": 10616655800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.userTypesTheValidUsernameAndPasswordAndHitLogin()"
});
formatter.result({
  "duration": 78629000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027uname\u0027]\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027KHILT-9410\u0027, ip: \u0027192.168.146.113\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\JAVERI~1.NAD\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:51211}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b48811973e9c7187500d6ce8355d2b0d\n*** Element info: {Using\u003dname, value\u003duname}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\r\n\tat com.qa.pages.LoginPage.enterUsername(LoginPage.java:34)\r\n\tat com.qa.pages.LoginPage.loginValidUser(LoginPage.java:46)\r\n\tat com.qa.stepDefinition.LoginPageStep.userTypesTheValidUsernameAndPasswordAndHitLogin(LoginPageStep.java:35)\r\n\tat ✽.When User types the valid username and password and hit login(PersonalInformation.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageStep.userShouldBeRedirectedToDashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 931854200,
  "status": "passed"
});
formatter.after({
  "duration": 692522800,
  "status": "passed"
});
});