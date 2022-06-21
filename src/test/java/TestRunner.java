import com.qa.base.TestBase;


import com.qa.util.TestUtil;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import java.io.File;
import java.io.IOException;
import cucumber.api.junit.Cucumber;
import com.cucumber.listener.Reporter;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/features"},
//        glue = {"src/test/java/com/qa/stepDefinition"},
//        tags = {"@Type3"},
        monochrome = true,
        plugin = {  "pretty",
                "html:cucumber-html-report",
                "json:target/cucumber-reports/cucumber.json",
                "junit:target/cucumber-reports/cucumber.xml",
                "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/extent.html"
//                "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:target/cucumber-reports/extent.html"
               }
)
public class TestRunner {
    public TestRunner() throws IOException {
    }


}

