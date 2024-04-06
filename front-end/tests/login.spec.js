// @ts-nocheck
const { test, expect } = require('@playwright/test');
import { CREDENTIALS, CARD_DATA} from '../data/constants';
import { LoginPage } from '../page-objects/login-page';
import { MainBoard } from '../page-objects/main-board';

test.describe('Login and landing features', ()=>{

  test('Log in to Trello', async ({page}) => {
    const loginPage = new LoginPage(page);
    const mainBoard = new MainBoard(page);
    await loginPage.submitLogInForm(CREDENTIALS.username, CREDENTIALS.password);
    await expect(mainBoard.landingPageLabel).toBeVisible();
  })

  test.only('Add a card', async ({page}) => {
    const loginPage = new LoginPage(page);
    const mainBoard = new MainBoard(page);
    await loginPage.submitLogInForm(CREDENTIALS.username, CREDENTIALS.password);
    const addedCardName = await mainBoard.addACard(CARD_DATA.listName.done, CARD_DATA.cardTitle);
    await mainBoard.assertCardAddedSuccessfully(CARD_DATA.listName.done, addedCardName);
    await page.pause();
   
  })
});


