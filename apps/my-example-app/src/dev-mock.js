window.document.addEventListener('DOMContentLoaded', () => {
  const services = {};
  const pageModel = {
    "id": "fa9c419a-9ec4-4dd3-b08e-2e9857f8e8f7",
    "name": "bb-my-example-app-ang-_-f1b4d30c1ba4",
    "properties": {
      "area": "0",
      "src": "$(contextRoot)/static/items/bb-my-example-app-ang/index.hbs",
      "render.requires": "render-bb-ssr",
      "render.strategy": "render-bb-widget-3",
      "label": "Angular MyExampleApp App Container",
      "title": "Angular MyExampleApp App Container",
      "order": "8"
    },
    "children": [{
        name: 'todo-widget',
        properties: {
          classId: 'TodoWidgetComponent'
        }
      }, 
      // {
      //   "id": "ed4c5acf-eb84-44dc-823f-9414055b38e3",
      //   "name": "bb-panel-container-ang-_-73bf0aa98bc4",
      //   "properties": {
      //     "area": "0",
      //     "classId": "PanelContainerComponent",
      //     "src": "$(contextRoot)/static/items/bb-panel-container-ang/index.html",
      //     "render.requires": "render-bb-widget-3",
      //     "cssClasses": "d-block container",
      //     "title": "Panel Container",
      //     "order": "8"
      //   },
      //   "children": [
      //     {
      //       "id": "7423276d-de16-4d17-afd1-e0fcd7ab47cf",
      //       "name": "bb-tab-container-ang-_-414300dea6b7",
      //       "properties": {
      //         "area": "0",
      //         "child.2.title": "Tab 3",
      //         "classId": "TabContainerComponent",
      //         "child.extendedItemName": "bb-panel-container-ang",
      //         "src": "$(contextRoot)/static/items/bb-tab-container-ang/index.html",
      //         "render.requires": "render-bb-widget-3",
      //         "child.amountToCreate": "3",
      //         "child.0.title": "Tab 1",
      //         "title": "Tab Container",
      //         "child.1.title": "Tab 2",
      //         "order": "8"
      //       },
      //       "children": [
      //         {
      //           "id": "98185baf-99b0-4979-b2cf-f37127f4d064",
      //           "name": "bb-panel-container-ang-_-bd88b7c65bd6",
      //           "properties": {
      //             "area": "0",
      //             "classId": "PanelContainerComponent",
      //             "src": "$(contextRoot)/static/items/bb-panel-container-ang/index.html",
      //             "render.requires": "render-bb-widget-3",
      //             "cssClasses": "d-block",
      //             "title": "Accounts",
      //             "order": "8"
      //           },
      //           "children": [
      //             {
      //               "id": "a207c7a3-adf2-4b35-9af8-af62ab14c3fe",
      //               "name": "bb-deck-container-ang-_-70d3a4b4f9bb",
      //               "properties": {
      //                 "area": "0",
      //                 "child.2.title": "Deck 3",
      //                 "classId": "DeckContainerComponent",
      //                 "child.extendedItemName": "bb-panel-container-ang",
      //                 "src": "$(contextRoot)/static/items/bb-deck-container-ang/index.html",
      //                 "render.requires": "render-bb-widget-3",
      //                 "child.amountToCreate": "3",
      //                 "child.0.title": "Deck 1",
      //                 "title": "Deck Container",
      //                 "child.1.title": "Deck 2",
      //                 "order": "8"
      //               },
      //               "children": [
      //                 {
      //                   "id": "fa62ce79-8a18-4dc1-a9eb-d77149f33655",
      //                   "name": "bb-panel-container-ang-_-0d3a025f3361",
      //                   "properties": {
      //                     "area": "0",
      //                     "classId": "PanelContainerComponent",
      //                     "src": "$(contextRoot)/static/items/bb-panel-container-ang/index.html",
      //                     "render.requires": "render-bb-widget-3",
      //                     "cssClasses": "d-block",
      //                     "title": "Accounts Deck",
      //                     "order": "8"
      //                   },
      //                   "children": [
      //                     {
      //                       "id": "35990469-5157-4470-b4df-4b4b67b066cb",
      //                       "name": "bb-product-summary-list-widget-ang-_-fbf724be5389",
      //                       "properties": {
      //                         "area": "0",
      //                         "classId": "ProductSummaryListWidgetComponent",
      //                         "showIcons": "true",
      //                         "output.selectedAccount": "navigation:bb-panel-container-ang-_-c8ba29732940",
      //                         "render.requires": "render-bb-widget-3",
      //                         "src": "$(contextRoot)/static/items/bb-product-summary-list-widget-ang/index.html",
      //                         "title": "Product Summary List WC3",
      //                         "order": "8"
      //                       }
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "5b7ee0d4-7fc0-4622-9718-d414f9ec817b",
      //                   "name": "bb-panel-container-ang-_-c8ba29732940",
      //                   "properties": {
      //                     "area": "0",
      //                     "classId": "PanelContainerComponent",
      //                     "src": "$(contextRoot)/static/items/bb-panel-container-ang/index.html",
      //                     "render.requires": "render-bb-widget-3",
      //                     "cssClasses": "d-block",
      //                     "title": "Transactions Deck",
      //                     "order": "16"
      //                   },
      //                   "children": [
      //                     {
      //                       "id": "705abeeb-e7e8-45bc-b46f-b93eba11bd36",
      //                       "name": "bb-transactions-list-widget-ang-_-765048cc206b",
      //                       "properties": {
      //                         "area": "0",
      //                         "classId": "TransactionsListWidgetComponent",
      //                         "render.requires": "render-bb-widget-3",
      //                         "bb.transaction.pageSize": "10",
      //                         "src": "$(contextRoot)/static/items/bb-transactions-list-widget-ang/index.html",
      //                         "options": "$(contextRoot)/static/items/bb-transactions-list-widget-ang/options.json",
      //                         "title": "Transactions List WC3",
      //                         "bb.transaction.paginationType": "load-more",
      //                         "bb.transaction.maxNavPages": "3",
      //                         "order": "8"
      //                       }
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "id": "03a36d50-b529-4587-bd4d-666a78d27386",
      //           "name": "bb-panel-container-ang-_-19ae32b0c275",
      //           "properties": {
      //             "area": "0",
      //             "classId": "PanelContainerComponent",
      //             "src": "$(contextRoot)/static/items/bb-panel-container-ang/index.html",
      //             "render.requires": "render-bb-widget-3",
      //             "cssClasses": "d-block",
      //             "title": "Payments",
      //             "order": "16"
      //           },
      //           "children": [
      //             {
      //               "id": "47d81964-de64-42f0-b4a2-1b6a5a86f7f0",
      //               "name": "bb-payord-initiate-sepa-payment-widget-ang-_-f5419b84a1b0",
      //               "properties": {
      //                 "area": "0",
      //                 "classId": "PayordInitiateSepaPaymentWidgetComponent",
      //                 "render.requires": "render-bb-widget-3",
      //                 "src": "$(contextRoot)/static/items/bb-payord-initiate-sepa-payment-widget-ang/index.html",
      //                 "recurring": "true",
      //                 "label": "Angular PayordInitiateSepaPayment Widget",
      //                 "title": "Initiate SEPA Payment WC3",
      //                 "urgent": "false",
      //                 "order": "8"
      //               }
      //             }
      //           ]
      //         },
      //         {
      //           "id": "958a5e5e-4634-4c67-aaae-c7dfab5d8329",
      //           "name": "bb-panel-container-ang-_-e03be34e5f24",
      //           "properties": {
      //             "area": "0",
      //             "classId": "PanelContainerComponent",
      //             "src": "$(contextRoot)/static/items/bb-panel-container-ang/index.html",
      //             "render.requires": "render-bb-widget-3",
      //             "cssClasses": "d-block",
      //             "title": "Contacts",
      //             "order": "24"
      //           },
      //           "children": [
      //             {
      //               "id": "9c3476f5-1c01-4f55-b6aa-851d978d439d",
      //               "name": "bb-contact-manager-ang-_-f132c50ac339",
      //               "properties": {
      //                 "area": "0",
      //                 "src": "$(contextRoot)/static/items/bb-contact-manager-ang/index.html",
      //                 "newContact": "true",
      //                 "pageSize": "5",
      //                 "label": "Angular Contact Manager WC3 Widget",
      //                 "title": "Contact Manager WC3",
      //                 "classId": "ContactManagerWidgetComponent",
      //                 "paginationType": "pagination",
      //                 "render.requires": "render-bb-widget-3",
      //                 "maxNavPages": "3",
      //                 "showAvatar": "true",
      //                 "order": "8"
      //               }
      //             }
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // }
    ]
  }
  window.BB.startSingleApp(services)
    .then(app => app.bootstrap(pageModel));
});