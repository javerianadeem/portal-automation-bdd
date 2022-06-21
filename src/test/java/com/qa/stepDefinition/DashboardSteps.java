package com.qa.stepDefinition;

import com.qa.base.TestBase;
import com.qa.pages.DashboardPage;
import com.qa.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.io.IOException;

public class DashboardSteps extends TestBase {
    LoginPage loginPage;
    DashboardPage dashboardPage;
    public DashboardSteps() throws IOException {
    }

    @Given("^User has logged into the application$")
    public void userHasLoggedIntoTheApplication() throws IOException {
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
    }

    @And("^User is on Dashboard$")
    public void userIsOnDashboard() {
        String dashboardTitle = dashboardPage.validateDashboardPageTitle();
        Assert.assertEquals(properties.getProperty("dashboardPageTitle"), dashboardTitle);

    }

    @When("^User clicks on personal information tab$")
    public void userClicksOnPersonalInformationTab() throws IOException, InterruptedException {
        dashboardPage.clickOnPersonalInfo();

    }

    @Then("^He should be redirected to personal information page$")
    public void heShouldBeRedirectedToPersonalInformationPage() {

    }
}
