
export class MainBoard{ // Exporting class in order to use it across the tests.
    // Locators are all in the constructor to optimize centralization and good practices.
    constructor(page){
        this.landingPageLabel =  page.getByRole('heading', { name: 'YOUR WORKSPACES' });
    }
    // Functions that perform actions. Function naming convention should be actions.
}