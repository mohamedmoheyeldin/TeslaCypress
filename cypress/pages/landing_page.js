/// <reference types="cypress" />
class landing_page {

    logo (){
        return cy.get('[aria-label="Tesla Logo"]')
    }

    header(){
        return cy.get('[id="tds-site-header-wrapper"]')
    }

    footer(){
        return cy.get('.dialog-off-canvas-main-canvas > [data-component-status] .tds-footer-nav')
    }

    model_S_header_link(){
        return cy.get('[title="Model S"]')
    }

    model_3_header_link(){
        return cy.get('[title="Model 3"]')
    }

    model_X_header_link(){
        return cy.get('[title="Model X"]')
    }

    model_Y_header_link(){
        return cy.get('[title="Model Y"]')
    }

    solar_roof_header_link(){
        return cy.get('[title="Solar Roof"]')
    }

    solar_panels_header_link(){
        return cy.get('[title="Solar Panels"]')
    }

    section_header_text(){
        return cy.get('.tcl-homepage-hero--overlay > .tcl-homepage-hero__content > .tcl-homepage-hero__heading')
    }

    section_schedule_demo_drive_link(){
        return cy.get('.tcl-homepage-hero--overlay > .tcl-homepage-hero__content > .tds--hideon-phone-only > .tds-link')
    }

    section_order_shop_button(){
        return cy.get('.tcl-homepage-hero--overlay > .tcl-homepage-hero__content > .tcl-homepage-hero__content-end > .tcl-homepage-hero__buttons-on-desktop > .tcl-button-group > .tds-btn--primary > span')
    }

    section_view_inventory_LearnMore_button(){
        return cy.get('.tcl-homepage-hero--overlay > .tcl-homepage-hero__content > .tcl-homepage-hero__content-end > .tcl-homepage-hero__buttons-on-desktop > .tcl-button-group > .tds-btn--tertiary > span')
    }

    section_model_y_pic(){
        return cy.get('.tcl-image__picture > img[alt=\'Metallic blue Model Y driving down a hillside highway\']')
    }

    section_model_3_pic(){
        return cy.get('.tcl-image__picture > img[alt^=\'Red Model 3 parked on weathered concrete in front of a citys\']')
    }

    section_model_S_pic(){
        return cy.get('[data-alt=\'Solid black Model S accelerating on an elevated highway\t\'] .tcl-objectfit-position--center')
    }

    section_model_X_pic(){
        return cy.get('.tcl-image__picture > img[alt=\'Pearl white Model X navigating a mountainous road\']')
    }

    section_solar_panels_pic(){
        return cy.get('.tcl-image__picture > img[alt=\'Ranch style home powered by Tesla solar panels and Powerwall\']')
    }

    section_solar_header_text(){
        return cy.get('.tcl-homepage-content-snapping > section:nth-of-type(1) .tcl-homepage-hero__subcopy-desktop')
    }

    section_solar_roof_pic(){
        return cy.get('img[alt=\'Home outfitted with Tesla Solar Roof\']')
    }

    section_accessories_pic(){
        return cy.get('.tcl-image__picture > img[alt=\'Gen 3 Wall Connector with tempered white glass faceplate\']')
    }
}

export default  landing_page