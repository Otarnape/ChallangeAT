// (Bring It On) When performing the task, you need to use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

// 1. Open https://pastebin.com or a similar service in any browser

// 2. Create a New Paste with the following details:

// * Code:

// git config --global user.name "New Sheriff in Town"

// git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")

// git push origin master --force

// * Syntax Highlighting: "Bash"

// * Paste Expiration: "10 Minutes"

// * Paste Name / Title: "how to gain dominance among developers"

// 3. Save paste and check the following:

// * Browser page title matches Paste Name / Title

// * Syntax is suspended for bash

// * Check that the code matches the one entered in paragraph 2

describe("Bring It On", () => {
  it("Bring It On test", async () => {
    await browser.url("https://pastebin.com");

    //New paste and others

    await $("/html/body/div[1]/div[1]/div/div/div[1]/a[2]").click();
    await $("#postform-text").addValue(
      'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force'
    );

    //Bash
    await $("#select2-postform-format-container").click();
    const bash = await $('//ul/li[text()="Bash"]');
    await bash.click();

    // 10 Minutes
    await $("#select2-postform-expiration-container").click();
    const m10 = await $('//span/ul/li[text()="10 Minutes"]');
    await m10.click();

    //Page title

    await $("#postform-name").addValue(
      "how to gain dominance among developers"
    );

    //Save

    await $('//div/button[text()="Create New Paste"]').click();

    await browser.pause(2000);

    //Check Bash

    const btntitle = await $('//div/a[text()="Bash"]').getText();
    expect(btntitle).toEqual("Bash");
    console.log(btntitle);

    //Check Title
    const pageTitle = await $("head > title").getTitle();
    expect(pageTitle).toMatch("how to gain dominance among developers");

    // Check Code

    const codeone = await $('//li/div[text()=" user.name "]').getText();
    expect(codeone).toEqual(
      'git config --global user.name "New Sheriff in Town"'
    );

    const codetwo = await $('//li/div[text()=" HEAD ^ "]').getText();
    expect(codetwo).toEqual(
      'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")'
    );

    const codethree = await $('//li/div[text()=" origin master "]').getText();

    expect(codethree).toEqual("git push origin master --force");

    await browser.pause(1000);
  });
});
