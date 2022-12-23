// Install  WebdriverIO  and do the following task:

// (I Can Win) When performing the task, you must use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

// 1. Open https://pastebin.com or a similar service in any browser

// 2. Create a New Paste with the following details:

// * Code: "Hello from WebDriver"

// * Paste Expiration: "10 Minutes"

// * Paste Name / Title: "helloweb"

describe("I Can Win", () => {
  it("I Can Win test", async () => {
    await browser.url("https://pastebin.com");
    await $("/html/body/div[1]/div[1]/div/div/div[1]/a[2]").click();
    await $("#postform-text").addValue("Hello from WebDriver");

    await $("#select2-postform-expiration-container").click();

    const m10 = await $('//span/ul/li[text()="10 Minutes"]');
    await m10.click();

    await $("#postform-name").addValue("helloweb");

    await browser.pause(1000);
  });
});
