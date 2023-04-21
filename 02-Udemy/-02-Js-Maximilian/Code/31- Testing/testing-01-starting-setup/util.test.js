const puppeteer = require('puppeteer');
const { generateText, checkandgenerate } = require('./util');

test('should output name and age', () => {
  // test runner
  const text = generateText('Ahmed', 22);
  expect(text).toBe('Ahmed (22 years old)'); // assert
  const text2 = generateText('meshmesh', 21);
  expect(text2).toBeNan;
});

test('should generate a valid text output', () => {
  const text = checkandgenerate('Ahmed', 22);
  expect(text).toBe('Ahmed (22 years old)');
});

test('should create and element with text and correct clase', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ['--window-size=1920,1080'],
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///D:/Kalbonyan/JS/31-%20Testing/testing-01-starting-setup/index.html'
  );
  await page.click('input#name');
  await page.type('input#name', 'Ahmed');
  await page.click('input#age');
  await page.type('input#age', '22');
  await page.click('#btnAddUser');
  const text = await page.$eval('.user-item', (el) => el.textContent);
  expect(text).toBe('Ahmed (22 years old)');
}, 10000); // test takes 3rd arg = time in ms
// test('should output dataless text', () => {
//   const text = generateText('', null);
//   expect(text).toBe(' (null years old)');
// });
