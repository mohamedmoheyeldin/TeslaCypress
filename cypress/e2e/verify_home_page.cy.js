/// <reference types="cypress" />


const CarInfo = require('../fixtures/car_models.json')
import homeTextVerify from "../fixtures/landingPageText.json";
import landing_page from "../pages/landing_page";

const landingPage = new landing_page()


context('Verify landing page', () => {

    it('Verify landing page', () => {
        landingPage.model_S_header_link().should('be.visible').and('have.text','Model S')
        landingPage.model_3_header_link().should('be.visible').and('have.text','Model 3')
        landingPage.model_X_header_link().should('be.visible').and('have.text','Model X')
        landingPage.model_Y_header_link().should('be.visible').and('have.text','Model Y')
        landingPage.solar_roof_header_link().should('be.visible').and('have.text','Solar Roof')
        landingPage.solar_panels_header_link().should('be.visible').and('have.text','Solar Panels')
        landingPage.section_accessories_pic().scrollIntoView().and('be.visible')
        landingPage.footer().should('be.visible')
    })

    CarInfo.forEach((CarInformation) => {
    it('Verify Mode Y section', () => {
        cy.get('CarInformation.modelPicture').should('be.visible')
        //landingPage.section_model_y_pic().should('be.visible')
        landingPage.section_header_text().should('be.visible').and('have.text',CarInformation.modelHeaderText)
        landingPage.section_schedule_demo_drive_link().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.ScheduleDemoDrive)
        landingPage.section_order_shop_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.CustomOrderButton)
        landingPage.section_view_inventory_LearnMore_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.ViewInventoryButton)
    })
    })

    it('Verify Mode 3 section', () => {
        landingPage.section_model_3_pic().scrollIntoView().and('be.visible')
        landingPage.section_header_text().should('be.visible').and('have.text',homeTextVerify.TextInfo.model3.HeaderText)
        landingPage.section_schedule_demo_drive_link().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.ScheduleDemoDrive)
        landingPage.section_order_shop_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.CustomOrderButton)
        landingPage.section_view_inventory_LearnMore_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.ViewInventoryButton)
    })

    it('Verify Mode S section', () => {
        landingPage.section_model_S_pic().scrollIntoView().and('be.visible')
        landingPage.section_header_text().should('be.visible').and('have.text',homeTextVerify.TextInfo.modelS.HeaderText)
        landingPage.section_schedule_demo_drive_link().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.ScheduleDemoDrive)
        landingPage.section_order_shop_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.CustomOrderButton)
        landingPage.section_view_inventory_LearnMore_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.ViewInventoryButton)
    })

    it('Verify Mode X section', () => {
        landingPage.section_model_X_pic().scrollIntoView().and('be.visible')
        landingPage.section_header_text().should('be.visible').and('have.text',homeTextVerify.TextInfo.modelX.HeaderText)
        landingPage.section_schedule_demo_drive_link().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.ScheduleDemoDrive)
        landingPage.section_order_shop_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.CustomOrderButton)
        landingPage.section_view_inventory_LearnMore_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.generic.ViewInventoryButton)
    })

    it('Verify Solar Panels section', () => {
        landingPage.section_solar_panels_pic().scrollIntoView().and('be.visible')
        landingPage.section_header_text().should('be.visible').and('have.text',homeTextVerify.TextInfo.solarPanels.HeaderText)
        landingPage.section_solar_header_text().should('be.visible').and('have.text',homeTextVerify.TextInfo.solarPanels.MiniHeaderText)
        landingPage.section_order_shop_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.solarPanels.OrderNowButton)
        landingPage.section_view_inventory_LearnMore_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.solarPanels.LearnMoreButton)
    })

    it('Verify Solar Roof section', () => {
        landingPage.section_solar_roof_pic().scrollIntoView().and('be.visible')
        landingPage.section_header_text().should('be.visible').and('have.text',homeTextVerify.TextInfo.SolarRoofPanels.HeaderText)
        landingPage.section_solar_header_text().should('be.visible').and('have.text',homeTextVerify.TextInfo.SolarRoofPanels.MiniHeaderText)
        landingPage.section_order_shop_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.SolarRoofPanels.OrderNowButton)
        landingPage.section_view_inventory_LearnMore_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.SolarRoofPanels.LearnMoreButton)
    })

    it('Verify Accessories section', () => {
        landingPage.section_accessories_pic().scrollIntoView().and('be.visible')
        landingPage.section_header_text().should('be.visible').and('have.text',homeTextVerify.TextInfo.Accessories.HeaderText)
        landingPage.section_order_shop_button().should('be.visible').and('have.text',homeTextVerify.TextInfo.Accessories.ShopNowButton)

    })

})