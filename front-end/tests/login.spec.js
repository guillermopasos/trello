// @ts-nocheck
const { test, expect } = require('@playwright/test');
import { CREDENTIALS} from '../data/constants';
import { LoginPage } from '../page-objects/loing-page';
import { MainBoard } from '../page-objects/main-board';

test.describe('Login and landing features', ()=>{
  let loginPage;
  let mainBoard;

  test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    mainBoard = new MainBoard(page);
  });

  test('Log in to Trello', async () => {
    await loginPage.submitLogInForm(CREDENTIALS.username, CREDENTIALS.password);
    await expect(mainBoard.landingPageLabel).toBeVisible();
  })
});


