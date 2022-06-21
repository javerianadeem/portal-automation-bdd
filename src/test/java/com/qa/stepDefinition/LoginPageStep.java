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

public class LoginPageStep extends TestBase {
    LoginPage loginPage;
    DashboardPage dashboardPage;

    public LoginPageStep() throws IOException {
    }

    @Given("^User opens the browser and open url$")
    public void userOpensTheBrowserAndOpenUrl() throws IOException {
        loginPage = new LoginPage();
    }

    @And("^title of login page is Login$")
    public void titleOfLoginPageIsLogin() throws IOException, InterruptedException {
        String loginTitle = loginPage.validateLoginPageTitle();
        Assert.assertEquals(properties.getProperty("loginPageTitle"), loginTitle);
        loginPage.loginValidUser(properties.getProperty("username"), properties.getProperty("password"));
    }

    @When("^User types the valid username and password and hit login$")
    public void userTypesTheValidUsernameAndPasswordAndHitLogin() throws IOException, InterruptedException {
        dashboardPage = loginPage.loginValidUser(properties.getProperty("username"), properties.getProperty("password"));
    }

    @Then("^user should be redirected to dashboard$")
    public void userShouldBeRedirectedToDashboard() {
        String dashboardTitle = dashboardPage.validateDashboardPageTitle();
        Assert.assertEquals(properties.getProperty("dashboardPageTitle"),dashboardTitle);
    }
}
