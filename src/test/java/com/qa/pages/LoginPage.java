package com.qa.pages;

import com.qa.base.TestBase;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;
import java.util.concurrent.TimeUnit;


public class LoginPage extends TestBase {
    @FindBy(name="uname")
    WebElement username;

    @FindBy(name="psw")
    WebElement password;

    @FindBy(tagName = "button")
    WebElement loginButton;


    public LoginPage() throws IOException {
        PageFactory.initElements(driver, this);
    }

    public String validateLoginPageTitle(){
        return driver.getTitle();
    }


    public void enterUsername(String uname){
        username.sendKeys(uname);
    }

    public void enterPassword(String pass){
        password.sendKeys(pass);
    }

    public void clickOnLogin(){
        loginButton.click();
    }

    public DashboardPage loginValidUser(String uname, String pass) throws IOException, InterruptedException {
        enterUsername(uname);
        enterPassword(pass);
        clickOnLogin();
        loginButton.click();
        TimeUnit.SECONDS.sleep(10);
        return new DashboardPage();
    }
}
