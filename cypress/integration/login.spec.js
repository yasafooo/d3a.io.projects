import {Login} from "../pages/Login";
import {Project} from "../pages/Project.js";
const login = new Login();
const project = new Project();

describe('My Test',()=>{
    beforeEach('navigate to login page',()=>{
        login.navigate();
    });
    it('should be able to login to using valid credentials',()=>{
        login.login('xojase2540@rebation.com','xojase2540123');
    });
    it('should be able create a project',()=>{
        login.login('xojase2540@rebation.com','xojase2540123');
        project.navigateToProject();
        project.createANewProject("my new project", "description");
        project.verifyProjectAvailability("my new project","description");
    });
    it('should be able create a simulation',()=>{
        login.login('xojase2540@rebation.com','xojase2540123');
        project.navigateToProject();
        project.createASimulation("my new project","my new simulation", "description");
        project.navigateToProject();
        project.verifySimulationAvailability("my new project","my new simulation");
    });
});