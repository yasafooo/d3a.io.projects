export class Project {
    navigateToProject(){
        cy.get('.icon-projects').click();
        return this;
    }
    createANewProject(name,description){
        cy.get('.button--accent').click();
        cy.get('#input-field-name').type(name);
        cy.get('#textarea-field-nameTextArea').type(description);
        cy.get('.library-name-modal__container > .button').click();
        return this;
    }
    verifyProjectAvailability(name,description){
        cy.xpath("//*[text()='"+name+"']/ancestor::div[@class='ConfigurationListHeadWrapper saved-project']//p[@class='innerWrapper__description']").should("have.text", description);
        return this;
    }
    createASimulation(projectName,simulationName,simulationDescription){
        cy.xpath("//*[text()='"+projectName+"']/../div[@class='saved-project__headline__carat saved-project__headline__carat--closed']",).click();
        cy.xpath("//*[text()='new simulation']",).click();
        cy.get('#input-field-name').clear().type(simulationName);
        cy.get('#textarea-field-description').clear().type(simulationDescription);
        cy.get('.button').click();
        return this;
    }
    verifySimulationAvailability(projectName,simulationName){
        cy.xpath("//*[text()='"+projectName+"']/../../../../div[@class='configurations']//p").contains(simulationName).should("have.text", simulationName);
        return this;
    }
}