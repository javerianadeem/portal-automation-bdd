package com.qa.stepDefinition;

import com.aventstack.extentreports.ExtentReporter;
import com.aventstack.extentreports.ExtentReports;
import com.cucumber.listener.ExtentCucumberFormatter;
import com.cucumber.listener.ExtentProperties;
import com.qa.base.TestBase;
import com.qa.pages.DashboardPage;
import com.qa.pages.LoginPage;
import com.qa.pages.PersonalInformationPage;
import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.io.IOException;
import java.util.logging.Logger;

public class PersonalInformationSteps extends TestBase {
    LoginPage loginPage;
    DashboardPage dashboardPage;
    PersonalInformationPage personalInformationPage;
    ExtentReports extentReports = new ExtentReports();
    public static Scenario scenario;
    private static Logger logger;

    public PersonalInformationSteps() throws IOException {
    }


    @Given("^User is logged into the application$")
    public void user_is_logged_into_the_application() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        loginPage = new LoginPage();
        dashboardPage = loginPage.loginValidUser(properties.getProperty("username"), properties.getProperty("password"));
//        logger.info("Helloooooooooooooooooooo");
//        CommonSte
    }

    @Given("^User is on personal information page$")
    public void user_is_on_personal_information_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        personalInformationPage = dashboardPage.clickOnPersonalInfo();
        String personalInformationTitle = personalInformationPage.validatePersonalInfoPageTitle();
        Assert.assertEquals(properties.getProperty("personalInformationPageTitle"),personalInformationTitle);


    }

    @When("^User clicks the edit skill button, type new skills and hit save button$")
    public void user_clicks_the_edit_skill_button_type_new_skills_and_hit_save_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
            personalInformationPage.addSkill(properties.getProperty("skillName"));

    }

    @Then("^New skill is added in primary skills$")
    public void new_skill_is_added_in_primary_skills() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean response = personalInformationPage.verifySkill(properties.getProperty("skillName"));
        if (response) {
            System.out.println(properties.getProperty("skillName") + " as a skill is added");
        } else {
            System.out.println(properties.getProperty("skillName") + " as a skill is not added");
            Assert.fail();
        }
    }


}
