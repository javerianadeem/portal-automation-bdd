package com.qa.stepDefinition;

import com.cucumber.listener.Reporter;
import com.qa.base.TestBase;
import com.qa.util.TestUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.google.common.io.Files;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

public class Hooks extends TestBase {
    public TestUtil testUtil = new TestUtil();

    public Hooks() throws IOException {
    }

    @Before
    public void beforeScenario(Scenario scenario){
        System.out.println("Hello World");
        initialization();
        Reporter.loadXMLConfig(new File(properties.getProperty("reportConfigPath")));
        Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("Java Version", System.getProperty("java.version"));
    }

    @After(order = 1)
    public void afterScenario(Scenario scenario) throws URISyntaxException, IOException {
        if (scenario.isFailed()) {
//            final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
//            scenario.attach(screenshot, "image/png", "image");
            System.out.println("Scenario NAME" + scenario.getName());
//            log

            String screenshotName = scenario.getName().replaceAll(" ", "_");
            final byte[] screenshot1 = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            // embed it in the report.
            scenario.embed(screenshot1, "image/png");

            String screenshotPath = testUtil.getScreenshot(scenario.getName());
            System.out.println("screenshot pathhhhhhhhhhhhhhh" + screenshotPath);
            try {

                File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
                String screenshot=System.getProperty("user.dir") + "/target/cucumber-reports/screenshots/" + screenshotName + ".png";
                File destinationPath = new File(screenshot);
                Files.copy(sourcePath, destinationPath);
                System.out.println("screenshot pathhhhhhhhhhhhhhh" + destinationPath.toString());
                Reporter.addScreenCaptureFromPath(destinationPath.toString());
            } catch (IOException e) {
            }
        }
    }

    @After(order = 0)
    public void closeBrowser(){
        driver.quit();
    }
}
